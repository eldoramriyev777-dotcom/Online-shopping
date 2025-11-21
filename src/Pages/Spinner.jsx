// Spinner.jsx
import React, { useEffect, useState } from "react";

const Spinner = () => {
  const [rotation, setRotation] = useState(0);

  // rotationni har 10ms da oshiramiz
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 6) % 360); // 360 gradusdan keyin 0 ga qaytadi
    }, 10);

    return () => clearInterval(interval);
  }, []);

  const spinnerStyle = {
    width: "50px",
    height: "50px",
    border: "6px solid #f3f3f3",
    borderTop: "6px solid #3498db",
    borderRadius: "50%",
    transform: `rotate(${rotation}deg)`,
    margin: "auto",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };

  return <div style={spinnerStyle}></div>;
};

export default Spinner;
