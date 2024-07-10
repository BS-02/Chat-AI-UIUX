import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="chatai">
          <h>Chat-AI</h>
        </div>
        <div className="navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#case">About</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#possibility">Open AI</a></p>
        </div>
      </div>
      <div className="navbar-sign">
        <p><a href="#signin">Sign in</a></p>
        <button type="button"><a href="#signup">Sign up</a></button>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#case">About</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            {/* <p><a href="#blog">Library</a></p> */}
          </div>
          <div className="navbar-menu_container-links-sign">
            <p><a href="#signin">Sign in</a></p>
            <button type="button"><a href="#signup">Sign up</a></button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
