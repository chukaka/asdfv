import React, { useState, useEffect } from 'react';
import './ShibaButton.css';
import asd from './buttons_PNG42.png';

const ShibaButton = ({ buttonText }) => {
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomNumber = Math.random() * (1.1039111 - 1.1000111) + 1.1000111;
            setAmount(parseFloat(buttonText) * randomNumber);
        }, 1000);

        return () => clearInterval(interval);
    }, [buttonText]); // Зависимость от buttonText, чтобы перезапускать интервал при его изменении

    return (
        <button className="shiba-button">
            <img src={asd} alt="Shiba Button" />
            <span>You have {buttonText} referrals 
            ≈ 
            {amount.toFixed(7)}$DOGE</span>
        </button>
    );
};

export default ShibaButton;
