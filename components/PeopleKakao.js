import React, { useState } from "react";
import { Link } from 'react-router-dom';

import Keyword from "./Keyword";
import ShowKakaoId from "./ShowKakaoId";
import PeopleMessage from "./PeopleMessage";
import thankIcon from '../images/icon4_selected.png';
import peopleKakaoId from '../images/peopleKakaoId.png';
import '../styles/PeopleLike.css';

function PeopleKakao({ name }) {
  const [showKakaoId, setShowKakaoId] = useState(false);
  const [showThankIcon, setShowThankIcon] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [thankMessage, setThankMessage] = useState("");

  const handleKakaoClick = () => {
    if (showKakaoId) {
      setShowKakaoId(false);
      setTimeout(() => setShowThankIcon(true), 0); // Show the thank icon after returning to PeopleKakao view
    } else {
      setShowKakaoId(true);
      setShowThankIcon(false); // Hide the thank icon when ShowKakaoId is displayed
    }
  };

  const handleThankClick = () => {
    setShowMessage(true);
    setShowThankIcon(false);
  };

  const handleSendMessage = () => {
    setShowMessage(false);
    setThankMessage("");
  };

  return (
    <div className="people">
      {!showKakaoId && !showMessage && (
        <>
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
            <Keyword value={"진로"} />
            <Keyword value={"친구"} />
            <Keyword value={"기타"} />
          </div>

          <div className="peopleKakao_button">
            <button className="peopleKakao_button" onClick={handleKakaoClick}>
              <img src={peopleKakaoId} className="peopleKakao_image" />
              카톡 아이디 보기
            </button>
          </div>
        </>
      )}

      {showKakaoId && (
        <div onClick={handleKakaoClick}>
          <ShowKakaoId />
        </div>
      )}

      {!showKakaoId && showThankIcon && !showMessage && (
        <div className="thank_icon" onClick={handleThankClick}>
          <img src={thankIcon} className="thank_icon_image" />
        </div>
      )}

      {showMessage && (
        <PeopleMessage 
          thankMessage={thankMessage}
          setThankMessage={setThankMessage}
          handleSendMessage={handleSendMessage}
        />
      )}
    </div>
  );
}

export default PeopleKakao;