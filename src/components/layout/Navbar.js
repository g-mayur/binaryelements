import React from "react";
import { Link } from "gatsby";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import LogoSVG from "../../assets/logo.svg";
import { navbar, menu__item } from "../../styles/home.module.css";
import { Button } from "react-bootstrap";

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined"

export default function MainNav() {
  if (!isBrowser) {
     return;
  }
  
  var prevScrollpos = window.pageYOffset;
  const navRef = React.useRef(null);
  const MenuRef = React.useRef(null);
  
  const urlValue = window.location.pathname

  window.onscroll = function () {
    // if(window.innerWidth > 767)
    scrollFunction();
  };

  function scrollFunction() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
    } else {
      document.getElementById("HeaderNavbar").style.transform = "translateY(-200px)";
      navRef.current.classList.remove("show");
      document.getElementById("shoWMenu").style.transform = "translateY(0)";
      MenuRef.current.classList.add("active");
    }
    if (window.pageYOffset === 0) {
      console.log("You are on ", window.pageYOffset);
      document.getElementById("HeaderNavbar").style.transform = "translateY(0)";
      navRef.current.classList.remove("show");
      document.getElementById("shoWMenu").style.transform = "translateY(-200px)";
      MenuRef.current.classList.remove("active");
    }
  }
  function handleClick(e) {
    e.preventDefault();
    document.getElementById("HeaderNavbar").style.transform = "translateY(0)";
    navRef.current.classList.add("show");
    document.getElementById("shoWMenu").style.transform = "translateY(-200px)";
    MenuRef.current.classList.remove("active");
  }

  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          fixed="top"
          className={`py-3 ${navbar}`}
          id="HeaderNavbar"
          style={{ transition: "all 0.5s ease" }}
          ref={navRef}
        >
          <Container fluid>
            <Navbar.Brand id="mainNav">
              <Link to="/" className="d-flex align-items-center">
                <img src={LogoSVG} alt="Binary Element Logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              className="p-0 border-0"
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
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
                {urlValue && urlValue === "/"?
                  <Nav
                    className="header__menu justify-content-center flex-grow-1 pe-3"
                    id="navbar"
                  >
                    <Link className={menu__item} to="/about-us">
                      About Us
                    </Link>
                    <Link className={menu__item} to="/contact-us">
                      Contact Us
                    </Link>
                    <Link className={menu__item} to="/our-business-units">
                      Our Business Units
                    </Link>
                    <Link className={menu__item} to="/updates">
                      News Updates
                    </Link>
                  </Nav>
                  :null
                }
                  
                {urlValue && urlValue.includes("/contact-us")?
                  <Nav
                    className="header__menu justify-content-center flex-grow-1 pe-3"
                    id="navbar"
                  >
                    <Link className={menu__item} to="/">
                      home
                    </Link>
                    <Link className={menu__item} to="/">
                      pika@be
                    </Link>
                    <Link className={menu__item} to="/">
                      voice 3cx
                    </Link>
                    <Link className={menu__item} to="/">
                      services
                    </Link>
                    <Link className={menu__item} to="/">
                      updates
                    </Link>
                    <Link className={menu__item} to="/contact-us">
                      contact
                    </Link>
                  </Nav>
                  :null
                  }

                {urlValue && urlValue.includes("/business-units/voip-elements")?
                  <Nav
                    className="header__menu justify-content-center flex-grow-1 pe-3"
                    id="navbar"
                  >
                    <Link className={menu__item} to="/">
                      3CX Cloud PBK
                    </Link>
                    <Link className={menu__item} to="/">
                      VOIP unlimited
                    </Link>
                    <Link className={menu__item} to="/">
                      Special numbers
                    </Link>
                    <Link className={menu__item} to="/">
                      Case Studies
                    </Link>
                  </Nav>
                  :null
                  }

                {urlValue && urlValue.includes("/business-units/it-elements")?
                  <Nav
                    className="header__menu justify-content-center flex-grow-1 pe-3"
                    id="navbar"
                  >
                    <Link className={menu__item} to="/">
                      Case Studies
                    </Link>
                  </Nav>
                  :null
                  }

                {urlValue && urlValue.includes("/business-units/cloud-elements")?
                  <Nav
                    className="header__menu justify-content-center flex-grow-1 pe-3"
                    id="navbar"
                  >
                    <Link className={menu__item} to="/">
                      Case Studies
                    </Link>
                    <Link className={menu__item} to="/">
                      Data Redundancy
                    </Link>
                    <Link className={menu__item} to="/">
                      Business Continuity
                    </Link>
                    <Link className={menu__item} to="/">
                      Case Studies
                    </Link>
                  </Nav>
                  :null
                  }

                {urlValue && urlValue.includes("/business-units/growth-elements")?
                  <Nav
                    className="header__menu justify-content-center flex-grow-1 pe-3"
                    id="navbar"
                  >
                    <Link className={menu__item} to="/">
                      E-commerce
                    </Link>
                    <Link className={menu__item} to="/">
                      Intercompany
                    </Link>
                    <Link className={menu__item} to="/">
                      Sales Automation
                    </Link>
                    <Link className={menu__item} to="/">
                      Vendor Automation
                    </Link>
                    <Link className={menu__item} to="/">
                      Driver Delivery
                    </Link>
                    <Link className={menu__item} to="/">
                      Custom Business App
                    </Link>
                  </Nav>
                  :null
                }

                {urlValue && urlValue.includes("/business-units/iot-elements")?
                  <Nav
                    className="header__menu justify-content-center flex-grow-1 pe-3"
                    id="navbar"
                  >
                    <Link className={menu__item} to="/">
                      Water Pressure
                    </Link>
                    <Link className={menu__item} to="/">
                      Electical Charging
                    </Link>
                    <Link className={menu__item} to="/">
                      Custom Design
                    </Link>
                  </Nav>
                  :null
                  }

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Button
        id="shoWMenu"
        style={{ transition: "all 0.5s ease", transform: "scale(0)"}}
        onClick={handleClick}
        ref={MenuRef}
      >
        <div className="icon d-flex align-items-center">
          <a id="hamburger-icon" href="#" title="Menu">
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </a>
        </div>
      </Button>
    </>
  );
}