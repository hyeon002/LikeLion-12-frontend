import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../styles/SignUp2.css';

import logo from "../images/logo.png"
import Input from "../components/Input";

function SignUp2() {
  const [ phone, setPhone ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ isError, setIsError ] = useState(true);
  const navigate = useNavigate();

  const [ nextPage, setNextPage ] = useState('다음 단계');

  const logIn = () => {
    fetch('http://localhost:8080/members/login', {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        phone: phone,
        password: password
      })
    })
      .then(response => response.json())
      .then(result => {
        console.log("결과 : ", result);
        if (result.message) {
          alert(result.message);
        }
        else {
          alert("로그인 성공");
          localStorage.setItem('token', result.accessToken);
          navigate('/KakaoId');
        }
      })
  }

  const handleNextStep = () => {
    if (phone === "" || password === "") {
      setNextPage("모든 정보를 입력해주세요");
      setIsError(false);
      return;
    }
    setIsError(true);
    logIn();
    // navigate('/KakaoId');
    setNextPage("다음 단계");
  }

  return(
    <div className="signUp2">

      <div className="signUp_container">
        <div className="signUp_title">
          <p className="signUp_title_1">환영합니다!</p>
          <div className="signUp_logo">
            <img className="signUp_title_logo" src={logo} /> 
            <p className="signUp_title_2">에 다시 돌아와 주셨네요!</p>
          </div>
        </div>

        <div className="signUp_input_wrapper">
          <Input 
            title={"전화번호"} 
            value={ phone }
            onChange={ setPhone }
          />
          <Input 
            title={"비밀번호"} 
            value={ password }
            type="password"
            onChange={ setPassword }
          />
        </div>
      </div>

      {/* <Link 
        to={`/KakaoId`}
        className="next_page"
      >다음 단계</Link> */}
      <button 
        onClick={ handleNextStep }
        className={`next_page ${!isError ? 'error' : ''}`}
      >{ nextPage }</button>
    </div>
  );
}

export default SignUp2;