import React from "react";
import { Link } from 'react-router-dom';
import BottomNav from "../components/BottomNav";
import Logo from "../components/Logo";
import RequestPeople from "../components/People";
import CurrentStatus from "../components/CurrentStatus";

import "../styles/RequestMain.css";
import "../styles/Main.css";

function RequestMain( { name } ) {
  return(
    <div className="requestMain">
      <Logo />

      <CurrentStatus />

      <div>
        <RequestPeople />
        <RequestPeople />
        <RequestPeople />
        <RequestPeople />
      </div>

      <BottomNav />
    </div>
  );
}

export default RequestMain;