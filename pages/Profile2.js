import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Profile2.css';

import Icon from "../components/Icon";
import Button from "../components/Button";


const imagePaths = [
  "/path/to/image1.png",
  "/path/to/image2.png",
  "/path/to/image3.png",
  "/path/to/image4.png",
  "/path/to/image5.png",
  "/path/to/image6.png",
  "/path/to/image7.png",
  "/path/to/image8.png",
  "/path/to/image9.png"
];

function Profile2() {
  console.log("Profile2 component rendered");

  const [selectedIcon, setSelectedIcon] = useState(null);
  const [isIconSelected, setIsIconSelected] = useState(false);
  const navigate = useNavigate();

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

  const handleNextClick = () => {
    console.log("Next button clicked");
    if (isIconSelected) {
      navigate("/profile3", { state: { selectedIcon: imagePaths[selectedIcon], name: "이건하" } });
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