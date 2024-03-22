// components/Calculator.js
import React, { useState } from 'react';
import { useClient } from 'next/client';

function Calculator() {
  const [expression, setExpression] = useState('');
  useClient(); // Wrap the parent component with useClient to make it a Client Component

  const handleInput = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const clearInput = () => {
    setExpression('');
  };

  const calculateResult = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={expression} readOnly />
      <div className="buttons">
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
