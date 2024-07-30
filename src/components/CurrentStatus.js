import React, { useState } from "react";
import { Link } from 'react-router-dom';
import warning from '../images/warning.png';

import '../styles/CurrentStatus.css';

function CurrentStatus( { name } ) {
  const [ status, setStatus ] = useState('');

  return(
    <div className="status">

      <div className="status_title_container">
        <img className="status_title_image" src={warning} />
        <p className="status_title">현재 상태 표시</p>
      </div>

      <div className="status_select_container">

        <button 
          className={`status_select ${status === 'apply' ? 'active' : ''}`}
          onClick={() => setStatus('apply')}
        >
          <div className="status_circle red"></div>
          <p className="status_select_text">신청할래요</p>
        </button>

        <button 
          className={`status_select ${status === 'eat' ? 'active' : ''}`}
          onClick={() => setStatus('eat')}
        >
          <div className="status_circle blue"></div>
          <p className="status_select_text">먹을래요</p>
        </button>

        <button 
          className={`status_select ${status === 'both' ? 'active' : ''}`}
          onClick={() => setStatus('both')}
        >
          <div className="status_circle green"></div>
          <p className="status_select_text">둘 다 좋아요</p>
        </button>
      </div>

    </div>
  );
}

export default CurrentStatus;