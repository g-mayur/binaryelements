import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Slider from "react-slick";
import PSImage1 from "../../assets/voipelements/growth-product1.png";
import PSImage2 from "../../assets/voipelements/growth-product2.png";
import PSImage3 from "../../assets/voipelements/growth-product3.png";
import PSImage4 from "../../assets/voipelements/growth-product4.png";
import { Link } from "gatsby";

const GrowthServices = () => {
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
    <section className="buproducts_holder growthelements">
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
                          <h4 className='title mb-3'>E-commerce</h4>
                          <p className="description mb-3">Connect your Mangento, Woocommerce, Ebay with your SAP B1.</p>
                          <Link to="">read more</Link>
                      </div>
                  </div>
                  <div className="casestudy__wrapper">
                      <div className="casestudy__img mb-4">
                          <img src={PSImage2} alt="DJI" />
                      </div>
                      <div className="casestudy_content">
                          <h4 className='title mb-3'>Intercompany</h4>
                          <p className="description mb-3">Two way sync for your different SAP B1 with Item, Project, Sales Orders, Invoices, Purchase Orders sync.</p>
                          <Link to="">read more</Link>
                      </div>
                  </div>
                  <div className="casestudy__wrapper">
                      <div className="casestudy__img mb-4">
                          <img src={PSImage3} alt="Mr. Burger" />
                      </div>
                      <div className="casestudy_content">
                          <h4 className='title mb-3'>Sales Automation</h4>
                          <p className="description mb-3">Effective and productivity with SAP Suite. Multiple sales staff running day to day quotes and sales orders without touching SAP B1.</p>
                          <Link to="">read more</Link>
                      </div>
                  </div>
                  <div className="casestudy__wrapper">
                      <div className="casestudy__img mb-4">
                          <img src={PSImage4} alt="13/1300 and 1800 Numbers" />
                      </div>
                      <div className="casestudy_content">
                          <h4 className='title mb-3'>Vendor Automation</h4>
                          <p className="description mb-3">Receive Purchase Orders from your customer and automate Sales Order creation.</p>
                          <Link to="">read more</Link>
                      </div>
                  </div>
              </Slider>
          </div>
        </div>
      </section>
  )
}

export default GrowthServices;