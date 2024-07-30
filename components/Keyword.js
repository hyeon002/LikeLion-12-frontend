import React from "react";
import { Link } from 'react-router-dom';

import "../styles/People.css";


function Keyword( { value } ) {
  return(
    <div className="keyword">
      <p># {value}</p>
    </div>
  );
}

export default Keyword;