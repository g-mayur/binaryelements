import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
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
  voipElementsbg,
  itElementsbg,
  cloudElementsbg,
  growthElementsbg,
  iotElementsbg,
  logotext,
  joinText,
  joinBtn,
  thumbSlider,
  thumbSliderRange,
  range,
  futuregoals_holder,
  businessclarity_holder,
  subtitle,
  product_service,
} from "../styles/home.module.css";
import Companies from "../components/common/companies";
import Updates from "../components/common/updates";
import Products from "../components/common/products";
import ScrollBtn from "../components/common/ScrollButton";

const AsNavFor = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const Mainslider = {
    cssEase: "linear",
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    infinite: true,
  };
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
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Layout>
      <section className="position-relative">
        <Slider
          {...Mainslider}
          asNavFor={nav2}
          ref={(slider) => setNav1(slider)}
        >
          <div
            className={`hero__slider-img position-relative overlay d-flex align-items-end voipElementsbg ${voipElementsbg}`}
          >
            <Container fluid>
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={{ span: 7, offset: 5 }}
                  xl={{ span: 6, offset: 6 }}
                >
                  <div className="banner__content ps-0 ps-xl-5">
                    <div className={`d-flex align-items-center ${logotext}`}>
                      <img src={voippecypcSVG} alt="VOIPElements" />{" "}
                      <p className="text-white ms-3 mb-0">
                        <span>VOIP</span>Elements
                      </p>
                    </div>
                    <h1 className="H1 text-white mb-5">
                      Get your free Cloud PBX with us. Now and Forever.
                    </h1>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  md={9}
                  lg={{ span: 5, offset: 7 }}
                  xl={{ span: 3, offset: 9 }}
                >
                  <p className={`${joinText}`}>
                    Join the digital revolution with a 3CX Cloud PBX securely
                    hosted with VoipElements.
                  </p>
                  <Button
                    className={`p-0 d-flex align-items-center ${joinBtn}`}
                  >
                    <img src={getnowBtn} alt="VOIPBtn" />{" "}
                    <span className="ms-3">Get Now!</span>
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
          <div
            className={`hero__slider-img position-relative overlay d-flex align-items-end itElementsbg ${itElementsbg}`}
          >
            <Container fluid>
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={{ span: 7, offset: 5 }}
                  xl={{ span: 6, offset: 6 }}
                >
                  <div className="banner__content">
                    <div className={`d-flex align-items-center ${logotext}`}>
                      <img src={itpecypcSVG} alt="VOIPElements" />{" "}
                      <p className="text-white ms-3 mb-0">
                        <span>IT</span>Elements
                      </p>
                    </div>
                    <h1 className="H1 text-white mb-5">
                      Your business connectivity covered
                    </h1>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={{ span: 5, offset: 7 }}
                  xl={{ span: 3, offset: 9 }}
                >
                  <p className={`${joinText}`}>
                    Don't wait before it's too late. IT Elements have you
                    covered.
                  </p>
                  <Button
                    className={`p-0 d-flex align-items-center ${joinBtn}`}
                  >
                    <img src={itBtn} alt="ITBtn" />{" "}
                    <span className="ms-3">Start Now!</span>
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
          <div
            className={`hero__slider-img position-relative overlay d-flex align-items-end cloudElementsbg ${cloudElementsbg}`}
          >
            <Container fluid>
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={{ span: 7, offset: 5 }}
                  xl={{ span: 6, offset: 6 }}
                >
                  <div className="banner__content">
                    <div className={`d-flex align-items-center ${logotext}`}>
                      <img src={cloudpecypcSVG} alt="VOIPElements" />{" "}
                      <p className="text-white ms-3 mb-0">
                        <span>Cloud</span>Elements
                      </p>
                    </div>
                    <h1 className="H1 text-white mb-5">Your second network</h1>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={{ span: 5, offset: 7 }}
                  xl={{ span: 3, offset: 9 }}
                >
                  <p className={`${joinText}`}>
                    It's never enough to be just one. Redundancy never fails.
                  </p>
                  <Button
                    className={`p-0 d-flex align-items-center ${joinBtn}`}
                  >
                    <img src={cloudBtn} alt="CloudBtn" />{" "}
                    <span className="ms-3">Start Now!</span>
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
          <div
            className={`hero__slider-img position-relative overlay d-flex align-items-end growthElementsbg ${growthElementsbg}`}
          >
            <Container fluid>
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={{ span: 7, offset: 5 }}
                  xl={{ span: 6, offset: 6 }}
                >
                  <div className="banner__content">
                    <div className={`d-flex align-items-center ${logotext}`}>
                      <img src={growthpecypcSVG} alt="VOIPElements" />{" "}
                      <p className="text-white ms-3 mb-0">
                        <span>Growth</span>Elements
                      </p>
                    </div>
                    <h1 className="H1 text-white mb-5">
                      SAP Business One to the world
                    </h1>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={{ span: 5, offset: 7 }}
                  xl={{ span: 3, offset: 9 }}
                >
                  <p className={`${joinText}`}>
                    Automate your SAP Business One processes with GrowthElements
                  </p>
                  <Button
                    className={`p-0 d-flex align-items-center ${joinBtn}`}
                  >
                    <img src={growthBtn} alt="GrowthBtn" />{" "}
                    <span className="ms-3">Get Now!</span>
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
          <div
            className={`hero__slider-img position-relative overlay d-flex align-items-end iotElementsbg ${iotElementsbg}`}
          >
            <Container fluid>
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={{ span: 7, offset: 5 }}
                  xl={{ span: 6, offset: 6 }}
                >
                  <div className="banner__content">
                    <div className={`d-flex align-items-center ${logotext}`}>
                      <img src={iotpecypcSVG} alt="VOIPElements" />{" "}
                      <p className="text-white ms-3 mb-0">
                        <span>IoT</span>Elements
                      </p>
                    </div>
                    <h1 className="H1 text-white mb-5">
                      Water Pressure Manager
                    </h1>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={{ span: 5, offset: 7 }}
                  xl={{ span: 3, offset: 9 }}
                >
                  <p className={`${joinText}`}>
                    Your water pressure regulaator and automation. Keep a
                    healthy flow of water.
                  </p>
                  <Button
                    className={`p-0 d-flex align-items-center ${joinBtn}`}
                  >
                    <img src={iotBtn} alt="IoTBtn" />{" "}
                    <span className="ms-3">Get Now!</span>
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Slider>
        <Slider
          {...Thumbslider}
          className={`navthumbs ${thumbSlider}`}
          asNavFor={nav1}
          ref={(slider) => setNav2(slider)}
        >
          <div className={`${thumbSliderRange}`}>
            <h3 className="text-white">1. voipelements</h3>
            <div className={`range ${range}`}></div>
          </div>
          <div className={`${thumbSliderRange}`}>
            <h3 className="text-white">2. itelements</h3>
            <div className={`range ${range}`}></div>
          </div>
          <div className={`${thumbSliderRange}`}>
            <h3 className="text-white">3. cloudelements</h3>
            <div className={`range ${range}`}></div>
          </div>
          <div className={`${thumbSliderRange}`}>
            <h3 className="text-white">4. growthelements</h3>
            <div className={`range ${range}`}></div>
          </div>
          <div className={`${thumbSliderRange}`}>
            <h3 className="text-white">5. iotelements</h3>
            <div className={`range ${range}`}></div>
          </div>
        </Slider>
      </section>
      <section className={`${product_service}`} id="section_2">
        <Container fluid>
          <Row>
            <Col xs={12} sm={12} md={10} lg={10} xl={8}>
              <h2 className="H2 text-black">
                BinaryElements™ has multiple business units providing products
                and services built on the following initiatives.
              </h2>
            </Col>
            <Col className="d-flex flex-row-reverse">
              <ScrollBtn
                text="scroll to next"
                target="#section-1"
                color="red"
                showBtn={"right"}
                offset={-2000}
              />
            </Col>
          </Row>
        </Container>
        <Products />
      </section>
      <section className={`${futuregoals_holder}`} id="section_3">
        <Container fluid>
          <Row className="justify-content-center align-items-center">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={10}
              xl={10}
              className="text-center"
            >
              <h2 className="H2 text-center mb-5">
                With strong experience in IT and business processes, we look
                forward to working with you, your business and your future
                goals.
              </h2>
              <Button className="start__btn mt-5 bg-orange" size="lg">
                start now
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <Updates />
      <section className={`${businessclarity_holder}`}>
        <Container fluid>
          <Row className="justify-content-center align-items-center">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={10}
              xl={10}
              className="text-center"
            >
              <h2 className="H2 text-center mb-3">
                Clearly it's about business
              </h2>
              <p className={`mb-5 ${subtitle}`}>Call us or chat to us.</p>
              <Button className="start__btn mt-5 bg-orange" size="lg">
                start today
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <Companies />
    </Layout>
  );
};

export default AsNavFor;
