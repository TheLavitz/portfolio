import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="content">
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
