import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />
      {/* Push content below fixed navbar */}
      <div style={{ paddingTop: "50px" }} id="home">
        <Hero />
      </div>
      <Services />
      <About />
      {/* <Portfolio /> */}
      <Contact />
    </div>
  );
}