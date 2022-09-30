import React from "react";
import { Link } from "gatsby";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LogoSVG from '../../assets/logo.svg';
import { navbar, menu__item } from "../../styles/home.module.css";

export default function MainNav() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} fixed="top" className={`py-3 ${navbar}`}>
          <Container fluid>
            <Navbar.Brand>
              <Link to="/" className="d-flex align-items-center">
                <img src={LogoSVG} alt="Binary Element Logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle className="p-0 border-0" aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="mobile-menu"
              // responsive="sm"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Navbar.Brand>
                  <Link to="/" className="d-flex align-items-center">
                    <img src={LogoSVG} alt="Binary Element Logo" />
                  </Link>
                </Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="header__menu justify-content-center flex-grow-1 pe-3">
                  <Link className={menu__item} to="/about-us">About Us</Link>
                  <Link className={menu__item} to="/contact-us">Contact Us</Link>
                  <Link className={menu__item} to="/our-business-units">Our Business Units</Link>
                  <Link className={menu__item} to="/updates">News Updates</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}
