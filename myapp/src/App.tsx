import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from './components/Header/Header';
import { SearchBar } from './components/SearchBar';
import { Footer } from './components/Footer/Footer';
import { DetailsRoute } from './components/DetailsRoute';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <SearchBar />
        <Routes>
          <Route path="/details/:id" element={<DetailsRoute />} />
          {/* <Route path="*" element={<Navigate to={"/"} />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;