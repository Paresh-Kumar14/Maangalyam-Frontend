import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';
import Frame from './Frame';
import Register from './Register';
import Features from './Features';
import Slider from './Slider';
import ImageSlider from './ImageSlider';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Frame/>
      <Features />
      <Slider/>
      <ImageSlider/>
      <Register/>
      <Footer />
    </div>
  );
}

export default App;
