import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Links from "./components/Links";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="layout">
        <About />
        <Projects />
        <Links />
      </div>
      <div className="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
