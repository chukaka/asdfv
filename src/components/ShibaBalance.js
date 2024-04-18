import React from 'react';
import './ShibaBalance.css'; 
import bala from './IMG_0157.png';
import favicon from './dogecoin.png'; // Путь к вашей маленькой картинке

const ShibaBalance = ({ text }) => {
  return (
    <div className="shiba-balance">
      <img src={bala} alt="Shiba Balance" />
      <div className="text">
        <span>{text}</span>
        <img src={favicon}  alt="Favicon" />
      </div>
    </div>
  );
};

export default ShibaBalance;
