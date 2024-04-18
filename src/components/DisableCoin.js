import React, { useState } from 'react';
import './DisableCoin.css'; 
import asd from "./disable.png"

const DisableCoin = () => {
  const [shakeAnimation, setShakeAnimation] = useState(false);

  const handleSpin = () => {
    setShakeAnimation(true);
    setTimeout(() => {
      setShakeAnimation(false);
    }, 200); // Короткая задержка для анимации потрясывания
  };

  return (
    <div className={`disable-container ${shakeAnimation ? 'shake' : ''}`} onClick={handleSpin}>
      <div className="disable" >
        <img src={asd} alt="DisableCoin" />
      </div>
    </div>
  );
};

export default DisableCoin;
