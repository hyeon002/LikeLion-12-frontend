// Profile3.js
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../styles/Profile3.css';

import Icon from "../components/Icon";
import Button from "../components/Button";
import MultiButton from "../components/MultiButton";

const keywords = ["진로", "취업", "학업", "연애", "친구", "기타"];

function Profile3() {
  console.log("Profile3 component rendered");

  const location = useLocation();
  const navigate = useNavigate();
  const { selectedIcon, name } = location.state || {};
  const [introduction, setIntroduction] = useState("");
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [isNextEnabled, setIsNextEnabled] = useState(false);

  useEffect(() => {
    setIsNextEnabled(introduction.trim().length > 0);
  }, [introduction]);

  const handleKeywordClick = (keyword) => {
    console.log(`Keyword ${keyword} clicked`);
    setSelectedKeywords((prevSelected) =>
      prevSelected.includes(keyword)
        ? prevSelected.filter((kw) => kw !== keyword)
        : [...prevSelected, keyword]
    );
  };

  const handleNextClick = () => {
    console.log("Next button clicked");
    navigate("/filter", { state: { selectedIcon, name, introduction, selectedKeywords } });
  };

  return (
    <div className="Profile">
      <div className="Profile_title_wrapper">
        <p className="Profile_title">프로필을 설정해 주세요</p>
        <p className="Profile_title_1">자신을 표현할 수 있는 한 줄 소개를 작성하고</p>
        <p className="Profile_title_1">관심 키워드를 선택해 주세요!</p>
      </div>

      <div>
        <Icon imagePath={selectedIcon} />
        <p className="profile3-name">{name}</p>
      </div>

      <div className="profile3-input-container">
        <p className="profile3-input-title">한 줄 소개 입력하기</p>
        <input 
          className="profile3-input"
          type="text" 
          value={introduction} 
          onChange={(e) => setIntroduction(e.target.value)} 
        />
      </div>

      <div className="profile3-keyword-container">
        <p className="keyword-title">관심 키워드 선택</p>
        <div className="keyword-grid">
          {keywords.map((keyword) => (
            <MultiButton 
              key={keyword}
              onClick={() => handleKeywordClick(keyword)}
              isSelected={selectedKeywords.includes(keyword)}
            >
              {keyword}
            </MultiButton>
          ))}
        </div>
      </div>

      <div className="next-button-container">
        <Button 
          onClick={handleNextClick} 
          isActive={isNextEnabled}
          isNextButton={true}
        >
          다음 단계
        </Button>
      </div>
    </div>
  );
}

export default Profile3;
