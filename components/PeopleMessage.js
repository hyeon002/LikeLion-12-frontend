import React, { useState } from "react";

import SendButton from "./SendButton";
import '../styles/PeopleLike.css';

function PeopleMessage({ thankMessage, setThankMessage, handleSendMessage }) {
  return (
    <div className="people_message">
      <div className="message_thank">
        <p>밥약 후 상대에게 감사 인사를 보내보세요!</p>
      </div>
      <div className="input_message">
        <input
          className="thankMessage"
          type="text"
          value={thankMessage}
          onChange={(e) => setThankMessage(e.target.value)}
        />
        <SendButton onClick={handleSendMessage} isActive={true}>
          보내기
        </SendButton>
      </div>
    </div>
  );
}

export default PeopleMessage;