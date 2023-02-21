import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar";
import { Footer } from "./components/Footer/Footer";
import { Favorites } from "../src/components/Favorites/Favorites";
import RecipeContextProvider from "./context/RecipeContextProvider";
import { Details } from "./components/Details/Details";

function App() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;
      const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
      setIsBottom(scrolledToBottom);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <RecipeContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<SearchBar />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
          <Details />
          <div className={`Footer ${isBottom ? "is-bottom" : ""}`}>
            <Footer />
          </div>
        </RecipeContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;