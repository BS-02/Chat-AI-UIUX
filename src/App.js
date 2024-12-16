import React from 'react';
import { Footer, Possibility, Features, Header, Journal } from './containers';
import { CTA, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    {/* <Brand /> */}
    <About />
    <Features />
    <Possibility />
    <CTA />
    <Journal />
    <Footer />
  </div>
);

export default App;
