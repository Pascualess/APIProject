import * as React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import "./header.css";

export function Header (){

  const [menuStyle, setMenuStyle] = useState<string>("Hamburger-Container hidden");

  const changeStyle = () => {
     return (menuStyle === "Hamburger-Container visible") ? setMenuStyle("Hamburger-Container hidden") : setMenuStyle("Hamburger-Container visible")
  }


  return (
    <div className="Header">
      <div className="Header-Left">
        <div className="Hamburger-Closed" onClick={changeStyle}><i className="fa-solid fa-bars"></i></div>

        <div className={menuStyle}>
            <div className="Icon" onClick={changeStyle}><i className="fa-solid fa-x"></i></div>

            <ul className="Links">
                <li><a href="https://www.epicurious.com/recipes-menus" target="_blank">RECIPES & MENUS</a></li>
                <li><a href="https://www.epicurious.com/expert-advice" target="_blank">EXPERT ADVICE</a></li>
                <li><a href="https://www.epicurious.com/ingredients" target="_blank">INGREDIENTS</a></li>
                <li><a href="https://www.epicurious.com/holidays-events" target="_blank">HOLIDAYS & EVENTS</a></li>
                <li><a href="https://www.youtube.com" target="_blank">VIDEOS</a></li>
            </ul>

            <p>Follow us:</p>
            <ul className="SocialMedia">
                <li><a href="https://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a></li><br />
                <li><a href="https://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a></li><br />
                <li><a href="https://www.twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a></li><br />
                <li><a href="https://www.pinterest.com" target="_blank"><i className="fa-brands fa-pinterest"></i></a></li><br />
            </ul>

            <div className="User">
                <button className="Login-Hamburger">Login</button>
                <button className="Sign_Up-Hamburger">Sign Up</button>
            </div>
        </div>


        <button className="Login">Login</button>
        <button className="Sign_Up">Sign Up</button>
      </div>
      <div className="Logo">
        <Link to="/"><img src="https://static.thenounproject.com/png/3670726-200.png" alt="" /></Link>
      </div>
      <div className="Header-Right">
        <div className="Header-NavBar">
          <Link to={'/'}>Home</Link>
          <span> | </span>
          <Link to="/favorites">Favorites</Link>
          <span> | </span>
          <a href="#footer">Site Map</a><br />
        </div>
      </div>
    </div>
  );
};
