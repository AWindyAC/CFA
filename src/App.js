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
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <NavBar/>
    <Routes>
          <Route exact path='/' element={<Hero />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/meet-the-team' element={<Employees />} />
          <Route exact path='/events' element={<Events />} />
          <Route exact path='/path-for-growth' element={<PathForGrowth />} />
          <Route exact path='/uniforms' element={<Uniforms />} />
    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
