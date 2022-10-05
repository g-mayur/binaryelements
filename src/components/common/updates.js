import { Link } from 'gatsby';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Slider from "react-slick";
import updateImage1 from "../../assets/updates/updateImg-1.png";
import updateImage2 from "../../assets/updates/updateImg-2.png";
import updateImage3 from "../../assets/updates/updateImg-3.png";

const Updates = () => {
    const updateSlider = {
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: 'linear',
        arrows: true,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 2500,
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
    <div className="updates_holder">
        <Container fluid>
            <Row>
                <Col xs={12} sm={12} md={10} lg={10} xl={8}>
                    <h2 className="H2 text-gray-900">
                        Updates
                    </h2>
                </Col>
            </Row>
        </Container>
        <div className="mt-5 updates__slider_wrapper">
            <Slider {...updateSlider}>
                <div className='updates__wrapper'>
                    <div className='updates_img mb-4'>
                        <img src={updateImage1} alt="Updates to our operations" />
                    </div>
                    <div className='updates_content'>
                        <p className='meta mb-2'>August 8, 2022</p>
                        <h4 className='title mb-3'>Updates to our operations</h4>
                        <p className='description mb-3'>Start of the year is generally a busy period. Lots of projects running and getting it up to date. For the end of month in Feb, here's an update of what we've been up to.</p>
                        <Link to="">read more</Link>
                    </div>
                </div>
                <div className='updates__wrapper'>
                    <div className='updates_img mb-4'>
                        <img src={updateImage2} alt="Updates to pike@be Q3/Q4 2022" />
                    </div>
                    <div className='updates_content'>
                        <p className='meta mb-2'>May 1, 2022</p>
                        <h4 className='title mb-3'>Updates to pike@be Q3/Q4 2022</h4>
                        <p className='description mb-3'>An update for be@pike Q3/Q4 2022</p>
                        <Link to="">read more</Link>
                    </div>
                </div>
                <div className='updates__wrapper'>
                    <div className='updates_img mb-4'>
                        <img src={updateImage3} alt="Updates to pike@be Q3/Q4 2022" />
                    </div>
                    <div className='updates_content'>
                        <p className='meta mb-2'>March 14, 2022</p>
                        <h4 className='title mb-3'>Updates to pike@be Q3/Q4 2022</h4>
                        <p className='description mb-3'>An update for be@pike Q3/Q4 2022</p>
                        <Link to="">read more</Link>
                    </div>
                </div>
                <div className='updates__wrapper'>
                    <div className='updates_img mb-4'>
                        <img src={updateImage1} alt="Updates to our operations" />
                    </div>
                    <div className='updates_content'>
                        <p className='meta mb-2'>August 8, 2022</p>
                        <h4 className='title mb-3'>Updates to our operations</h4>
                        <p className='description mb-3'>Start of the year is generally a busy period. Lots of projects running and getting it up to date. For the end of month in Feb, here's an update of what we've been up to.</p>
                        <Link to="">read more</Link>
                    </div>
                </div>
                <div className='updates__wrapper'>
                    <div className='updates_img mb-4'>
                        <img src={updateImage2} alt="Updates to pike@be Q3/Q4 2022" />
                    </div>
                    <div className='updates_content'>
                        <p className='meta mb-2'>May 1, 2022</p>
                        <h4 className='title mb-3'>Updates to pike@be Q3/Q4 2022</h4>
                        <p className='description mb-3'>An update for be@pike Q3/Q4 2022</p>
                        <Link to="">read more</Link>
                    </div>
                </div>
                <div className='updates__wrapper'>
                    <div className='updates_img mb-4'>
                        <img src={updateImage3} alt="Updates to pike@be Q3/Q4 2022" />
                    </div>
                    <div className='updates_content'>
                        <p className='meta mb-2'>March 14, 2022</p>
                        <h4 className='title mb-3'>Updates to pike@be Q3/Q4 2022</h4>
                        <p className='description mb-3'>An update for be@pike Q3/Q4 2022</p>
                        <Link to="">read more</Link>
                    </div>
                </div>
            </Slider>
        </div>
    </div>
  )
}

export default Updates;