import React, { Component, useState } from "react";
import Layout from "../components/layout/Layout"
import "bootstrap/dist/css/bootstrap.min.css"
import Slider from "react-slick";
import itBtn from "../assets/svg/itbtn.svg";
import cloudBtn from "../assets/svg/cloudbtn.svg";
import growthBtn from "../assets/svg/growthbtn.svg";
import iotBtn from "../assets/svg/iotbtn.svg";
import getnowBtn from "../assets/svg/getnowbtn.svg";
import voippecypcSVG from "../assets/heroslider/voippecypc.svg";
import itpecypcSVG from "../assets/heroslider/itpecypc.svg";
import cloudpecypcSVG from "../assets/heroslider/cloudpecypc.svg";
import growthpecypcSVG from "../assets/heroslider/growthpecypc.svg";
import iotpecypcSVG from "../assets/heroslider/iotpecypc.svg";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  voipElementsbg, itElementsbg, cloudElementsbg, growthElementsbg, iotElementsbg, logotext, joinText, joinBtn, thumbSlider, thumbSliderRange, range, futuregoals_holder, businessclarity_holder, subtitle, product_service
}
from "../styles/home.module.css"
import Companies from "../components/common/companies";
import Updates from "../components/common/updates";

import { gsap } from "gsap";
import { ScrollToPlugin }  from "gsap/ScrollToPlugin.js";
import { ScrollTrigger }  from "gsap/ScrollTrigger.js";
import { Tween } from "gsap/gsap-core";
// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); 

