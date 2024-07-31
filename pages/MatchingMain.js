import React, { useState } from "react";
import { Link } from 'react-router-dom';
import BottomNav from "../components/BottomNav";
import Logo from "../components/Logo";
import PeopleKakao from "../components/PeopleKakao";
import ShowKakaoId from "../components/ShowKakaoId";

import rice from '../images/rice.png';
import '../styles/AcceptMain.css';


function MatchingMain( { name } ) {
  const [ showKakaoId, setShowKakaoId ] = useState(false);

  return(
    <div className="acceptMain">
      <Logo />

      <div className="accept_count">
        <img src={rice} className="rice_image"/>
        매칭 현황
      </div>

      <div>
        {showKakaoId ? ( <ShowKakaoId />) : (
          <>
            <PeopleKakao onShowKakaoId={() => setShowKakaoId(true)} />
          </>
        )}
      </div>
      <PeopleKakao />
      <PeopleKakao />
      <PeopleKakao />
      <PeopleKakao />

      <BottomNav />
    </div>
  );
}

export default MatchingMain;