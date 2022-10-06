import React from "react"
import Layout from "../../components/layout/Layout"
import { Button, Col, Container, Row } from "react-bootstrap"
import {
  voipElementsbg, logotext, joinText, joinBtn, aboutus__Wrapper,moreBtn, aboutus__img, gettingstart_holder, venture_holder, whyelements, whyTitle, wrapper
}
from "../../styles/businessunit.module.css"
import voippecypcSVG from "../../assets/heroslider/voippecypc.svg";
import getnowBtn from "../../assets/svg/getnowbtn.svg";
import AboutUsIMG from "../../assets/voipelements/about-us.png";
import Companies from "../../components/common/companies";
import VoipCasestudy from "../../components/common/caseStudy";
import ClipboardSVG from "../../assets/svg/clipboard-close.svg";


const VoipElements = () => {
  return (
    <Layout>
      <section className="HeroBanner">
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
      </section>
      <section className={`${aboutus__Wrapper}`}>
          <Container fluid>
            <Row className="align-items-center">
              <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                <h2><span>Voip</span>Elements</h2>
                <p>VoipElements business covers Business Communications with Talk via Cloud PBX, Messaging via Chat and SMS,  and Online Meetings with Video Conferencing. Targeting Enterprise business and small businesses as well as Call Centres, VoipElements aims to cover the unified communications service offerings as a total.</p>
                <Button className={`${moreBtn}`}>more about voip</Button>
              </Col>
              <Col xs={12} sm={12} md={12} lg={{ span: 4 , offset: 2 }} xl={{ span: 5 , offset: 1 }}>
                <div className={`${aboutus__img}`}>
                  <img src={AboutUsIMG} alt="About Us" />
                </div>
              </Col>
            </Row>
          </Container>
      </section>
      <section className={`${gettingstart_holder}`}>
          <Container fluid>
            <Row className="justify-content-center align-items-center">
              <Col xs={12} sm={12} md={12} lg={10} xl={10} className="text-center">
                  <h2 className="text-center mb-4">Getting started is easy</h2>
              </Col>
              <Col xs={12} sm={12} md={8} lg={6} xl={5} className="text-center">
                  <p className="text-center mb-5">It's not about VOIP anymore. It's about work communications in a seamless environment.</p>
                  <Button className="start__btn mt-5 bg-red" size="lg">start now</Button>
              </Col>
            </Row>
          </Container>
      </section>
      <section className={`py-5 ${whyelements}`}>
        <Container fluid>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <h3 className={`mb-5 ${whyTitle}`}>Why <span>Voip</span>Elements</h3>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} xl={3}>
              <div className={`d-flex flex-column align-items-start p-5 ${wrapper}`}>
                <img src={ClipboardSVG} alt="ClipboardSVG" className="mb-4" />
                <h5 className="mb-0">No hosting or license fees</h5>
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
                  <p className="text-center mb-5"> Call us at 1300 xxxxxx or Contact Us</p>
                  <Button className="start__btn mt-5 bg-red" size="lg">call now</Button>
              </Col>
            </Row>
          </Container>
      </section>
      <VoipCasestudy />
    </Layout>
  )
}

export default VoipElements;