const AsNavFor = () => {
  const [nav1,setNav1] = useState(null)
  const [nav2,setNav2] = useState(null)

  /* Main navigation */
  // let panelsSection = document.querySelector("#panels");
  // let panelsContainer = document.querySelector("#panels-container");
  let panelsContainer = document.querySelector("#panels-container");
  let tween;
  document.querySelectorAll(".anchor").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    let targetElem = document.querySelector(e.target.getAttribute("href")),
      y = targetElem;
    if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
      let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
        totalMovement = (panels.length - 1) * targetElem.offsetWidth;
      y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
    }
    gsap.to(window, {
      scrollTo: {
        y: y,
        autoKill: false
      },
      duration: 1
    });
  });
  });

  /* Panels */
  const panels = gsap.utils.toArray("#panels-container .panel");
  tween = gsap.to(panels, {
  xPercent: -100 * ( panels.length - 1 ),
  ease: "none",
  scrollTrigger: {
    trigger: "#panels-container",
    pin: true,
    start: "top top",
    scrub: 1,
    snap: {
      snapTo: 1 / (panels.length - 1),
      inertia: false,
      duration: {min: 1, max: 1}
    },
    end: () =>  "+=" + (panelsContainer?.offsetWidth - window.innerWidth)
  }
  });

   const Mainslider = {
      cssEase: 'linear',
      autoplay: true,
      speed: 2500,
      autoplaySpeed: 4000,
      infinite: true,
    }
    const Thumbslider = {
      slidesToShow: 5,
      focusOnSelect: true,
      infinite: false,
      speed: 2500,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return (
      <Layout>
        <section className="position-relative">
          <Slider {...Mainslider}
            asNavFor={nav2}
            ref={slider => setNav1(slider)}
          >
            <div className={`hero__slider-img position-relative overlay d-flex align-items-end voipElementsbg ${voipElementsbg}`}>
              <Container fluid>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={{ span: 7, offset: 5 }} xl={{ span: 6, offset: 6 }}>
                    <div className="banner__content ps-0 ps-xl-5">
                      <div className={`d-flex align-items-center ${logotext}`}>
                        <img src={voippecypcSVG} alt="VOIPElements" /> <p className="text-white ms-3 mb-0"><span>VOIP</span>Elements</p>
                      </div>
                      <h1 className="H1 text-white mb-5">Get your free Cloud PBX with us. Now and Forever.</h1>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={9} lg={{ span: 5, offset: 7 }} xl={{ span: 3, offset: 9 }}>
                    <p className={`${joinText}`}>
                      Join the digital revolution with a 3CX Cloud PBX securely hosted with VoipElements.
                    </p>
                    <Button className={`p-0 d-flex align-items-center ${joinBtn}`}>
                      <img src={getnowBtn} alt="VOIPBtn" /> <span className="ms-3">Get Now!</span>
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className={`hero__slider-img position-relative overlay d-flex align-items-end itElementsbg ${itElementsbg}`}>
              <Container fluid>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={{ span: 7, offset: 5 }} xl={{ span: 6, offset: 6 }}>
                      <div className="banner__content">
                        <div className={`d-flex align-items-center ${logotext}`}>
                          <img src={itpecypcSVG} alt="VOIPElements" /> <p className="text-white ms-3 mb-0"><span>IT</span>Elements</p>
                        </div>
                        <h1 className="H1 text-white mb-5">Your business connectivity covered</h1>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={{ span: 5, offset: 7 }} xl={{ span: 3, offset: 9 }}>
                      <p className={`${joinText}`}>
                      Don't wait before it's too late. IT Elements have you covered.
                      </p>
                      <Button className={`p-0 d-flex align-items-center ${joinBtn}`}>
                        <img src={itBtn} alt="ITBtn" /> <span className="ms-3">Start Now!</span>
                      </Button>
                    </Col>
                  </Row>
                </Container>
            </div>
            <div className={`hero__slider-img position-relative overlay d-flex align-items-end cloudElementsbg ${cloudElementsbg}`}>
              <Container fluid>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={{ span: 7, offset: 5 }} xl={{ span: 6, offset: 6 }}>
                      <div className="banner__content">
                        <div className={`d-flex align-items-center ${logotext}`}>
                          <img src={cloudpecypcSVG} alt="VOIPElements" /> <p className="text-white ms-3 mb-0"><span>Cloud</span>Elements</p>
                        </div>
                        <h1 className="H1 text-white mb-5">Your second network</h1>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={{ span: 5, offset: 7 }} xl={{ span: 3, offset: 9 }}>
                      <p className={`${joinText}`}>
                        It's never enough to be just one. Redundancy never fails.
                      </p>
                      <Button className={`p-0 d-flex align-items-center ${joinBtn}`}>
                        <img src={cloudBtn} alt="CloudBtn" /> <span className="ms-3">Start Now!</span>
                      </Button>
                    </Col>
                  </Row>
                </Container>
            </div>
            <div className={`hero__slider-img position-relative overlay d-flex align-items-end growthElementsbg ${growthElementsbg}`}>
              <Container fluid>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={{ span: 7, offset: 5 }} xl={{ span: 6, offset: 6 }}>
                      <div className="banner__content">
                        <div className={`d-flex align-items-center ${logotext}`}>
                          <img src={growthpecypcSVG} alt="VOIPElements" /> <p className="text-white ms-3 mb-0"><span>Growth</span>Elements</p>
                        </div>
                        <h1 className="H1 text-white mb-5">SAP Business One to the world</h1>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={{ span: 5, offset: 7 }} xl={{ span: 3, offset: 9 }}>
                      <p className={`${joinText}`}>
                        Automate your SAP Business One processes with GrowthElements
                      </p>
                      <Button className={`p-0 d-flex align-items-center ${joinBtn}`}>
                        <img src={growthBtn} alt="GrowthBtn" /> <span className="ms-3">Get Now!</span>
                      </Button>
                    </Col>
                  </Row>
                </Container>
            </div>
            <div className={`hero__slider-img position-relative overlay d-flex align-items-end iotElementsbg ${iotElementsbg}`}>
              <Container fluid>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={{ span: 7, offset: 5 }} xl={{ span: 6, offset: 6 }}>
                      <div className="banner__content">
                        <div className={`d-flex align-items-center ${logotext}`}>
                          <img src={iotpecypcSVG} alt="VOIPElements" /> <p className="text-white ms-3 mb-0"><span>IoT</span>Elements</p>
                        </div>
                        <h1 className="H1 text-white mb-5">Water Pressure Manager</h1>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={{ span: 5, offset: 7 }} xl={{ span: 3, offset: 9 }}>
                      <p className={`${joinText}`}>
                        Your water pressure regulaator and automation. Keep a healthy flow of water.
                      </p>
                      <Button className={`p-0 d-flex align-items-center ${joinBtn}`}>
                        <img src={iotBtn} alt="IoTBtn" /> <span className="ms-3">Get Now!</span>
                      </Button>
                    </Col>
                  </Row>
                </Container>
            </div>
          </Slider>
          <Slider {...Thumbslider}
            className={`navthumbs ${thumbSlider}`}
            asNavFor={nav2}
            ref={slider => setNav2(slider)}
          >
            <div className={`${thumbSliderRange}`}><h3 className="text-white">1. voipelements</h3><div className={`range ${range}`}></div></div>
            <div className={`${thumbSliderRange}`}><h3 className="text-white">2. itelements</h3><div className={`range ${range}`}></div></div>
            <div className={`${thumbSliderRange}`}><h3 className="text-white">3. cloudelements</h3><div className={`range ${range}`}></div></div>
            <div className={`${thumbSliderRange}`}><h3 className="text-white">4. growthelements</h3><div className={`range ${range}`}></div></div>
            <div className={`${thumbSliderRange}`}><h3 className="text-white">5. iotelements</h3><div className={`range ${range}`}></div></div>
          </Slider>
        </section>
        <section className={`${product_service}`}>
          <Container fluid>
            <Row>
              <Col xs={12} sm={12} md={10} lg={10} xl={8}>
                <h2 className="H2 text-black">
                  BinaryElements™ has multiple business units providing products and services built on the following initiatives.
                </h2>
              </Col>
            </Row>
          </Container>
          <section id="panels">
            <div id="panels-container">
              <article id="panel-1" className="panel full-screen red">
                <div className="container">
                  <div className="row">
                    <div className="col-6 d-flex flex-column">
                      <h2>Panel 1</h2>
                      <p className="step-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Including versions of Lorem Ipsum.
                      </p>
                      <div className="panels-navigation text-right">
                        <div className="nav-panel" data-sign="plus"><a href="#panel-2" className="anchor">Next</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article id="panel-2" className="panel full-screen orange">
                <div className="container">
                  <div className="row">
                    <div className="col-6 d-flex flex-column">
                      <h2>Panel 2</h2>
                      <p className="step-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Including versions of Lorem Ipsum.
                      </p>
                      <div className="panels-navigation">
                        <div className="nav-panel" data-sign="minus"><a href="#panel-1" className="anchor">Prev</a></div>
                        <div className="nav-panel" data-sign="plus"><a href="#panel-3" className="anchor">Next</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article id="panel-3" className="panel full-screen purple">
                <div className="container">
                  <div className="row">
                    <div className="col-6 d-flex flex-column">
                      <h2>Panel 3</h2>
                      <p className="step-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Including versions of Lorem Ipsum.
                      </p>
                      <div className="panels-navigation">
                        <div className="nav-panel" data-sign="minus"><a href="#panel-2" className="anchor">Prev</a></div>
                        <div className="nav-panel" data-sign="plus"><a href="#panel-4" className="anchor">Next</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article id="panel-4" className="panel full-screen green">
                <div className="container">
                  <div className="row">
                    <div className="col-6 d-flex flex-column">
                      <h2>Panel 4</h2>
                      <p className="step-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Including versions of Lorem Ipsum.
                      </p>
                      <div className="panels-navigation">
                        <div className="nav-panel" data-sign="minus"><a href="#panel-3" className="anchor">Prev</a></div>
                        <div className="nav-panel" data-sign="plus"><a href="#panel-5" className="anchor">Next</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article id="panel-5" className="panel full-screen gray">
                <div className="container">
                  <div className="row">
                    <div className="col-6 d-flex flex-column">
                      <h2>Panel 5</h2>
                      <p className="step-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Including versions of Lorem Ipsum.
                      </p>
                      <div className="panels-navigation text-right">
                        <div className="nav-panel" data-sign="minus"><a href="#panel-4" className="anchor">Prev</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </section>
        <section className={`${futuregoals_holder}`}>
          <Container fluid>
            <Row className="justify-content-center align-items-center">
              <Col xs={12} sm={12} md={12} lg={10} xl={10} className="text-center">
                  <h2 className="H2 text-center mb-5">
                    With strong experience in IT and business processes, we look forward to working with you, your business and your future goals.
                  </h2>
                  <Button className="start__btn mt-5 bg-orange" size="lg">start now</Button>
              </Col>
            </Row>
          </Container>
        </section>
        <Updates />
        <section className={`${businessclarity_holder}`}>
          <Container fluid>
            <Row className="justify-content-center align-items-center">
              <Col xs={12} sm={12} md={12} lg={10} xl={10} className="text-center">
                  <h2 className="H2 text-center mb-3">
                    Clearly it's about business
                  </h2>
                  <p className={`mb-5 ${subtitle}`}>Call us or chat to us.</p>
                  <Button className="start__btn mt-5 bg-orange" size="lg">start today</Button>
              </Col>
            </Row>
          </Container>
        </section>
        <Companies />
      </Layout>
    );
  }

  export default AsNavFor;
