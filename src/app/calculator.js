"use client";
import React, { useState } from 'react';
import '../../public/calculator.css';
function Calculator() {
  const [expression, setExpression] = useState('');

  const handleInput = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const clearInput = () => {
    setExpression('');
  };

  const calculateResult = () => {
    try {
      const result = new Function('return ' + expression)();
      setExpression(result.toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  const handleButtonClick = (value) => {
    handleInput(value);
    // Add the button press animation class
    const button = document.getElementById(value);
    button.classList.add('button-press-animation');
    // Remove the button press animation class after a short delay
    setTimeout(() => {
      button.classList.remove('button-press-animation');
    }, 100);
  };

  return (
    <div className="calculator">
      <input type="text" className="calculator-screen" value={expression} readOnly />
      <div className="buttons">
        <button id="clear" className="clear-btn" onClick={clearInput}>Clear</button>
        <button id="(" onClick={() => handleButtonClick('(')}>(</button>
        <button onClick={clearInput}>Clear</button>
        <button onClick={() => handleInput('(')}>(</button>
        <button onClick={() => handleInput(')')}>)</button>
        <button onClick={() => handleInput('/')}>/</button>
        <button onClick={() => handleInput('7')}>7</button>
        <button onClick={() => handleInput('8')}>8</button>
        <button onClick={() => handleInput('9')}>9</button>
        <button onClick={() => handleInput('*')}>*</button>
        <button onClick={() => handleInput('4')}>4</button>
        <button onClick={() => handleInput('5')}>5</button>
        <button onClick={() => handleInput('6')}>6</button>
        <button onClick={() => handleInput('-')}>-</button>
        <button onClick={() => handleInput('1')}>1</button>
        <button onClick={() => handleInput('2')}>2</button>
        <button onClick={() => handleInput('3')}>3</button>
        <button onClick={() => handleInput('+')}>+</button>
        <button onClick={() => handleInput('0')}>0</button>
        <button onClick={calculateResult}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
