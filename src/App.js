import "./App.css";
import React from "react";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Footer from "./components/footer";
import Employees from "./components/employees";
import Events from "./components/events";
import PathForGrowth from "./components/pathForGrowth";
import Uniforms from "./components/uniforms";
import { BrowserRouter as Router, Route, Routes, Switch, HashRouter, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
    <NavBar/>
    <HashRouter>
      <Routes>
          <Route exact path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/meet-the-team' element={<Employees />} />
          <Route path='/events' element={<Events />} />
          <Route path='/path-for-growth' element={<PathForGrowth />} />
          <Route path='/uniforms' element={<Uniforms />} />
      </Routes>
    </HashRouter>
    <Footer/>
    </>
  );
}

export default App;
