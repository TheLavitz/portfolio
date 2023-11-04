import React from "react";
import Title from "./components/Title";
import About from "./components/About";
import Projects from "./components/Projects";
import Links from "./components/Links";
import Contact from "./components/Contact";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="table">
        <Title />
        <div className="spread">
          <About />
          <Projects />
          <Links />
        </div>
        <Contact />
      </div>
    </>
  );
};

export default Home;
