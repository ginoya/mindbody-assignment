import React, { useState } from 'react';
import './Calculator.css';

interface CalculatorProps {}

const Calculator: React.FC<CalculatorProps> = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<number>(0);

  const handleDigitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setInput(input + e.currentTarget.value);
  }

  const handleAddition = () => {
    setOutput(output + Number(input));
    setInput('');
  }

  const handleClear = () => {
    setInput('');
    setOutput(0);
  }

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="output">{output}</div>
      </div>
      <div className="buttons">
        <button value="7" onClick={handleDigitClick}>7</button>
        <button value="8" onClick={handleDigitClick}>8</button>
        <button value="9" onClick={handleDigitClick}>9</button>
        <button className="operator" value="+" onClick={handleAddition}>+</button>
        <button value="4" onClick={handleDigitClick}>4</button>
        <button value="5" onClick={handleDigitClick}>5</button>
        <button value="6" onClick={handleDigitClick}>6</button>
        <button className="clear" value="C" onClick={handleClear}>C</button>
        <button value="1" onClick={handleDigitClick}>1</button>
        <button value="2" onClick={handleDigitClick}>2</button>
        <button value="3" onClick={handleDigitClick}>3</button>
        <button className="zero" value="0" onClick={handleDigitClick}>0</button>
      </div>
    </div>
  );
}

export default Calculator;
