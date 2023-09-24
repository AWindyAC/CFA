import './App.css';
import React from 'react';
import Navbar from "./components/navbar";
import Hero from './components/hero';
import About from './components/about';
import Footer from './components/footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Hero/>
      <About/>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
