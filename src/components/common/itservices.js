import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Slider from "react-slick";
import PSImage1 from "../../assets/voipelements/it-product1.png";
import PSImage2 from "../../assets/voipelements/it-product2.png";
import PSImage3 from "../../assets/voipelements/it-product3.png";
import PSImage4 from "../../assets/voipelements/it-product4.png";
import { Link } from "gatsby";

const ITServices = () => {
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
    <section className="buproducts_holder itelements">
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
                          <h4 className='title mb-3'>Connectivity</h4>
                          <p className="description mb-3">Enterprise grade NBN, Fibre and 5G connections for your business. Designed to connect back to base and connect out to the internet.</p>
                          <Link className='text-pink cursor-pointer'>read more</Link>
                      </div>
                  </div>
                  <div className="casestudy__wrapper">
                      <div className="casestudy__img mb-4">
                          <img src={PSImage2} alt="DJI" />
                      </div>
                      <div className="casestudy_content">
                          <h4 className='title mb-3'>Networks</h4>
                          <p className="description mb-3">Ensuring coverage physically and virtual environment. Security conscious and deployment ready.</p>
                          <Link className='text-pink cursor-pointer'>read more</Link>
                      </div>
                  </div>
                  <div className="casestudy__wrapper">
                      <div className="casestudy__img mb-4">
                          <img src={PSImage3} alt="Mr. Burger" />
                      </div>
                      <div className="casestudy_content">
                          <h4 className='title mb-3'>Microsoft 365 Migration and Deployment</h4>
                          <p className="description mb-3">Let us handle migration and deployment of your MS 365 needs.</p>
                          <Link className='text-pink cursor-pointer'>read more</Link>
                      </div>
                  </div>
                  <div className="casestudy__wrapper">
                      <div className="casestudy__img mb-4">
                          <img src={PSImage4} alt="13/1300 and 1800 Numbers" />
                      </div>
                      <div className="casestudy_content">
                          <h4 className='title mb-3'>Veeam and Microsoft SPLA partner</h4>
                          <p className="description mb-3">Pay by usage instead of purchasing entire license.  Always know your software licensing is compliant.</p>
                          <Link className='text-pink cursor-pointer'>read more</Link>
                      </div>
                  </div>
              </Slider>
          </div>
        </div>
      </section>
  )
}

export default ITServices;