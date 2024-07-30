import React from "react";
import { Link } from 'react-router-dom';
import BottomNav from "../components/BottomNav";
import Logo from "../components/Logo";
import PeopleKakao from "../components/PeopleKakao";
import ShowKakaoId from "../components/ShowKakaoId";

import rice from '../images/rice.png';
import '../styles/AcceptMain.css';


function MatchingMain( { name } ) {
  return(
    <div className="acceptMain">
      <Logo />

      <div className="accept_count">
        <img src={rice} className="rice_image"/>
        매칭 현황
      </div>

      <div>
        <ShowKakaoId />
        <PeopleKakao />
        <PeopleKakao />
        <PeopleKakao />
        <PeopleKakao />
      </div>

      <BottomNav />
    </div>
  );
}

export default MatchingMain;