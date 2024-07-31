import React from "react";
import { Link } from 'react-router-dom';

import "../styles/People.css";


function Message( { name } ) {
  return(
    <div className="message">
      <div className="message_container">
        <div className="message_profile">
          <img />
        </div>

        <div className="people_text">
          <div className="people_name_container">
            <p className="people_name">박지훈</p>
          </div>
          <p className="people_explain">충남대학교 전자공학과 2학년</p>
        </div>


      </div>
      
      <div className="message_text">
        <p>오늘 밥 같이 먹어서 좋았어 ~</p>
        <p>다음에 족보 필요하면 언제든지 연락해 !</p>
      </div>

    </div>
    
  );
}

export default Message;