import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../styles/SchoolCheck.css';

import Input from '../components/Input';

function SchoolCheck() {
  const [ email, setEmail ] = useState('');
  const [ code, setCode ] = useState('');
  const [ showEmailNumber , setShowEmailNumber ] = useState(false);
  const [ universityName, setUniversityName ] = useState('');

  
  // POST : email 로 인증 코드 전송
  // 500 오류..
  const handleSchoolEmailCheck = () => {
    const token = localStorage.getItem('accessToken');

    fetch('http://localhost:8080/members/profile/email/send-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ email: email })
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(error => {
            console.error('Error:', error);
            alert(error.message || 'Unknown error');
            throw new Error(error.message);
          });
        }
        return response.json();
      })
      .then(result => {
        console.log("Result : ", result);
        if (result.success) {
          alert('인증코드가 전송되었습니다.');
          setShowEmailNumber(true);
        } else {
          alert('인증 코드 전송에 실패했습니다.');
        }
      })

      .catch(error => {
        console.error('Error:', error);
        alert(`오류가 발생했습니다: ${error.message}`);
      });
    setShowEmailNumber(true);
  };

  // GET : email 로 대학교 이름 조회 
  // 400 오류..
  const getUniversityName = () => {
    const token = localStorage.getItem('accessToken');

    fetch('http://localhost:8080/members/university-by-email', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      if (!response.ok) {
        return response.json().then(error => {
          console.error('Error:', error);
          alert(error.message || 'Unknown error');
          throw new Error(error.message);
        });
      }
      return response.json();
    })
    .then(result => {
      console.log("University Result: ", result);
      // setUniversityName(result.universityName);
    })
    .catch(error => {
      console.error('Error:', error);
      alert(`오류가 발생했습니다: ${error.message}`);
    });
  }

  return(
    <div className="SchoolCheck">

      <div className="SchoolCheck_container">
        <div className="SchoolCheck_title_wrapper">
          <p className="SchoolCheck_title">안심 등록!</p>
          <p className="SchoolCheck_title_1">본인 인증 후 사용할 수 있어요</p>
          <p className="SchoolCheck_title_1">학교 이메일을 확인하고 인증하기 버튼을 눌러주세요</p>
        </div>

        <div className="SchoolCheck_input_wrapper">
          <Input 
            title={"소속 대학교 이메일 입력"} 
            type="email"
            value={email}
            onChange={setEmail}
          />
          <button 
            onClick={() => { handleSchoolEmailCheck(); getUniversityName();}}
            className="SchoolCheck_button"
          >전송하기</button>
        </div>

        {showEmailNumber && (
          <div className="SchoolCheck_input_wrapper">
            <Input 
              title={"인증번호 4자리 입력"}
              value={code}
              onChange={setCode}
            />
            <button className="SchoolCheck_button">인증하기</button>
          </div>
        )}
      </div>

      {showEmailNumber && (
        <div className="SchoolCheck_name">
          <p>대학교 : {universityName}</p>
        </div>
      )}
      
      <Link 
        to={`/Profile1`}
        className="next_page"
      >다음 단계</Link>
    </div>
  );
}

export default SchoolCheck;