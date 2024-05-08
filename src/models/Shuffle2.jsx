import React, { useRef, useState, useEffect } from "react";
import ipod from "../assets/shuffle_2.svg";
import "../styles/Shuffle2.css";
import useMusicPlayerStore from "../stores/useMusicPlayerStore";

const Shuffle2 = () => {
  const imageRef = useRef(null);
  const [buttonStyles, setButtonStyles] = useState({
    volumeUp: {},
    volumeDown: {},
    backward: {},
    forward: {},
    play: {},
  });

  const handlePlayPause = useMusicPlayerStore((state) => state.handlePlayPause);
  const handleNext = useMusicPlayerStore((state) => state.handleNext);
  const handlePrev = useMusicPlayerStore((state) => state.handlePrev);

  const calculateStyles = () => {
    const imageWidth = imageRef.current.naturalWidth;
    const imageHeight = imageRef.current.naturalHeight;
    const buttonSize = 65; // Default size in pixels for small buttons
    const playButtonSize = 200; // Size in pixels for the play button

    setButtonStyles({
      volumeUp: {
        top: `${(89 / imageHeight) * 100}%`,
        left: `${(408 / imageWidth) * 100}%`,
        width: `${(buttonSize / imageWidth) * 100}%`,
        height: `${(buttonSize / imageHeight) * 100}%`,
      },
      volumeDown: {
        top: `${(389 / imageHeight) * 100}%`,
        left: `${(408 / imageWidth) * 100}%`,
        width: `${(buttonSize / imageWidth) * 100}%`,
        height: `${(buttonSize / imageHeight) * 100}%`,
      },
      backward: {
        top: `${(240 / imageHeight) * 100}%`,
        left: `${(255 / imageWidth) * 100}%`,
        width: `${(buttonSize / imageWidth) * 100}%`,
        height: `${(buttonSize / imageHeight) * 100}%`,
      },
      forward: {
        top: `${(240 / imageHeight) * 100}%`,
        left: `${(558 / imageWidth) * 100}%`,
        width: `${(buttonSize / imageWidth) * 100}%`,
        height: `${(buttonSize / imageHeight) * 100}%`,
      },
      play: {
        top: `${(170 / imageHeight) * 100}%`,
        left: `${(340 / imageWidth) * 100}%`,
        width: `${(playButtonSize / imageWidth) * 100}%`,
        height: `${(playButtonSize / imageHeight) * 100}%`,
      },
    });
  };

  useEffect(() => {
    // Ensure that styles are recalculated whenever the image fully loads
    const img = imageRef.current;
    if (img.complete) {
      calculateStyles();
    } else {
      img.addEventListener("load", calculateStyles);
      return () => {
        img.removeEventListener("load", calculateStyles);
      };
    }
  }, []);
  return (
    <div className="iPodWrapper">
      <div className="iPodContainer">
        <img src={ipod} alt="iPod" className="iPodImage" ref={imageRef} />
        {Object.keys(buttonStyles).map((key) => (
          <button
            key={key}
            style={buttonStyles[key]}
            className={`${key} button`}
            onClick={() => {
              if (key === "play") handlePlayPause();
              else if (key === "forward") handleNext();
              else if (key === "backward") handlePrev();
              // else if (key === 'volumeUp') increaseVolume();
              // else if (key === 'volumeDown') decreaseVolume();
            }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Shuffle2;
