import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Slider from "react-slick";
import PSImage1 from "../../assets/voipelements/voip-product1.png";
import PSImage2 from "../../assets/voipelements/voip-product2.png";
import PSImage3 from "../../assets/voipelements/voip-product3.png";
import PSImage4 from "../../assets/voipelements/voip-product4.png";
import { Link } from "gatsby";

const VoipServices = () => {
    const voipserviceSlider = {
        slidesToShow: 3.5,
        slidesToScroll: 1,
        cssEase: 'linear',
        arrows: true,
        speed: 1500,
        infinite: false,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    }
  return (
    <section className="buproducts_holder voipelements">
        <div className="caseStudy_holder">
          <Container fluid>
              <Row>
                  <Col xs={12} sm={12} md={10} lg={10} xl={8}>
                      <h2 className="H2 text-white">
                          Our Products and Services
                      </h2>
                  </Col>
              </Row>
          </Container>
          <div className="mt-5 casestudy__slider_wrapper">
              <Slider {...voipserviceSlider}>
                  <div className="casestudy__wrapper" style={{margin: '0 auto'}}>
                      <div className="casestudy__img mb-4">
                          <img src={PSImage1} alt="SSS Auto" />
                      </div>
                      <div className="casestudy_content">
                          <h4 className='title mb-3'>3CX Cloud PBX</h4>
                          <p className="description mb-3">Enterprise grade VOIP phone system with features such as Queues, Ring Groups, call routing as well as Messaging, Online meetings and video conferencing.</p>
                          <Link to="">read more</Link>
                      </div>
                  </div>
                  <div className="casestudy__wrapper">
                      <div className="casestudy__img mb-4">
                          <img src={PSImage2} alt="DJI" />
                      </div>
                      <div className="casestudy_content">
                          <h4 className='title mb-3'>Unlimited VOIP Trunks</h4>
                          <p className="description mb-3">Available for any SIP based VOIP phone system such as Asterisk, Freeswitch, CISCO, Avaya and others.</p>
                          <Link to="">read more</Link>
                      </div>
                  </div>
                  <div className="casestudy__wrapper">
                      <div className="casestudy__img mb-4">
                          <img src={PSImage3} alt="Mr. Burger" />
                      </div>
                      <div className="casestudy_content">
                          <h4 className='title mb-3'>Mobile Numbers</h4>
                          <p className="description mb-3">Call out and receive calls with Mobile numbers. Allowing for better connects and pick ups by customers.</p>
                          <Link to="">read more</Link>
                      </div>
                  </div>
                  <div className="casestudy__wrapper">
                      <div className="casestudy__img mb-4">
                          <img src={PSImage4} alt="13/1300 and 1800 Numbers" />
                      </div>
                      <div className="casestudy_content">
                          <h4 className='title mb-3'>13/1300 and 1800 Numbers</h4>
                          <p className="description mb-3">Get vanity numbers such as 13 FINANCE or a 13/1300/1800 number for customers to easily remember and call.</p>
                          <Link to="">read more</Link>
                      </div>
                  </div>
              </Slider>
          </div>
        </div>
      </section>
  )
}

export default VoipServices;