import {Navbar,Nav,Container,Image} from 'react-bootstrap';
import Logo from "../assets/Logo.png";
import classes from "./NavigationBar.module.css";
import {NavLink} from "react-router-dom";
import { NavActiveStyle, NavInActiveStyle } from './style';

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className={classes.nav_top}>
      <Container>
        <Navbar.Brand href="/">
          <Image fluid src={Logo}></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="d-flex justify-content-end w-100"
            id={classes.nav_links}
          >
            <NavLink
              to="/"
              style={({ isActive }) => {
                return isActive
                  ? NavActiveStyle
                  :NavInActiveStyle ;
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/live-requests"
              style={({ isActive }) => {
                return isActive
                  ? NavActiveStyle
                  :NavInActiveStyle ;
              }}
            >
              Live Requests
            </NavLink>
            <NavLink
              to="/donor/your-profile"
              style={({ isActive }) => {
                return isActive
                  ? NavActiveStyle
                  :NavInActiveStyle ;
              }}
            >
              Donor
            </NavLink>
            <NavLink
              to="/receptor/request"
              style={({ isActive }) => {
                return isActive
                  ? NavActiveStyle
                  :NavInActiveStyle ;
              }}
            >
              Acceptor
            </NavLink>
            <NavLink
              to="/contact-us"
              style={({ isActive }) => {
                return isActive
                  ? NavActiveStyle
                  :NavInActiveStyle ;
              }}
            >
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;