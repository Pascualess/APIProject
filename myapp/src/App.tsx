import React, {useState, createContext} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/Header/Header';
import { SearchBar } from './components/SearchBar';
import { Footer } from './components/Footer/Footer';
import { Favorites } from "../src/components/Favorites/Favorites";
import RecipeContextProvider from './context/RecipeContextProvider';
import { Details } from './components/Details/Details';


function App() { 
  return (
    <BrowserRouter>
      <div className="App">
        <RecipeContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<SearchBar />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
          <Footer />
        </RecipeContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;