import React from "react";
import "../styles/People.css";

import Keyword from "./Keyword";
import requestImage from '../images/requestImage.png';


function People({ memberId, profileIcon, name, universityName, major, grade, classOf, age, brief, keywords }) {
  
  const handleMatchRequest = () => {
    const token = localStorage.getItem('accessToken');
    fetch('http://localhost:8080/matches', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ targetMemberId: memberId })
    })
    .then(response => response.json())
    .then(result => {
      if (result.success) {
        alert("매치 요청을 성공적으로 보냈습니다.");
      } else {
        alert("매치 요청에 실패했습니다. 다시 시도해 주세요.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('서버 오류가 발생했습니다. 나중에 다시 시도해 주세요.');
    });
  };

  return(
    <div className="people">
      <div className="people_container">
        <div className="people_profile">
          <img />
        </div>

        <div className="people_text">
          <div className="people_name_container">
            <p className="people_name">{name}</p>
            <div className="status_circle red"></div>
          </div>
          <p className="people_explain">{universityName} {major} {grade}학년</p>
          <p className="people_explain">{classOf}학번 / {age}살</p>
          <p className="people_explain">"{brief}"</p>
        </div>

        <div className="requestImage_wrapper" onClick={handleMatchRequest}>
          <img className="requestImage" src={requestImage} />  
        </div>

      </div>

      <div className="keyword_wrapper">
        {keywords.map((keyword, index) => (
          <Keyword key={index} value={keyword} />
        ))}
        {/* <Keyword value={"진로"}/>
        <Keyword value={"친구"}/>
        <Keyword value={"기타"}/> */}
      </div>
    </div>
  );
}

export default People;