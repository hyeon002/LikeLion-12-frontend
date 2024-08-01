import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../components/Logo";

import "../styles/Main.css";
import Icon from "../components/Icon";

function Main( { } ) {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

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
        <Icon />
        <p className="main_name">{}님!</p>
        <p className="main_explain">밥약 신청 상태를 설정해 주세요</p>
        <p className="main_explain">설정을 바탕으로 랜덤 매칭이 시작됩니다</p>
      </div>

      <button 
        className={`main_button ${selectedOption === 'BUYER' ? 'active' : ''}`}
        onClick={() => setSelectedOption('BUYER')}
      >후배님 밥 먹어요~ <br/>(신청할래요)</button>
      <button 
        className={`main_button ${selectedOption === 'TAKER' ? 'active' : ''}`}
        onClick={() => setSelectedOption('TAKER')}
      >
        선배님 밥 사주세요~ <br/>(먹을래요)
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