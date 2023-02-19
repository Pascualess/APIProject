import * as React from 'react';
import { Link } from "react-router-dom";
import "./header.css";


export function Header (){
  return (
    <div className="Header">
      <div className="Header-Left">
        <div className="Hamburger"><i className="fa-solid fa-bars"></i></div>
        <button className="Login">Login</button>
        <button className="Sign_Up">Sign Up</button>
      </div>
      <div className="Logo">
        <Link to="/"><img src="https://static.thenounproject.com/png/3670726-200.png" alt="" /></Link>
      </div>
      <div className="Header-NavBar">
          <a href="#search">Search Bar</a><br />
          <span> | </span>
          <a href="#recipeList">Recipe Results</a><br />
          <span> | </span>
          <a href="#footer">Site Map</a><br />
          <span> | </span>
          <Link to="/#favorites">Favorites</Link>
      </div>
    </div>
  );
};
