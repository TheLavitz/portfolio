import React from "react";
import linkedIn from "./images/LI-In-Bug.png";
import gitHub from "./images/github-mark.png";

const Links = () => {
  return (
    <div className="card">
      <span>
        <a href="https://www.linkedin.com/in/coreycass/">My LinkedIn</a>
        <img
          src={linkedIn}
          alt="LinkedIn Bug"
          style={{ width: "25px", height: "auto" }}
        />
      </span>
      <span>
        <a href="https://github.com/TheLavitz">My GitHub</a>
        <img
          src={gitHub}
          alt="GitHub Mark"
          style={{ width: "25px", height: "auto" }}
        />
      </span>
    </div>
  );
};

export default Links;
