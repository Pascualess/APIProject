import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from './components/Header/Header';
import { SearchBar } from './components/SearchBar';
import { Footer } from './components/Footer/Footer';
import { Favorites } from "../src/components/Favorites/Favorites";
import RecipeContextProvider from './context/RecipeContextProvider';
import { Details } from './components/Details/Details';
import DetailsContextProvider from './context/DetailsContextProvider';

function App() { 
  return (
    <BrowserRouter>
      <div className="App">
        <RecipeContextProvider>
        <DetailsContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<SearchBar />} />
            <Route path="/#favorites" element={<Favorites />} />
            <Route path="/#details" element={<Details />} />
          </Routes>
          <Footer />
          </DetailsContextProvider>
        </RecipeContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;