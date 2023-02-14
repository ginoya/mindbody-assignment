import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Calculator from './Components/Calculator/Calculator';
import Grid from './Components/Grid/Grid';
import InputBox from './Components/InputBox/InputBox';

function App() {
  return (

    <BrowserRouter>
    <Link to="/" className="nav-button">Calculator</Link>
    <Link to="/grid" className="nav-button">Grid</Link>
    <Link to="/input-box" className="nav-button">Input Box</Link>
    <Routes>
      <Route path="/" element={<Calculator/> } />
      <Route path="/grid" element={<Grid/>} />
      <Route path="/input-box" element={<InputBox/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
