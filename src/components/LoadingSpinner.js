import React from 'react';
import './LoadingSpinner.css'; // Создайте стили для вашего спиннера в отдельном файле LoadingSpinner.css

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
