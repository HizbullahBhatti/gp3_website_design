import React from 'react';
import Navbar from './components/navbar/Navbar';
import Brand from './components/brand/Brand';
import Possibility from './containers/possibility/Possibility';
import CTA from './components/cta/CTA';
import Blog from './containers/blog/Blog';
import Footer from './containers/footer/Footer';
import Header from './containers/header/Header';
import WhatGPT from './containers/whatGPT3/WhatGPT';
import './App.css';
// import { Article, Brand, CTA, Navbar, Feature } from './components/index';
// import { Blog, Footer, Header, Possibility, WhatGPT } from './containers';

function App() {
  return (
    
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand/>
      <WhatGPT/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
