import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from "react-slick";
import clenergy from "../../assets/companies/clenergy.png";
import mint from "../../assets/companies/mint.svg";
import thornbury from "../../assets/companies/thornbury.svg";
import pavilion from "../../assets/companies/pavilion.svg";
import arbory from "../../assets/companies/arbory.svg";
import makmur from "../../assets/companies/makmur.svg";

const Companies = () => {
    const settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                arrows: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                arrows: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
              }
            }
          ]
    }
  return (
    <div className="trustedcomapnies_holder">
        <Container fluid>
        <Row className="justify-content-center align-items-center">
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                <h4 className="H4 text-center mb-5">used and trusted by many companies</h4>
                <div className="mt-5">
                    <Slider {...settings}>
                        <div className='companies__logo'><img src={clenergy} alt="Clenergy" /></div>
                        <div className='companies__logo'><img src={mint} alt="The Mint" /></div>
                        <div className='companies__logo'><img src={thornbury} alt="Welcome to Thornbury" /></div>
                        <div className='companies__logo'><img src={pavilion} alt="West Beach Pavilion" /></div>
                        <div className='companies__logo'><img src={arbory} alt="Arbory" /></div>
                        <div className='companies__logo'><img src={makmur} alt="Makmur Enterprise" /></div>
                    </Slider>
                </div>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Companies;