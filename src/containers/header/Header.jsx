import React from 'react';
import ai from '../../assets/ai.jpg';
import './header.css';

const Header = () => (
  <div className="header section__padding" id="home">
    <div className="header-content">
      <h1 className="gradient__text">Unlock the Future with OpenAI</h1>
      <p>Discover the limitless possibilities of AI. Join us in exploring innovative solutions and transforming the way we interact with technology. Experience the future, today.</p>

      <div className="header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      {/* <div className="header-content__people">
               <p>Over 1.5K people have joined us in the last 24 hours</p>
      </div> */}
    </div>

    <div className="header-image">
      <img src={ai} alt=""/>
    </div>
  </div>
);

export default Header;
