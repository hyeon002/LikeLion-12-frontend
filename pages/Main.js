import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Main.css";

import Logo from "../components/Logo";
import Icon from "../components/Icon";
import imagePaths from '../components/ProfileImages';

function Main() {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState('');
  const [ profileName, setProfileName ] = useState('');
  const [ profileIcon, setProfileIcon ] = useState(null);

  useEffect(() => {
    // localStorage 에서 저장된 이름 가져옴 
    const storedName = localStorage.getItem('profileName');
    const storedIconIndex = localStorage.getItem('selectedIcon');
    if (storedName) {
      setProfileName(storedName);
    }
    if (storedIconIndex !== null) {
      setProfileIcon(imagePaths[storedIconIndex]);
    }
  }, []);
  // useEffect(() => {
  //   const token = localStorage.getItem('accessToken');
  //   fetch('http://localhost:8080/members/profile', {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': `Bearer ${token}`
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data) {
  //         setProfileName(data.name); // 서버로부터 받은 사용자 이름 설정
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error fetching profile:', error);
  //     });
  // }, []);

  const handleComplete = () => {
    if (!selectedOption) {
      alert('옵션을 선택해주세요.');
      return;
    }
    localStorage.setItem('selectedOption', selectedOption);

    const token = localStorage.getItem('accessToken');

    fetch('http://localhost:8080/filters/side', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ state: selectedOption })
    })
    .then(result => {
      console.log('State successfully updated:', result);
      alert('설정이 완료되었습니다.');
      navigate('/RequestMain');
    })
    .catch(error => {
      console.error('Error:', error);
      alert(`서버 오류가 발생했습니다: ${error.message}`);
    });
  };

  return(
    <div className="main">
      <Logo />

      <div className="main_text">
        {profileIcon && <Icon imagePath={profileIcon} />}
        <p className="main_name">{profileName}님!</p>
        <p className="main_explain">밥약 신청 상태를 설정해 주세요</p>
        <p className="main_explain">설정을 바탕으로 랜덤 매칭이 시작됩니다</p>
      </div>

      <button 
        className={`main_button ${selectedOption === 'BUYER' ? 'active' : ''}`}
        onClick={() => setSelectedOption('BUYER')}
      >후배님 밥 먹어요~ <br/>(사줄래요)</button>
      <button 
        className={`main_button ${selectedOption === 'TAKER' ? 'active' : ''}`}
        onClick={() => setSelectedOption('TAKER')}
      >
        선배님 밥 사주세요~ <br/>(사주세요)
      </button>
      <button 
        className={`main_button ${selectedOption === 'BOTH' ? 'active' : ''}`}
        onClick={() => setSelectedOption('BOTH')}
      >
        둘 다 좋아요~
      </button>
      
      <button 
        className="SchoolCheck_button"
        onClick={handleComplete}
      >설정 완료</button>

      <div>
        <Link to={`/SignUp`}>page</Link>
      </div>
      <div>
        <Link to={`/RequestMain`}>RequestMain</Link>
      </div>
    </div>
  );
}

export default Main;