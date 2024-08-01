import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../styles/SchoolCheck.css';

import Input from '../components/Input';
import universityImage from '../images/university.png';

function SchoolCheck() {
  const [ email, setEmail ] = useState('');
  const [ code, setCode ] = useState('');
  const [ showEmailNumber , setShowEmailNumber ] = useState(false);
  const [ universityName, setUniversityName ] = useState('');
  const navigate = useNavigate();

  const [ nextPage, setNextPage ] = useState('다음 단계');
  const [ isError, setIsError ] = useState(true);

  
  // POST : email 로 인증 코드 전송
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
            throw new Error(error.message);
          });
        }
        return response;
      })
      .then(result => {
        if (result.success) {
          console.log('result : ', result);
          alert('인증코드가 전송되었습니다.');
          setShowEmailNumber(true);
        } else {
          console.log('result : ', result);
          alert('인증 코드 전송에 실패했습니다.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert(`서버 오류가 발생했습니다: ${error.message}`);
      });
    setShowEmailNumber(true);  // 임시로 인증코드가 확인되지 않아도 되도록 해놓음
  };


  // GET : email 로 대학교 이름 조회 
  const getUniversityName = () => {
    const token = localStorage.getItem('accessToken');

    fetch(`http://localhost:8080/members/university-by-email?email=${email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('서버 응답 상태 코드가 200이 아닙니다.');
      }
      return response.text();
    })
    .then(text => {
      if (text === '') {
        throw new Error('서버로부터 빈 응답을 받았습니다.');
      }
      try {
        const result = JSON.parse(text);
        setUniversityName(result.universityName);
      } 
      catch (error) {
        setUniversityName(text);  
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert(`오류가 발생했습니다: ${error.message}`);
    });
  }

  // POST : code 로 인증 코드 확인 
  const handleCodeCertificate = () => {
    const token = localStorage.getItem('accessToken');

    const requestData = {
      code: code.trim()
    };

    fetch('http://localhost:8080/members/profile/email/certificate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(requestData)
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(error => {
            console.error('Error response from server:', error);
            alert(`오류 발생: ${error.message}`);
            throw new Error(error.message || 'Unknown error');
          });
        }
        return response.json();
      })
      .then(result => {
        if (result.success) {
          console.log('result : ', result);
          alert('이메일 인증이 완료되었습니다.');
          navigate('/Profile1');
        } else {
          console.log('result : ', result);
          alert('인증에 실패했습니다.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert(`서버 오류가 발생했습니다: ${error.message}`);
      });
  }

  const handleNextStep = () => {
    if (email === "") {
      setNextPage('이메일을 입력해주세요');
      setIsError(false);
      return;
    }
    if (code === "") {
      setNextPage('인증 코드를 입력해주세요');
      setIsError(false);
      return;
    }
    setIsError(true);
    setNextPage('다음 단계');
    navigate('/Profile1');
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
            <button 
              className="SchoolCheck_button"
              onClick={handleCodeCertificate}
            >인증하기</button>
          </div>
        )}
      </div>

      {showEmailNumber && (
        <div className="SchoolCheck_name">
          <img src={universityImage} />
          <p>{universityName}</p>
        </div>
      )}
      
      <Link 
        to={`/Profile1`}
        className={`next_page ${!isError ? 'error' : ''}`}
        onClick={handleNextStep}
      >{nextPage}</Link>
    </div>
  );
}

export default SchoolCheck;