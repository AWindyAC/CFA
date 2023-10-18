import "./App.css";
import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Footer from "./components/footer";
import Employees from "./components/employees";
import Events from "./components/events";
import PathForGrowth from "./components/pathForGrowth";
import Uniforms from "./components/uniforms";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/meet-the-team' element={<Employees />} />
          <Route path='/events' element={<Events />} />
          <Route path='/path-for-growth' element={<PathForGrowth />} />
          <Route path='/uniforms' element={<Uniforms />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
