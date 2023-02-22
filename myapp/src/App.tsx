import React, {useState, createContext} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/Header/Header';
import { SearchBar } from './components/SearchBar';
import { Footer } from './components/Footer/Footer';
import { Favorites } from "../src/components/Favorites/Favorites";
import RecipeContextProvider from './context/RecipeContextProvider';
import { Details } from './components/Details/Details';
import useLocalStorage from 'use-local-storage';


function App() { 

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('them', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <BrowserRouter>
      <div className="App" data-theme={theme}>
        <RecipeContextProvider>
          <Header />
          {<button className="themeSwitcher" onClick={switchTheme}>
            {theme === 'light' ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
          </button>}
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