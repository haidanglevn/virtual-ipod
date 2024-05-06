import React, { useState } from "react";
import ipod from "./assets/shuffle_2.svg";
import "./styles/Ipod.css"; // Ensure you have a corresponding CSS file

function InteractiveiPod() {
  //   const handleImageClick = (event) => {
  //     const bounds = event.target.getBoundingClientRect();
  //     const x = event.clientX - bounds.left;
  //     const y = event.clientY - bounds.top;
  //     const circleRadius = 180;
  //     // Round the coordinates to the nearest whole number
  //     const topLeftX = x - circleRadius / 2;
  //     const topLeftY = y - circleRadius / 2;

  //     console.log(`Clicked coordinates: x=${topLeftX}, y=${topLeftY}`);
  //   };

  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setTimeout(() => setActiveButton(""), 300); // Resets after 300ms
  };

  return (
    <div className="iPodContainer">
      <img
        src={ipod}
        alt="iPod"
        className="iPodImage"
        // onClick={handleImageClick}
      />
      <button
        className={`volumeUp button ${
          activeButton === "volumeUp" ? "active" : ""
        }`}
        onClick={() => handleButtonClick("volumeUp")}
      ></button>
      <button
        className={`volumeDown button ${
          activeButton === "volumeDown" ? "active" : ""
        }`}
        onClick={() => handleButtonClick("volumeDown")}
      ></button>
      <button
        className={`backward button ${
          activeButton === "backward" ? "active" : ""
        }`}
        onClick={() => handleButtonClick("backward")}
      ></button>
      <button
        className={`forward button ${
          activeButton === "forward" ? "active" : ""
        }`}
        onClick={() => handleButtonClick("forward")}
      ></button>
      <button
        className={`play button ${activeButton === "play" ? "active" : ""}`}
        onClick={() => handleButtonClick("play")}
      ></button>
    </div>
  );
}

export default InteractiveiPod;
