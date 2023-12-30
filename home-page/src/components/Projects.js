import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap";

const Projects = () => {
  const [open, setOpen] = useState("0");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <Card color="dark" inverse className="primary-card overflow-auto">
      <CardBody>
        <CardTitle tag="h5">Projects</CardTitle>
        <Accordion flush open={open} toggle={toggle}>
          <AccordionItem>
            <AccordionHeader targetId="1">Treasure Hunt</AccordionHeader>
            <AccordionBody accordionId="1">
              <p>
                A project based on the first thing I wrote as a student at LEARN
                academy. I have taken what was originally written with just
                HTML, CSS, and JavaScript and rebuilt it for React.
              </p>
              <p>
                Live:{" "}
                <a href="https://corey-cass-treasurehunt.onrender.com/">
                  Treasure Hunt
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a href="https://github.com/TheLavitz/treasurehunt">
                  Treasure Hunt
                </a>
              </p>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">Text-Based Game</AccordionHeader>
            <AccordionBody accordionId="2">
              <p>
                This project was Ruby focused and processes user input through a
                series of prompts in a text adventure. This was also developed
                as a group of three in a mob programming format.
              </p>
              <p>
                GitHub:{" "}
                <a href="https://github.com/TheLavitz/text-based-game">
                  Text-Based Game
                </a>
              </p>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">Cat Tinder</AccordionHeader>
            <AccordionBody accordionId="3">
              <p>
                Starting as a pair programming project but transitioning to a
                three person mob programming format this application features a
                React frontend connected to a Rails backend and demonstrates an
                understanding of CRUD operations. RSpec testing is included on
                the backend as well as Testing Library testing on the React
                frontend.
              </p>
              <p>
                GitHub:{" "}
                <a href="https://github.com/TheLavitz/cat-tinder-frontend">
                  Frontend
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a href="https://github.com/TheLavitz/cat-tinder-backend">
                  Backend
                </a>
              </p>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </CardBody>
    </Card>
  );
};

export default Projects;
