import React from "react"
import Layout from "../../components/layout/Layout"
import { Button, Col, Container, Row } from "react-bootstrap"
import {
  growthelements, growthElementsbg, logotext, joinText, joinBtn, aboutus__Wrapper,moreBtn, aboutus__img, gettingstart_holder, venture_holder, whyelements, whyTitle, wrapper, mobile_order
}
from "../../styles/businessunit.module.css"
import growthpecypcSVG from "../../assets/heroslider/growthpecypc.svg";
import growthBtn from "../../assets/svg/growthbtn.svg";
import GrowthAboutUsIMG from "../../assets/voipelements/growth-about-us.png";
import Companies from "../../components/common/companies";
import GrowthCasestudy from "../../components/common/growthcaseStudy";
import GrowthServices from "../../components/common/growthservices";
import Briefcase from "../../assets/svg/green-briefcase.svg";
import Shop from "../../assets/svg/green-shop.svg";
import Statusup from "../../assets/svg/green-status-up.svg";
import Folderconnection from "../../assets/svg/green-folder-connection.svg";
import Monitormobile from "../../assets/svg/green-monitor-mobbile.svg";
import Greendriver from "../../assets/svg/green-driver.svg";
import { Link } from "gatsby";

const GrowthElements = () => {
  return (
    <Layout>
      <div className={`${growthelements}`}>
        <section className="HeroBanner">
          <div className={`hero__slider-img position-relative overlay d-flex align-items-end voipElementsbg ${growthElementsbg}`}>
                  <Container fluid>
                    <Row>
                      <Col xs={12} sm={12} md={12} lg={{ span: 7, offset: 5 }} xl={{ span: 6, offset: 6 }}>
                        <div className="banner__content ps-0 ps-xl-5">
                          <div className={`d-flex align-items-center ${logotext}`}>
                            <img src={growthpecypcSVG} alt="Growth Elements" /> <p className="text-white ms-3 mb-0"><span>Growth</span>Elements</p>
                          </div>
                          <h1 className="H1 text-white mb-5">SAP Business One to the world</h1>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} sm={12} md={9} lg={{ span: 5, offset: 7 }} xl={{ span: 3, offset: 9 }}>
                        <p className={`${joinText}`}>
                          Automate your SAP Business One processes with GrowthElements
                        </p>
                        <Button className={`p-0 d-flex align-items-center ${joinBtn}`}>
                          <img src={growthBtn} alt="Growth Btn" /> <span className="ms-3">Get Now!</span>
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
                  <h2><span>Growth</span>Elements</h2>
                  <p>Do you have one or more SAP Business One instances in your business? Or are you considering purchasing a SAP Business One ERP software. GrowthElements provide key integration software to your e-commerce fronts such as Magento and Woocomerce as well as other 3rd party apps. Connect up your multiple SAP B1 to exchange Item, Sales and Purchase information between companies.</p>
                  <Button className={`${moreBtn}`}>more about GrowthElements</Button>
                </Col>
                <Col xs={12} sm={12} md={12} lg={{ span: 4 , offset: 2 }} xl={{ span: 5 , offset: 1 }}>
                  <div className={`text-center ${aboutus__img}`}>
                    <img src={GrowthAboutUsIMG} alt="About Us" className="mx-auto" />
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
                    <Button className="start__btn text-white mt-3 mt-md-4 mt-lg-5 bg-green" size="lg">start now</Button>
                </Col>
              </Row>
            </Container>
        </section>
        <GrowthServices />
        <section className={`py-5 ${whyelements}`}>
          <Container fluid>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <h3 className={`mb-5 ${whyTitle}`}>Why <span>Growth</span>Elements?</h3>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} xl={3} className="mb-4 mb-md-5">
                <div className={`d-flex flex-column align-items-start h-100 p-5 ${wrapper}`}>
                  <img src={Briefcase} alt="Briefcase" className="mb-4" />
                  <h5 className="mb-0">Products built for your business, ready and proven</h5>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} xl={3} className="mb-4 mb-md-5">
                <div className={`d-flex flex-column align-items-start h-100 p-5 ${wrapper}`}>
                  <img src={Shop} alt="Shop" className="mb-4" />
                  <h5 className="mb-0">One stop shop - design, build and host</h5>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} xl={3} className="mb-4 mb-md-5">
                <div className={`d-flex flex-column align-items-start h-100 p-5 ${wrapper}`}>
                  <img src={Statusup} alt="Statusup" className="mb-4" />
                  <h5 className="mb-0">Great communication and project management</h5>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} xl={3} className="mb-4 mb-md-5">
                <div className={`d-flex flex-column align-items-start h-100 p-5 ${wrapper}`}>
                  <img src={Folderconnection} alt="Folderconnection" className="mb-4" />
                  <h5 className="mb-0">Local resources</h5>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} xl={3} className="mb-4 mb-md-5">
                <div className={`d-flex flex-column align-items-start h-100 p-5 ${wrapper}`}>
                  <img src={Monitormobile} alt="Monitormobile" className="mb-4" />
                  <h5 className="mb-0">Multi-technology capable for front end (Angular, React)</h5>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} xl={3} className="mb-4 mb-md-5">
                <div className={`d-flex flex-column align-items-start h-100 p-5 ${wrapper}`}>
                  <img src={Greendriver} alt="Greendriver" className="mb-4" />
                  <h5 className="mb-0">Backend (Golang, .Net), SQL flavors(MSSQL, MYSQL) and Messaging platforms (MQTT, RabbitMQ)</h5>
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
                    <Button className="start__btn text-white mt-3 mt-md-4 mt-lg-5 bg-green" size="lg">call number</Button>
                </Col>
              </Row>
            </Container>
        </section>
        <GrowthCasestudy />
      </div>
    </Layout>
  )
}

export default GrowthElements;