import React, { useState, useEffect } from "react";
import "./App.css";
import ShibaCoin from "./components/ShibaCoin";
import ShibaBalance from "./components/ShibaBalance";
import ShibaButton from "./components/ShibaButton";
import DisableCoin from "./components/DisableCoin";
import LoadingSpinner from "./components/LoadingSpinner"; 
import dvd from "./IMG_0188.PNG"

function App() {
  const [balance, setBalance] = useState(0);
  const [promoCount, setPromoCount] = useState(0);
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [showInstructions, setShowInstructions] = useState(false);
  const userId = window.Telegram.WebApp.initDataUnsafe.user.id; // Определение userId

  useEffect(() => {
    window.Telegram.WebApp.expand();
    const storedValue = localStorage.getItem("promoValue"); // Проверяем, есть ли значение в локальном хранилище
    if (!storedValue) {
      setShowInstructions(true); // Если значения нет, показываем инструкции
    } else {
      setShowInstructions(false);
      window.Telegram.WebApp.expand();
      const apiUrl = `https://barbarisdenis028-951c34bc6fa1.herokuapp.com/api/user-promo-list/?user_id=${userId}`;
      console.log(userId);

      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
   
          if (data && data.user_info.balance) {
            setBalance(data.user_info.balance);
          } else {
            setBalance(0);
          }
          if (data && data.promo_list.length) {
            setPromoCount(data.promo_list.length);
          } else {
            setPromoCount(0);
          }
          setLoading(false); // Устанавливаем состояние загрузки в false после успешного выполнения запроса
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
          setLoading(false); // Устанавливаем состояние загрузки в false в случае ошибки запроса
        });
    }
  }, [userId]);

  const handleButtonClick = () => {
    localStorage.setItem('promoValue', 'someValue'); 
    setShowInstructions(false); 
    
  };

  return (
    <div className="app">
      {showInstructions ? (
        <a className="instruction-screen" href="https://t.me/dogecoin_drop" onClick={handleButtonClick}>
        {/* Компонент для инструкций */}
        <img src={dvd} alt="Instructions" />
      </a>
      
      ) : (
        <div className="center-container">
          <div className="component-container1">
            <ShibaBalance text={parseFloat(balance).toFixed(7)} />
          </div>
          <div className="component-container2">
            {promoCount ? <ShibaCoin balance={balance} promoCount={promoCount} userId={userId} /> : <DisableCoin />}
          </div>
          <div className="component-container3">
            <ShibaButton buttonText={promoCount}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
