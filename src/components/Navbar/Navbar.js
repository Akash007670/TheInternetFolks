import React from "react";
import ReactLogo from "../assets/images/logo.svg";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  Navbarcontainer,
  Navlogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn1,
  NavBtn2,
  NavBtnLink1,
  NavBtnLink2,
  NavButtons,
} from "../Navbar/NavbarElement";

const Navbar = ({ mytoggleHandler }) => {
  return (
    <Nav>
      <Navbarcontainer>
        <Navlogo>
          <NavLinks to="/">
            <img src={ReactLogo} alt="react-logo" />
          </NavLinks>
        </Navlogo>
        <MobileIcon onClick={mytoggleHandler}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="Features">Features</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="Pricing">Pricing</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="Resources">Resources</NavLinks>
          </NavItem>
        </NavMenu>
        <NavButtons>
          <NavBtn1>
            <NavBtnLink1 to="Login">Login</NavBtnLink1>
          </NavBtn1>
          <NavBtn2>
            <NavBtnLink2 to="Signup">Sign Up</NavBtnLink2>
          </NavBtn2>
        </NavButtons>
      </Navbarcontainer>
    </Nav>
  );
};

export default Navbar;
