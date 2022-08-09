import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import NavBars from "./Components/NavBars";
import ServiceDetails from "./Components/ServiceDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Routering() {
  return (
    <BrowserRouter>
      <NavBars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/ServiceDetails:id" element={<ServiceDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routering;
