import React from "react";
import "../styles/People.css";

import Keyword from "./Keyword";
import requestImage from '../images/request.png';


function People() {
  return(
    <div className="people">
      <div className="people_container">
        <div className="people_profile">
          <img />
        </div>

        <div className="people_text">
          <div className="people_name_container">
            <p className="people_name">박지훈</p>
            <div className="status_circle red"></div>
          </div>
          <p className="people_explain">충남대학교 전자공학과 2학년</p>
          <p className="people_explain">23학번 / 24살</p>
          <p className="people_explain">"성실한 청년"</p>
        </div>

        <div className="requestImage_wrapper">
          <img className="requestImage" src={requestImage} />  
        </div>

      </div>

      <div className="keyword_wrapper">
        <Keyword value={"진로"}/>
        <Keyword value={"친구"}/>
        <Keyword value={"기타"}/>
      </div>
    </div>
  );
}

export default People;