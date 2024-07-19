import React from 'react';
import style from "./Buttons.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttons = [
    'AC', '/', '*', 'C',
    '7', '8', '9', '-',
    '4', '5', '6', '+',
    '1', '2', '3', '=',
    '.', '0', '%'
  ];

  return ( 
    <div className={style.buttonContainer}>
      {buttons.map((button, index) => (
        <button 
          key={index} 
          className={style.button}
          onClick={() => onButtonClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
