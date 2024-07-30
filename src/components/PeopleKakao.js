import React, { useState } from "react";
import { Link } from 'react-router-dom';

import Keyword from "./Keyword";
import peopleKakaoId from '../images/peopleKakaoId.png';
import '../styles/PeopleLike.css';

function PeopleKakao( { name } ) {
  return(
    <div className="people">

      <div className="people_container">
        <div className="people_profile">
          <img />
        </div>

        <div className="people_text">
          <p className="people_name">박지훈</p>
          <p className="people_explain">충남대학교 전자공학과 2학년</p>
          <p className="people_explain">23학번 / 24살</p>
          <p className="people_explain">"성실한 청년"</p>
        </div>
      </div>

      <div className="keyword_wrapper">
        <Keyword value={"진로"}/>
        <Keyword value={"친구"}/>
        <Keyword value={"기타"}/>
      </div>

    
      <div className="peopleKakao_button">
        <button className="peopleKakao_button">
          <img src={peopleKakaoId} className="peopleKakao_image"/>
          카톡 아이디 보기
        </button>
      </div>
      
    </div>
  );
}

export default PeopleKakao;