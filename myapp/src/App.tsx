import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <SearchBar />
        <Routes>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
