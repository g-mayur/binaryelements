import React from "react"
import Layout from "../../components/layout/Layout"
import { Button, Col, Container, Row } from "react-bootstrap"
import {
  cloudelements, cloudElementsbg, logotext, joinText, joinBtn, aboutus__Wrapper,moreBtn, aboutus__img, gettingstart_holder, venture_holder, whyelements, whyTitle, wrapper, mobile_order
}
from "../../styles/businessunit.module.css"
import cloudpecypcSVG from "../../assets/heroslider/cloudpecypc.svg";
import cloudBtn from "../../assets/svg/cloudbtn.svg";
import CloudAboutUsIMG from "../../assets/voipelements/cloud-about-us.png";
import Companies from "../../components/common/companies";
import CloudCasestudy from "../../components/common/cloudcaseStudy";
import CloudServices from "../../components/common/cloudservices";
import Driver2SVG from "../../assets/svg/driver-2.svg";
import CloudAddSVG from "../../assets/svg/cloud-add.svg";
import YcloudSVG from "../../assets/svg/ycloud-connection.svg";
import { Link } from "gatsby";

const CloudElements = () => {
  return (
    <Layout>
      <div className={`${cloudelements}`}>
        <section className="HeroBanner">
          <div className={`hero__slider-img position-relative overlay d-flex align-items-end voipElementsbg ${cloudElementsbg}`}>
                  <Container fluid>
                    <Row>
                      <Col xs={12} sm={12} md={12} lg={{ span: 7, offset: 5 }} xl={{ span: 6, offset: 6 }}>
                        <div className="banner__content ps-0 ps-xl-5">
                          <div className={`d-flex align-items-center ${logotext}`}>
                            <img src={cloudpecypcSVG} alt="CLOUDElements" /> <p className="text-white ms-3 mb-0"><span>Cloud</span>Elements</p>
                          </div>
                          <h1 className="H1 text-white mb-5">Your second network</h1>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} sm={12} md={9} lg={{ span: 5, offset: 7 }} xl={{ span: 3, offset: 9 }}>
                        <p className={`${joinText}`}>
                          It's never enough to be just one. Redundancy never fails.
                        </p>
                        <Button className={`p-0 d-flex align-items-center ${joinBtn}`}>
                          <img src={cloudBtn} alt="CLOUD Btn" /> <span className="ms-3">Start Now!</span>
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
                  <h2><span>Cloud</span>Elements</h2>
                  <p>CloudElements has been setup with a key initiative, which is to provide customers with ease of mind in terms of business continuity, disaster recovery and data redundancy.
                  As we horde data and run multiple server instances to run integrated processes. You are limited with bandwidth, data redundancy and  eco-system. At CloudElements, we are connected with all vendors such as Microsoft, AWS, Telstra and all other players allowing for seamless connectivity and fast data exchange.</p>
                  <Button className={`${moreBtn}`}>more about CloudElements</Button>
                </Col>
                <Col xs={12} sm={12} md={12} lg={{ span: 4 , offset: 2 }} xl={{ span: 5 , offset: 1 }}>
                  <div className={`text-center ${aboutus__img}`}>
                    <img src={CloudAboutUsIMG} alt="About Us" className="mx-auto" />
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
                    <Button className="start__btn text-white mt-3 mt-md-4 mt-lg-5 bg-orange" size="lg">start now</Button>
                </Col>
              </Row>
            </Container>
        </section>
        <CloudServices />
        <section className={`py-5 ${whyelements}`}>
          <Container fluid>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <h3 className={`mb-5 ${whyTitle}`}>Why <span>Cloud</span>Elements?</h3>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} xl={3} className="mb-4 mb-md-5">
                <div className={`d-flex flex-column align-items-start h-100 p-5 ${wrapper}`}>
                  <img src={Driver2SVG} alt="Driver2 SVG" className="mb-4" />
                  <h5 className="mb-0">Vast experience with data redundancy and backups.</h5>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} xl={3} className="mb-4 mb-md-5">
                <div className={`d-flex flex-column align-items-start h-100 p-5 ${wrapper}`}>
                  <img src={CloudAddSVG} alt="CloudAdd SVG" className="mb-4" />
                  <h5 className="mb-0">Proven design for hybrid infrastructure</h5>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} xl={3} className="mb-4 mb-md-5">
                <div className={`d-flex flex-column align-items-start h-100 p-5 ${wrapper}`}>
                  <img src={YcloudSVG} alt="Ycloud SVG" className="mb-4" />
                  <h5 className="mb-0">Private cloud allowing for data storage locally abiding with data compliant laws.</h5>
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
                    <h2 className="text-center mb-4">Ready to venture?</h2>
                </Col>
                <Col xs={12} sm={12} md={8} lg={6} xl={5} className="text-center">
                    <p className="text-center mb-5">Call us at 1300 834 077 or 
                    <Link to="/contact-us" className="text-white text-decoration-none"> Contact Us.</Link></p>
                    <Button className="start__btn text-white mt-3 mt-md-4 mt-lg-5 bg-orange" size="lg">call number</Button>
                </Col>
              </Row>
            </Container>
        </section>
        <CloudCasestudy />
      </div>
    </Layout>
  )
}

export default CloudElements;