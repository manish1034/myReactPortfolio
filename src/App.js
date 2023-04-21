import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Home from "./components/Home";
import About from "./components/HomeComponents/About";
import Skills from "./components/HomeComponents/Skills";
import Projects from "./components/HomeComponents/Projects";
import Contact from "./components/HomeComponents/Contact";
import Navbar from "./components/HomeComponents/Navbar";
// import Error from "./Error";

const App = () => {
  return (
    <>
      <div className="font-nunito">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route element={<Error/>} /> */}
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/skills" element={<Skills/>} />
          <Route exact path="/projects" element={<Projects/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
