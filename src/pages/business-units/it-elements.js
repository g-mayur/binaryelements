import React from "react"
import Layout from "../../components/layout/Layout"
import { Button, Col, Container, Row } from "react-bootstrap"
import {
  itelements, itElementsbg, logotext, joinText, joinBtn, aboutus__Wrapper,moreBtn, aboutus__img, gettingstart_holder, venture_holder, whyelements, whyTitle, wrapper, mobile_order
}
from "../../styles/businessunit.module.css"
import itpecypcSVG from "../../assets/heroslider/itpecypc.svg";
import itBtn from "../../assets/svg/itbtn.svg";
import ITAboutUsIMG from "../../assets/voipelements/it-about-us.png";
import Companies from "../../components/common/companies";
import ItCasestudy from "../../components/common/itcaseStudy";
import ITServices from "../../components/common/itservices";
import LikeSVG from "../../assets/svg/like.svg";
import VerifySVG from "../../assets/svg/verify.svg";
import SupportSVG from "../../assets/svg/full-support.svg";
import UserprofileSVG from "../../assets/svg/profile-2user.svg";
import DrivernSVG from "../../assets/svg/driver.svg";
import { Link } from "gatsby";

const ITElements = () => {
  return (
    <Layout>
      <div className={`${itelements}`}>
        <section className="HeroBanner">
          <div className={`hero__slider-img position-relative overlay d-flex align-items-end voipElementsbg ${itElementsbg}`}>
                  <Container fluid>
                    <Row>
                      <Col xs={12} sm={12} md={12} lg={{ span: 7, offset: 5 }} xl={{ span: 6, offset: 6 }}>
                        <div className="banner__content ps-0 ps-xl-5">
                          <div className={`d-flex align-items-center ${logotext}`}>
                            <img src={itpecypcSVG} alt="ITElements" /> <p className="text-white ms-3 mb-0"><span>IT</span>Elements</p>
                          </div>
                          <h1 className="H1 text-white mb-5">Your business connectivity covered</h1>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} sm={12} md={9} lg={{ span: 5, offset: 7 }} xl={{ span: 3, offset: 9 }}>
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
        </section>
        <section className={`${aboutus__Wrapper}`}>
            <Container fluid>
              <Row className="align-items-center">
                <Col xs={12} sm={12} md={12} lg={6} xl={6} className={`${mobile_order}`}>
                  <h2><span>IT</span>Elements</h2>
                  <p>When you are in need of rolling out your new business or restaurant, or have a business idea ready but need an IT Partner, look no further. IT Elements covers the network connectivity internally and externally with VPNs and business grade lines. Your business supported 24x7 with real life IT professionals available on-site and ready. We cover your IT needs as you grow.</p>
                  <Button className={`${moreBtn}`}>more about ITElements</Button>
                </Col>
                <Col xs={12} sm={12} md={12} lg={{ span: 4 , offset: 2 }} xl={{ span: 5 , offset: 1 }}>
                  <div className={`${aboutus__img}`}>
                    <img src={ITAboutUsIMG} alt="About Us" />
                  </div>
                </Col>
              </Row>
            </Container>
        </section>
        <section className={`${gettingstart_holder}`}>
            <Container fluid>
              <Row className="justify-content-center align-items-center">
                <Col xs={12} sm={12} md={12} lg={10} xl={10} className="text-center">
                    <h2 className="text-center mb-3 mb-md-4">Getting started is easy</h2>
                </Col>
                <Col xs={12} sm={12} md={8} lg={6} xl={5} className="text-center">
                    <Button className="start__btn text-gray-dark mt-3 mt-md-4 mt-lg-5 bg-pink" size="lg">start now</Button>
                </Col>
              </Row>
            </Container>
        </section>
        <ITServices />
        <section className={`py-5 ${whyelements}`}>
          <Container fluid>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <h3 className={`mb-5 ${whyTitle}`}>Why <span>IT</span>Elements?</h3>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} xl={3} className="mb-4 mb-md-5">
                <div className={`d-flex flex-column align-items-start h-100 p-5 ${wrapper}`}>
                  <img src={LikeSVG} alt="LikeSVG" className="mb-4" />
                  <h5 className="mb-0">Great response and support</h5>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} xl={3} className="mb-4 mb-md-5">
                <div className={`d-flex flex-column align-items-start h-100 p-5 ${wrapper}`}>
                  <img src={VerifySVG} alt="VerifySVG" className="mb-4" />
                  <h5 className="mb-0">Professional and Competent engineers</h5>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} xl={3} className="mb-4 mb-md-5">
                <div className={`d-flex flex-column align-items-start h-100 p-5 ${wrapper}`}>
                  <img src={SupportSVG} alt="SupportSVG" className="mb-4" />
                  <h5 className="mb-0">Onsite availability and 24x7 support</h5>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} xl={3} className="mb-4 mb-md-5">
                <div className={`d-flex flex-column align-items-start h-100 p-5 ${wrapper}`}>
                  <img src={UserprofileSVG} alt="UserprofileSVG" className="mb-4" />
                  <h5 className="mb-0">Supporting hundreds of customers</h5>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} xl={3} className="mb-4 mb-md-5">
                <div className={`d-flex flex-column align-items-start h-100 p-5 ${wrapper}`}>
                  <img src={DrivernSVG} alt="DrivernSVG" className="mb-4" />
                  <h5 className="mb-0">Supporting hundreds of customers</h5>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Companies />
        <section className={`${venture_holder}`}>
            <Container fluid>
              <Row className="justify-content-center align-items-center">
                <Col xs={12} sm={12} md={12} lg={10} xl={10} className="text-center">
                    <h2 className="text-center mb-4">Spend more time running your business</h2>
                </Col>
                <Col xs={12} sm={12} md={8} lg={6} xl={5} className="text-center">
                    <p className="text-center mb-5"> Leave IT in good hands. Call us at 1300 834 077 or 
                    <Link to="/contact-us" className="text-white text-decoration-none"> Contact Us.</Link></p>
                    <Button className="start__btn text-gray-dark mt-3 mt-md-4 mt-lg-5 bg-pink" size="lg">call number</Button>
                </Col>
              </Row>
            </Container>
        </section>
        <ItCasestudy />
      </div>
    </Layout>
  )
}

export default ITElements;