import React from "react";
import { Navbar, NavbarText } from "reactstrap";

const Footer = () => {
  return (
    <div>
      <Navbar color="dark" dark container="fluid" fixed="bottom">
        <NavbarText className="mx-auto">
          <div className="d-flex align-items-center justify-content-center">
            &copy; Corey Cass
          </div>
        </NavbarText>
      </Navbar>
    </div>
  );
};

export default Footer;
