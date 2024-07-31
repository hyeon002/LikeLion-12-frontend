import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../styles/Profile2.css';

import Icon from "../components/Icon";
import Button from "../components/Button";
import image01 from '../images/profile01.png';
import image02 from '../images/profile02.png';
import image03 from '../images/profile03.png';
import image04 from '../images/profile04.png';
import image05 from '../images/profile05.png';
import image06 from '../images/profile06.png';
import image07 from '../images/profile07.png';
import image08 from '../images/profile08.png';
import image09 from '../images/profile09.png';

const imagePaths = [
  image01,
  image02,
  image03,
  image04,
  image05,
  image06,
  image07,
  image08,
  image09
];

function Profile2({ setProfileData }) {
  const navigate = useNavigate();

  const [selectedIcon, setSelectedIcon] = useState(null);
  const [isIconSelected, setIsIconSelected] = useState(false);

  const handleIconClick = (index) => {
    console.log(`Icon ${index} clicked`);
    if (!isIconSelected) {
      setSelectedIcon(index);
    }
  };

  const handleSelectClick = () => {
    console.log("Select button clicked");
    if (selectedIcon !== null) {
      setIsIconSelected(!isIconSelected);
    }
  };

  // 이모지, name 
  const handleNextClick = () => {
    console.log("Next button clicked");
    if (isIconSelected) {
      setProfileData(prevData => ({
        ...prevData,
        profileIcon: selectedIcon,
      }));
      navigate("/profile3", { state: { selectedIcon: imagePaths[selectedIcon] } });
    }
  };

  const icons = imagePaths.map((path, index) => (
    <Icon
      key={index}
      isSelected={selectedIcon === index}
      onClick={() => handleIconClick(index)}
      imagePath={path}
    />
  ));


  return (
    <div className="Profile">
      <div className="Profile_title_wrapper">
        <p className="Profile_title">프로필을 설정해 주세요</p>
        <p className="Profile_title_1">원하는 캐릭터를 고를 수 있어요!</p>
      </div>
      <div className="icon-grid">{icons}</div>
      <div className="select-button-container">
        <Button 
          onClick={handleSelectClick} 
          isActive={selectedIcon !== null}
          isIconSelected={isIconSelected}
        >
          {isIconSelected ? "선택 취소" : "선택"}
        </Button>
      </div>


      <div className="next-button-container">
        <Button 
          // className="next_page"
          onClick={handleNextClick} 
          isActive={true}
          isNextButton={true}
        >
          다음 단계
        </Button>
      </div>
    </div>
  );
}

export default Profile2;