import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Slider from "react-slick";
import PSImage1 from "../../assets/voipelements/iot-product1.png";
import PSImage2 from "../../assets/voipelements/iot-product2.png";
import { Link } from "gatsby";

const IotServices = () => {
    const voipserviceSlider = {
        slidesToShow: 3.5,
        slidesToScroll: 1,
        cssEase: 'linear',
        arrows: true,
        speed: 1000,
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
    <section className="buproducts_holder iotelements">
        <div className="caseStudy_holder">
          <Container fluid>
              <Row>
                  <Col xs={12} sm={12} md={10} lg={10} xl={8}>
                      <h2 className="H2 text-gray-900">
                          Our Products and Services
                      </h2>
                  </Col>
              </Row>
          </Container>
          <div className="mt-5 casestudy__slider_wrapper">
              <Slider {...voipserviceSlider}>
                  <div className="casestudy__wrapper">
                      <div className="casestudy__img mb-4">
                          <img src={PSImage1} alt="SSS Auto" />
                      </div>
                      <div className="casestudy_content">
                          <h4 className='title mb-3 text-gray-900'>Water Pressure Manager</h4>
                          <p className="description mb-3 text-gray-900">Regulate and control your water pressure in your building and home, controlled by our cloud app. Monitor readings and trigger alerts.</p>
                          <Link className='text-yellow cursor-pointer'>read more</Link>
                      </div>
                  </div>
                  <div className="casestudy__wrapper">
                      <div className="casestudy__img mb-4">
                          <img src={PSImage2} alt="DJI" />
                      </div>
                      <div className="casestudy_content">
                          <h4 className='title mb-3 text-gray-900'>Custom IoT Hardware and Apps</h4>
                          <p className="description mb-3 text-gray-900">From the hardware, circuitry and electrical components design as well as Cloud apps. Total process management from idea to implementation.</p>
                          <Link className='text-yellow cursor-pointer'>read more</Link>
                      </div>
                  </div>
              </Slider>
          </div>
        </div>
      </section>
  )
}

export default IotServices;