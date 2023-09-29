import './App.css';
import React, {useEffect, useState} from 'react';
import Navbar from "./components/navbar";
import Hero from './components/hero';
import About from './components/about';
import Footer from './components/footer';
import Employees from './components/employees';
import Events from './components/events';
import PathForGrowth from './components/pathForGrowth';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  // Change page on clicks in Navbar
  let component;
  switch(window.location.pathname) {
    case '/':
      component = <Hero />;
      break;
    case "/about":
      component=  <About /> ;
      break;
    case "/meet-the-team":
      component = <Employees />
      break;
    case "/events":
      component = <Events />
      break;
    case "/path-for-growth":
      component = <PathForGrowth />
      break;
  };
  return (
    <>
    <Router>
      <Navbar/>
      {component}
      <Footer/>
    </Router>
    </>
  );
}

export default App;
