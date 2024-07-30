import React from "react";

import logo from "../images/logo.png";
import "../styles/Logo.css";

function Logo( { name } ) {
  return(
    <div>

      <div className="main_logo">
        <img className="logo" src={logo} />
      </div>

    </div>
  );
}

export default Logo;