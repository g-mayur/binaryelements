import React from "react"
import Layout from "../components/layout/Layout"
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap"
import {contactpage_holder, description__text, contact_details, label, businessunits_holder, contact_holder, contactform_holder, form_title, contact_form_wrapper, business_title, b_unit_wrapper, units, units_logo, units_desc} from "../styles/contact.module.css"
import SMSTrack from "../assets/contact/sms-tracking.svg"
import PhoneCall from "../assets/contact/phone-call.svg"
import LocationPin from "../assets/contact/location-pin.svg"
// import { Link } from "gatsby"
import voippecypcSVG from "../assets/heroslider/voippecypc.svg";
import itpecypcSVG from "../assets/heroslider/itpecypc.svg";
import cloudpecypcSVG from "../assets/heroslider/cloudpecypc.svg";
import growthpecypcSVG from "../assets/heroslider/growthpecypc.svg";
import iotpecypcSVG from "../assets/heroslider/iotpecypc.svg";
import data from "../jsonData/contact-us.json"
import {VOIPElements,ITElements,CloudElements,GrowthElements,IoTElements} from "../jsonData/contact-us.js";
import ShowImage from "../components/common/showImage"

export default function ContactUs() {
  console.log("ContactUs data==>",data.map((i,k)=>i.title))
  return (
    <Layout>
      <section className={`overlay position-relative ${contactpage_holder}`}>
          <Container fluid>
            <Row className="align-items-center">
              <Col xs={12} sm={12} md={6} lg={5} xl={3}>
                  <h2 className="H2 mb-4">contact us</h2>
                  <p className={`${description__text}`}>Send us your enquiry on our products and services and we&apos;ll be happy to get back to you the next working day.</p>
              </Col>
              <Col xs={12} sm={12} md={6} lg={{ span: 5, offset: 2 }} xl={{ span: 4, offset: 5 }}>
                <Stack gap={4} className={`${contact_details}`}>
                  <div className="d-flex align-items-center">
                    <img src={SMSTrack} alt="SMS Tracking" className="me-3" />
                    <a href="mailto:talk_to@binaryelements.com.au"><span className={`me-1 ${label}`}>email:</span>talk_to@binaryelements.com.au</a>
                  </div>
                  <div className="d-flex align-items-center">
                    <img src={PhoneCall} alt="Phone Call" className="me-3" />
                    <div className="d-flex align-items-center">
                      <span className={`me-1 ${label}`}>phone:</span>
                      <a href="tel: 03 9020 7900">03 9020 7900</a>
                      <span className={`px-2 separator ${label}`}>|</span>
                      <a href="tel:1300 834 077">1300 834 077</a>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <img src={LocationPin} alt="Location Pin" className="me-3" />
                    <p className="mb-0"><span className={`me-1 ${label}`}>address:</span>826 Lorimer St, Port Melbourne VIC 3207</p>
                  </div>
                </Stack>
              </Col>
            </Row>
          </Container>
      </section>
      
      <section className={`position-relative ${contact_holder}`}>
        <div className={`position-relative ${businessunits_holder}`}>
        
          <Container fluid>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <h3 className={`${business_title}`}>
                  which business units are you interested in?
                </h3>
              </Col>

              <>
                  {data.map((item, key ) => (
                  <Col xs={12} sm={6} md={4} lg={3} xl={3}>
                   {/* ==> <img src={item.src} alt="VOIP Elements" /> */}
                   <ShowImage key={key} image='growthpecypc' alt="VOIP Elements"/>
                  </Col>
                ))}
              </>
              
                {['radio'].map((type) => (
                  <>
                  <Col xs={12} sm={6} md={4} lg={3} xl={3}>
                    <div key={type} className={`mb-5 ${b_unit_wrapper}`}>
                      <Form.Check type={type} id="inline-radio-1" className={`${units}`}>
                        <Form.Check.Input type="radio" name="group1"/>
                        <Form.Check.Label className={`${units_logo}`}>
                          <img src={voippecypcSVG} alt="VOIP Elements" />
                        </Form.Check.Label>
                        <Form.Check.Label className={`${units_desc}`}>
                          <h4 className="business_unit_name">{VOIPElements.title}</h4>
                          <p>{VOIPElements.description}</p>
                        </Form.Check.Label>
                      </Form.Check>
                    </div>
                  </Col>
                  <Col xs={12} sm={6} md={4} lg={3} xl={3}>
                    <div key={type} className={`mb-5 ${b_unit_wrapper}`}>
                      <Form.Check type={type} id="inline-radio-2" className={`${units}`}>
                        <Form.Check.Input type="radio" name="group1"/>
                        <Form.Check.Label className={`${units_logo}`}>
                          <img src={itpecypcSVG} alt="VOIP Elements" />
                        </Form.Check.Label>
                        <Form.Check.Label className={`${units_desc}`}>
                          <h4 className="business_unit_name">{ITElements.title}</h4>
                          <p>{ITElements.description}</p>
                        </Form.Check.Label>
                      </Form.Check>
                    </div>
                  </Col>
                  <Col xs={12} sm={6} md={4} lg={3} xl={3}>
                    <div key={type} className={`mb-5 ${b_unit_wrapper}`}>
                      <Form.Check type={type} id="inline-radio-3" className={`${units}`}>
                        <Form.Check.Input type="radio" name="group1"/>
                        <Form.Check.Label className={`${units_logo}`}>
                          <img src={cloudpecypcSVG} alt="VOIP Elements" />
                        </Form.Check.Label>
                        <Form.Check.Label className={`${units_desc}`}>
                          <h4 className="business_unit_name">{CloudElements.title}</h4>
                          <p>{CloudElements.description}</p>
                        </Form.Check.Label>
                      </Form.Check>
                    </div>
                  </Col>
                  <Col xs={12} sm={6} md={4} lg={3} xl={3}>
                    <div key={type} className={`mb-5 ${b_unit_wrapper}`}>
                      <Form.Check type={type} id="inline-radio-4" className={`${units}`}>
                        <Form.Check.Input type="radio" name="group1"/>
                        <Form.Check.Label className={`${units_logo}`}>
                          <img src={growthpecypcSVG} alt="VOIP Elements" />
                        </Form.Check.Label>
                        <Form.Check.Label className={`${units_desc}`}>
                          <h4 className="business_unit_name">{GrowthElements.title}</h4>
                          <p>{GrowthElements.description}</p>
                        </Form.Check.Label>
                      </Form.Check>
                    </div>
                  </Col>
                  <Col xs={12} sm={6} md={4} lg={3} xl={3}>
                    <div key={type} className={`mb-5 ${b_unit_wrapper}`}>
                      <Form.Check type={type} id="inline-radio-5" className={`${units}`}>
                        <Form.Check.Input type="radio" name="group1"/>
                        <Form.Check.Label className={`${units_logo}`}>
                          <img src={iotpecypcSVG} alt="VOIP Elements" />
                        </Form.Check.Label>
                        <Form.Check.Label className={`${units_desc}`}>
                          <h4 className="business_unit_name">{IoTElements.title}</h4>
                          <p>{IoTElements.description}</p>
                        </Form.Check.Label>
                      </Form.Check>
                    </div>
                  </Col>
                  </>
                ))}
              {/* <Col xs={12} sm={6} md={4} lg={3} xl={3}>
                <Form.Check.Input type="radio" id="inline-radio-1" name="group1"/>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} xl={3}>
                <Form.Check.Input type="radio" id="inline-radio-2" name="group1" />
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} xl={3}>
                <Form.Check.Input type="radio" id="inline-radio-3" name="group1" />
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} xl={3}>
                <Form.Check.Input type="radio" id="inline-radio-4" name="group1" />
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} xl={3}>
                <Form.Check.Input type="radio" id="inline-radio-5" name="group1" />
              </Col> */}
            </Row>
          </Container>
        </div>
        <div className={`position-relative ${contactform_holder}`}>
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} sm={12} md={10} lg={8} xl={8}>
                <h3 className={`mb-5 ${form_title}`}>
                  contact form
                </h3>
                <Form className={`${contact_form_wrapper}`}>
                  <Form.Group as={Row} className="mb-3 justify-content-center">
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Form.Control type="text" placeholder="name" className="mb-5" />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Form.Control type="email" placeholder="email" className="mb-5" />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Form.Control type="text" placeholder="message" className="mb-5" />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={5} xl={4}>
                      <div className="d-grid">
                        <Button variant="primary" size="lg">
                          send message
                        </Button>
                      </div>
                    </Col>
                </Form.Group>
              </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </Layout>
  )
}
