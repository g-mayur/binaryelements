import React, { useState } from "react";
import { Link } from "gatsby";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import LogoSVG from "../../assets/logo.svg";
import { navbar, menu__item } from "../../styles/home.module.css";
import { Button } from "react-bootstrap";
import VOIPSVG from "../../assets/header/voipsvg.svg";
import CLOUDSVG from "../../assets/header/cloudsvg.svg";
import GROWTHSVG from "../../assets/header/growthsvg.svg";
import ITSVG from "../../assets/header/itsvg.svg";
import IOTSVG from "../../assets/header/iotsvg.svg";

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined"

export default function MainNav() {
  if (!isBrowser) {
     return;
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
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
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          fixed="top"
          className={`py-3 ${navbar}`}
          id="HeaderNavbar"
          style={{ transition: "all 0.5s ease" }}
          ref={navRef}
          collapseOnSelect="true"
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
              placement="start"
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
                    className="header__menu justify-content-center align-items-center flex-grow-1 pe-3 voipelements"
                    id="navbar"
                  >
                    <div className="navbar-nav b__units">
                      <Link className={menu__item} to="/about-us">
                        About Us
                      </Link>
                      <Link className={menu__item} to="/contact-us">
                        Contact Us
                      </Link>
                      <Link className={menu__item} to="/updates">
                        News Updates
                      </Link>
                    </div>
                    <Button className="action__btn" onClick={handleShow}>Our Business Units</Button>
                  </Nav>
                  :null
                }               
                {urlValue && urlValue.includes("/contact-us") ?
                  <Nav
                    className="header__menu justify-content-center flex-grow-1 pe-3"
                    id="navbar"
                  >
                    <Link className={menu__item} to="/">
                      About Us
                    </Link>
                    <Link className={menu__item} to="/">
                      New Updates
                    </Link>
                    {/* <Link className={menu__item} to="/">
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
                    </Link> */}
                  </Nav>
                  :null
                  }
                {urlValue && urlValue.includes("/business-units/voip-elements")?
                  <Nav
                    className="header__menu justify-content-center align-items-center flex-grow-1 pe-3 voipelements"
                    id="navbar"
                  >
                    <div className="navbar-nav b__units">
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
                    </div>
                    <Button className="action__btn" onClick={handleShow}>Our Business Units</Button>
                  </Nav>
                  :null
                  }
                {urlValue && urlValue.includes("/business-units/it-elements")?
                  <Nav
                    className="header__menu justify-content-center align-items-center flex-grow-1 pe-3 itelements"
                    id="navbar"
                  >
                    <div className="navbar-nav b__units">
                      <Link className={menu__item} to="/">
                        Case Studies
                      </Link>
                    </div>
                    <Button className="action__btn" onClick={handleShow}>Our Business Units</Button>
                  </Nav>
                  :null
                  }
                {urlValue && urlValue.includes("/business-units/cloud-elements")?
                  <Nav
                    className="header__menu justify-content-center align-items-center flex-grow-1 pe-3 cloudelements"
                    id="navbar"
                  >
                    <div className="navbar-nav b__units">
                      <Link className={menu__item} to="/">
                        Case Studies
                      </Link>
                      <Link className={menu__item} to="/">
                        Data Redundancy
                      </Link>
                      <Link className={menu__item} to="/">
                        Business Continuity
                      </Link>
                    </div>
                    <Button className="action__btn" onClick={handleShow}>Our Business Units</Button>
                  </Nav>
                  :null
                  }
                {urlValue && urlValue.includes("/business-units/growth-elements")?
                  <Nav
                    className="header__menu justify-content-center align-items-center flex-grow-1 pe-3 growthelements"
                    id="navbar"
                  >
                    <div className="navbar-nav b__units">
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
                        Custom Business Apps
                      </Link>
                    </div>
                    <Button className="action__btn" onClick={handleShow}>Our Business Units</Button>
                  </Nav>
                  :null
                }
                {urlValue && urlValue.includes("/business-units/iot-elements")?
                  <Nav
                    className="header__menu justify-content-center align-items-center flex-grow-1 pe-3 iotelements"
                    id="navbar"
                  >
                    <div className="navbar-nav b__units">
                      <Link className={menu__item} to="/">
                        Water Pressure
                      </Link>
                      <Link className={menu__item} to="/">
                        Electrical Charging
                      </Link>
                      <Link className={menu__item} to="/">
                        Custom Design
                      </Link>
                    </div>
                    <Button className="action__btn" onClick={handleShow}>Our Business Units</Button>
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
        <Offcanvas className="businessunit__drawer" show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header className="p-4 justify-content-between align-items-center justify-content-md-end" closeButton>
            <Offcanvas.Title className="d-block d-md-none order-2">Our Business Units</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <section className="businessUnits_list d-flex flex-column">
                <Link to="/business-units/voip-elements" className="mb-5">
                  <div className="business__logo mb-3"><img src={VOIPSVG} alt="VOIP elements"/></div>
                  <h3 className="title">Join the digital revolution with a 3CX Cloud PBX securely hosted with <span>VoipElements.</span></h3>
                </Link>
                <Link to="/business-units/cloud-elements" className="mb-5">
                  <div className="business__logo mb-3"><img src={CLOUDSVG} alt="CLOUD elements"/></div>
                  <h3 className="title">It's never enough to be just one. Redundancy never fails.</h3>
                </Link>
                <Link to="/business-units/growth-elements" className="mb-5">
                  <div className="business__logo mb-3"><img src={GROWTHSVG} alt="GROWTH elements"/></div>
                  <h3 className="title">Automate your SAP Business One processes with <span>GrowthElements.</span></h3>
                </Link>
                <Link to="/business-units/it-elements" className="mb-5">
                  <div className="business__logo mb-3"><img src={ITSVG} alt="IT elements"/></div>
                  <h3 className="title">Don't wait before it's too late. <span>IT Elements</span> have you covered.</h3>
                </Link>
                <Link to="/business-units/iot-elements" className="mb-5">
                  <div className="business__logo mb-3"><img src={IOTSVG} alt="IOT elements"/></div>
                  <h3 className="title"><span>IoTElements</span> delivers hardware and software solutions for new age technology integration with industrial hardware and software.</h3>
                </Link>
            </section>
          </Offcanvas.Body>
        </Offcanvas>
    </>
  );
}