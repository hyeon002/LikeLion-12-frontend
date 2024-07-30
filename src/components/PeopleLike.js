import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import Keyword from "./Keyword";
import like from '../images/Like.png';
import bad from '../images/bad.png';
import '../styles/PeopleLike.css';

function PeopleLike( { name } ) {
  const [ selectLike, setSelectLike ] = useState('');
  const [ likeText, setLikeText ] = useState('좋아요');
  const [ badText, setBadText ] = useState('매칭 실패');
  const [ showBadImage, setShowBadImage ] = useState(true);
  const [ showLikeImage, setShowLikeImage ] = useState(true);

  const onClickLikeButton = (e) => {
    setSelectLike('Like');
    setLikeText('매칭 완료!');
    setShowLikeImage(false);
  }

  const onClickBadButton = (e) => {
    setSelectLike('Bad');
    setBadText('매칭 실패');
    setShowBadImage(false);
  }

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

      <div className="people_button">
        <button 
          className={`Like_button ${selectLike === 'Like' ? 'activeLike' : ""}`}
          onClick={onClickLikeButton}
        >
          {showLikeImage && <img src={like} className="Like_image"/>}
          {likeText}
        </button>

        <button 
          className={`Like_button ${selectLike === 'Bad' ? 'activeBad' : ""}`}
          onClick={onClickBadButton}
        >
          {showBadImage && <img src={bad} className="Like_image"/>}
          {badText}
        </button>
      </div>
    </div>
  );
}

export default PeopleLike;