import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../components/Logo";

import "../styles/Main.css";
import Icon from "../components/Icon";

function Main( { name } ) {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate('/RequestMain');
  };

  return(
    <div className="main">
      <Logo />

      <div className="main_text">
        <Icon />
        <p className="main_name">{name}님!</p>
        <p className="main_explain">밥약 신청 상태를 설정해 주세요</p>
        <p className="main_explain">설정을 바탕으로 랜덤 매칭이 시작됩니다</p>
      </div>

      <button 
        className={`main_button ${selectedOption === 'apply' ? 'active' : ''}`}
        onClick={() => setSelectedOption('apply')}
      >후배님 밥 먹어요~ <br/>(신청할래요)</button>
      <button 
        className={`main_button ${selectedOption === 'eat' ? 'active' : ''}`}
        onClick={() => setSelectedOption('eat')}
      >
        선배님 밥 사주세요~ <br/>(먹을래요)
      </button>
      <button 
        className={`main_button ${selectedOption === 'both' ? 'active' : ''}`}
        onClick={() => setSelectedOption('both')}
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