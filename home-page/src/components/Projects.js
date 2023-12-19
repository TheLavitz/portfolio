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
              <strong>This is the first item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It&#39;s also worth noting that just about any
              HTML can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">Color Box</AccordionHeader>
            <AccordionBody accordionId="2">
              <strong>This is the second item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It&#39;s also worth noting that just about any
              HTML can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">Text Based Game</AccordionHeader>
            <AccordionBody accordionId="3">
              <strong>This is the third item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It&#39;s also worth noting that just about any
              HTML can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </CardBody>
    </Card>
  );
};

export default Projects;
