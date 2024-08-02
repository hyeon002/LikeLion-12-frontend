import React from "react";
import BottomNav from "../components/BottomNav";
import Logo from "../components/Logo";
import Message from "../components/Message";

import rice from '../images/rice.png';
import '../styles/AcceptMain.css';


function MessageMain() {
  return(
    <div className="acceptMain">
      <Logo />

      <div className="accept_count">
        <img src={rice} className="rice_image"/>
        받은 감사 인사
      </div>

      <div className="messageMain_container">
        <Message 
        />
        <Message />
        <Message />
        <Message />
      </div>

      <BottomNav />
    </div>
  );
}

export default MessageMain;