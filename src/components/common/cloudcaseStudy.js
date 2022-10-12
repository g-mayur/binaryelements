import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Slider from "react-slick";
import CSImage1 from "../../assets/voipelements/cloudcasestudy-img1.png";
import CSImage2 from "../../assets/voipelements/cloudcasestudy-img2.png";
import CSImage3 from "../../assets/voipelements/cloudcasestudy-img3.png";
import CSImage4 from "../../assets/voipelements/cloudcasestudy-img4.png";
import { Link } from "gatsby";
import useWindowResize from "../common/windowResize";

const isBrowser = typeof window !== "undefined"

const CloudCasestudy = () => {
  if (!isBrowser) {
    return;
 }
  const [mobileView] = useWindowResize();

    const voipcasestudySlider = {
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: 'linear',
        arrows: true,
        speed: 1500,
        centerMode: true,
        centerPadding: "60px",
        vertical: false,
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
                centerMode: false,
                centerPadding: "0",
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                centerPadding: "0",
              }
            }
          ]
    }
  return (
    <section className="bucasestudy_holder cloudelements">
        <div className="caseStudy_holder">
          <Container fluid>
              <Row>
                  <Col xs={12} sm={12} md={10} lg={10} xl={8}>
                      <h2 className="H2 text-white">
                          Case Study
                      </h2>
                  </Col>
              </Row>
          </Container>
          <div className="mt-5 casestudy__slider_wrapper">
              <Slider {...voipcasestudySlider}>
                  <div className="casestudy__wrapper">
                      <div className="casestudy__img mb-4">
                          <img src={CSImage1} alt="SSS Auto" />
                      </div>
                      <div className="casestudy_content">
                          <h4 className='title mb-3'>Clenergy</h4>
                          <p className="description mb-3">Learn more about how Clenergy reviewed their data requirements</p>
                          <Link className='text-yellow cursor-pointer'>read more</Link>
                      </div>
                  </div>
                  <div className="casestudy__wrapper">
                      <div className="casestudy__img mb-4">
                          <img src={CSImage2} alt="DJI" />
                      </div>
                      <div className="casestudy_content">
                          <h4 className='title mb-3'>The Mint</h4>
                          <p className="description mb-3">Learn more about how The Mint reviewed their data requirements</p>
                          <Link className='text-yellow cursor-pointer'>read more</Link>
                      </div>
                  </div>
                  <div className="casestudy__wrapper">
                      <div className="casestudy__img mb-4">
                          <img src={CSImage3} alt="Mr. Burger" />
                      </div>
                      <div className="casestudy_content">
                          <h4 className='title mb-3'>Arbory</h4>
                          <p className="description mb-3">Learn more about how Arbory reviewed their data requirements</p>
                          <Link className='text-yellow cursor-pointer'>read more</Link>
                      </div>
                  </div>
                  <div className="casestudy__wrapper">
                      <div className="casestudy__img mb-4">
                          <img src={CSImage4} alt="13/1300 and 1800 Numbers" />
                      </div>
                      <div className="casestudy_content">
                          <h4 className='title mb-3'>13/1300 and 1800 Numbers</h4>
                          <p className="description mb-3">Get vanity numbers such as 13 FINANCE or a 13/1300/1800 number for customers to easily remember and call.</p>
                          <Link className='text-yellow cursor-pointer'>read more</Link>
                      </div>
                  </div>
                  {!mobileView ?
                    <div className='casestudy__wrapper mobileView'></div>
                  :null}
              </Slider>
          </div>
        </div>
      </section>
  )
}

export default CloudCasestudy;