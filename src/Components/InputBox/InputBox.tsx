import React, { useState } from "react";

const InputBox= () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);
  const [redoHistory, setRedoHistory] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRedoHistory([]);
    if (value.length > 10) {
      return;
    }
    setHistory((prev) => [...prev, inputValue]);
    setInputValue(value);
  };

  const handleUndo = () => {
    if (history.length === 0) {
      return;
    }
    const lastValue = history[history.length - 1];
    setHistory(history.slice(0, history.length - 1));
    setRedoHistory((prev) => [inputValue, ...prev]);
    setInputValue(lastValue);
  };

  const handleRedo = () => {
    if (redoHistory.length === 0) {
      return;
    }
    const [nextValue, ...rest] = redoHistory;
    setRedoHistory(rest);
    setHistory((prev) => [...prev, inputValue]);
    setInputValue(nextValue);
  };

  return (
    <div>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
    </div>
  );
};

export default InputBox;
