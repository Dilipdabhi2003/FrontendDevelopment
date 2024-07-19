import React, { useState } from 'react';
import Heading from './components/Heading';
import './App.css';
import DisplayScreen from './components/DisplayScreen';
import ButtonsContainer from './components/Buttons';

function App() {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setDisplayValue(eval(displayValue).toString());
      } catch {
        setDisplayValue('Error');
      }
    } else if (value === 'AC') {
      setDisplayValue('');
    } else if (value === 'C') {
      setDisplayValue(displayValue.slice(0, -1));
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  return (
    <div className="app">
      <Heading />
      <div className='border'>
        <DisplayScreen displayValue={displayValue} />
        <ButtonsContainer onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
