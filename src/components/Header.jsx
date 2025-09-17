import React from 'react';
import "../styles/header.css";


const Header = () => {
  // const logoURL = "assets/img/logo.svg";
  return (
    <div className='header-container'>
      <div className='header'>
        <div>
          <img className='header-logo' src= "../assets/img/logo.svg" alt="logo image"/>
        </div>
        <ul className='nav'>
          <li>saving</li>
          <li>investing</li>
          <li>Ejara for Business</li>
        </ul>
        <div className='region'>
          <img src= "/assets/img/web.svg" alt="" />
          <p>Africa</p>
        </div>
        <div className="mobile-menu">
          <img src= "/assets/img/menu.svg'" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header;
