import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="sm" container="fluid" fixed="top">
        <NavbarBrand href="/">Corey Cass</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/coreycass/">
                LinkedIn
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/TheLavitz">GitHub</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Portfolio</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
