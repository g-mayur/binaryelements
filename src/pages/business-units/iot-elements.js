import React from "react"
import Layout from "../../components/layout/Layout"
import { Button, Col, Container, Row } from "react-bootstrap"
import {
  iotelements, iotElementsbg, logotext, joinText, joinBtn, aboutus__Wrapper,moreBtn, aboutus__img, gettingstart_holder, venture_holder, whyelements, whyTitle, wrapper, mobile_order
}
from "../../styles/businessunit.module.css"
import iotpecypcSVG from "../../assets/heroslider/iotpecypc.svg";
import iotBtn from "../../assets/svg/iotbtn.svg";
import IotAboutUsIMG from "../../assets/voipelements/iot-about-us.png";
import Companies from "../../components/common/companies";
import IotCasestudy from "../../components/common/iotcaseStudy";
import IotServices from "../../components/common/iotservices";
import ExternalDrive from "../../assets/svg/external-drive.svg";
import CpuCharge from "../../assets/svg/cpu-charge.svg";
import BrifcaseTick from "../../assets/svg/brifecase-tick.svg";


const IotElements = () => {
  return (
    <Layout>
      <div className={`${iotelements}`}>
        <section className="HeroBanner">
          <div className={`hero__slider-img position-relative overlay d-flex align-items-end voipElementsbg ${iotElementsbg}`}>
                  <Container fluid>
                    <Row>
                      <Col xs={12} sm={12} md={12} lg={{ span: 7, offset: 5 }} xl={{ span: 6, offset: 6 }}>
                        <div className="banner__content ps-0 ps-xl-5">
                          <div className={`d-flex align-items-center ${logotext}`}>
                            <img src={iotpecypcSVG} alt="CLOUDElements" /> <p className="text-white ms-3 mb-0"><span>IoT</span>Elements</p>
                          </div>
                          <h1 className="H1 text-white mb-5">Water Pressure Manager</h1>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} sm={12} md={9} lg={{ span: 5, offset: 7 }} xl={{ span: 3, offset: 9 }}>
                        <p className={`${joinText}`}>
                          Your water pressure regulaator and automation. Keep a healthy flow of water.
                        </p>
                        <Button className={`p-0 d-flex align-items-center ${joinBtn}`}>
                          <img src={iotBtn} alt="CLOUD Btn" /> <span className="ms-3">Get Now!</span>
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
                  <h2 className="text-gray-900"><span>IOT</span>Elements</h2>
                  <p className="text-gray-900">IoTElements delivers hardware and software solutions for new age technology integration with industrial hardware and software.</p>
                  <Button className={`${moreBtn}`}>more about IoTElements</Button>
                </Col>
                <Col xs={12} sm={12} md={12} lg={{ span: 4 , offset: 2 }} xl={{ span: 5 , offset: 1 }}>
                  <div className={`text-center ${aboutus__img}`}>
                    <img src={IotAboutUsIMG} alt="About Us" className="mx-auto" />
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
                    <Button className="start__btn text-gray-dark mt-3 mt-md-4 mt-lg-5 bg-yellow" size="lg">start now</Button>
                </Col>
              </Row>
            </Container>
        </section>
        <IotServices />
        <section className={`py-5 ${whyelements}`}>
          <Container fluid>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <h3 className={`mb-5 ${whyTitle}`}>Why <span>IoT</span>Elements?</h3>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} xl={3} className="mb-4 mb-md-5">
                <div className={`d-flex flex-column align-items-start h-100 p-5 ${wrapper}`}>
                  <img src={ExternalDrive} alt="Driver2 SVG" className="mb-4" />
                  <h5 className="mb-0">Innovative design and product</h5>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} xl={3} className="mb-4 mb-md-5">
                <div className={`d-flex flex-column align-items-start h-100 p-5 ${wrapper}`}>
                  <img src={CpuCharge} alt="CloudAdd SVG" className="mb-4" />
                  <h5 className="mb-0">Proven knowledge of electrical and hardware components</h5>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} xl={3} className="mb-4 mb-md-5">
                <div className={`d-flex flex-column align-items-start h-100 p-5 ${wrapper}`}>
                  <img src={BrifcaseTick} alt="Ycloud SVG" className="mb-4" />
                  <h5 className="mb-0">Real business problem solving</h5>
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
                    <p className="text-center mb-5">Call us at 1300 xxxxxx or Contact Us.</p>
                    <Button className="start__btn text-gray-dark mt-3 mt-md-4 mt-lg-5 bg-yellow" size="lg">call now</Button>
                </Col>
              </Row>
            </Container>
        </section>
        <IotCasestudy />
      </div>
    </Layout>
  )
}

export default IotElements;