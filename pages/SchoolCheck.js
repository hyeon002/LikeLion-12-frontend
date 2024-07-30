import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../styles/SchoolCheck.css';

import Input from '../components/Input';

function SchoolCheck() {
  const [ email, setEmail ] = useState('');
  const [ code, setCode ] = useState('');
  const [ showEmailNumber , setShowEmailNumber ] = useState(false);

  

  const handleSchoolEmailCheck = () => {
    setShowEmailNumber(true);
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
            onClick={handleSchoolEmailCheck}
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
      
      <Link 
        to={`/Profile1`}
        className="next_page"
      >다음 단계</Link>
    </div>
  );
}

export default SchoolCheck;