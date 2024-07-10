import React from 'react';
import { Footer, Possibility, Features, Header } from './containers';
import { CTA, Navbar } from './components';

import './App.css';
import Case from './containers/case/Case';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    {/* <Brand /> */}
    <Case />
    <Features />
    <Possibility />
    <CTA />
    {/* <Blog /> */}
    <Footer />
  </div>
);

export default App;
