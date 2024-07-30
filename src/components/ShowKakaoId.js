import React, { useState } from "react";
import { Link } from 'react-router-dom';

import peopleKakaoId from '../images/peopleKakaoId.png';
import '../styles/PeopleLike.css';

function ShowKakaoId( { name } ) {
  return(
    <div className="ShowKakaoId">

      <div className="ShowKakaoId_profile">
        <img />
      </div>

      <p className="people_name">박지훈</p>
      <p className="people_explain">충남대학교 전자공학과 2학년</p>
        
      <div className="ShowKakaoId_id">
        <img src={peopleKakaoId} className="peopleKakao_image"/>
        <p>rladk99!@</p>
      </div>

    </div>
  );
}

export default ShowKakaoId;