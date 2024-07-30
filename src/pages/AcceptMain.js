import React from "react";
import { Link } from 'react-router-dom';
import BottomNav from "../components/BottomNav";
import Logo from "../components/Logo";
import PeopleLike from "../components/PeopleLike";

import rice from '../images/rice.png';
import '../styles/AcceptMain.css';


function AcceptMain( { name } ) {
  return(
    <div className="acceptMain">
      <Logo />

      <div className="accept_count">
        <img src={rice} className="rice_image"/>
        내가 받은 밥약 신청
      </div>

      <div>
        <PeopleLike />
        <PeopleLike />
        <PeopleLike />
        <PeopleLike />
      </div>

      <BottomNav />
    </div>
  );
}

export default AcceptMain;