import Shuffle2 from "./models/Shuffle2";
import "./styles/InteractiveIpod.css";

function InteractiveiPod() {
  //  function to calculate button positions
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

  return <Shuffle2 />;
}

export default InteractiveiPod;
