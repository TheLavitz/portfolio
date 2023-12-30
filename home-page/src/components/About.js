import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import "../Home.css";

const About = () => {
  return (
    <Card color="dark" inverse className="primary-card overflow-auto">
      <CardBody>
        <CardTitle tag="h5">I'm Corey Cass</CardTitle>
        <CardSubtitle className="mb-2" tag="h6">
          Nice to meet you. 👋
        </CardSubtitle>
        <CardText>
          <p>
            As a dedicated full-stack web developer with a foundation rooted in
            my early experiences managing my high school's webpage. I find
            profound satisfaction in the intricate art of code composition,
            reveling in the challenges of unraveling existing code structures.
          </p>
          <p>
            With a strong command of Ruby and a growing proficiency in HTML,
            CSS, JavaScript, React, Rails, Jest, Node, and PostgreSQL, I am
            committed to achieving mastery in the realm of web development.
          </p>
          <p>
            Having served a decade in the United States Navy as a Sonar
            Technician, I bring a wealth of technical expertise. This experience
            has instilled in me a disciplined approach and an unwavering
            commitment to excellence.
          </p>
          <p>
            My current aspiration is to channel this background into crafting
            seamless and innovative web solutions. I am eager to contribute my
            skills and precision to meaningful projects within the realm of web
            development.
          </p>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default About;
