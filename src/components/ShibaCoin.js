import React, { useState } from 'react';
import './ShibaCoin.css'; 
import asd from "./IMG_01522.png";

const ShibaCoin = ({ balance, promoCount, userId, setRefreshData}) => {
  const [rotation, setRotation] = useState(0);
  const [fireAnimation, setFireAnimation] = useState(false);

  const balanceNumber = parseFloat(balance);
  const promoCountNumber = parseFloat(promoCount);
  const coinRandom = (Math.random() * (1.1787511 - 1.0021195) + 1.0021195);
  const newBalance = (balanceNumber + coinRandom * promoCountNumber).toFixed(7);

  const handleSpin = () => {
    setRotation(prevRotation => prevRotation + 360);
    setFireAnimation(true);
    setTimeout(() => {
      setFireAnimation(false);

      fetch(`https://barbarisdenis028-951c34bc6fa1.herokuapp.com/api/burn-user-promo/?user_id=${userId}&balance=${newBalance}`)
        .then(response => response.json())
        .then(data => {
            window.location.reload();})
        .catch(error => console.error('Ошибка при отправке запроса:', error));
    }, 2000); 
  };

  return (
    <div className="coin-container" onClick={handleSpin}>
      <div className="coin" style={{ transform: `rotate(${rotation}deg)` }}>
        <img src={asd} alt="ShibaCoin" />
      </div>
      {fireAnimation && (
        Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className={`emoji emoji-${index}`}>&#128293;</div>
        ))
      )}
    </div>
  );
};

export default ShibaCoin;
