import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from './components/Header';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
