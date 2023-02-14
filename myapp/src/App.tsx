import React from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { RecipeItem } from './components/RecipeItem/RecipeItem';

function App() {
  return (
    <div className="App">
      <Header />
      <br></br>
      <RecipeItem />
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
