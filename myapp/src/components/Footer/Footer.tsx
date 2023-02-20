import * as React from 'react';
import "./footer.css";

export function Footer (){
  return (
    <div className="Footer" id="footer">
      <div className="Subscribe">
        <p><a href="#">Subscribe</a> for Weekly Recipe Ideas</p>
      </div>
      <div className="Footer-Main">
        <div className="Logo">
          <a href="#"><img src="https://static.thenounproject.com/png/3670726-200.png" alt="" /></a>
        </div>
        <div className="SiteMap">
          <a href="#about">About Us</a><br />
          <span> | </span>
          <a href="#contact">Contact</a><br />
          <span> | </span>
          <a href="#careers">Careers</a><br />
        </div>
        <div className="SocialMedia">
          <a href="https://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a><br />
          <span> | </span>
          <a href="https://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a><br />
          <span> | </span>
          <a href="https://www.twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a><br />
          <span> | </span>
          <a href="https://www.pinterest.com" target="_blank"><i className="fa-brands fa-pinterest"></i></a><br />
       </div>
      </div>
      <div className="Copyright">
        <i className="fa-regular fa-copyright"></i><a href="#">ReciMe.com</a>
      </div>
      
    </div>
  );
}
