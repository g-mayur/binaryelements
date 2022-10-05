import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Slider from 'react-slick';
import Communicate from '../../assets/products/communicate.png';
import Run from '../../assets/products/run.png';
import Protect from '../../assets/products/protect.png';
import Automate from '../../assets/products/automate.png';
import Future from '../../assets/products/future.png';
import { Link } from 'gatsby';
import { Col, Container, Row } from 'react-bootstrap';

const Products = () => {
const [slider,setSlider] = useState()

   const  scroll = (y) =>{
    console.log(y);
        y > 0 ? (
           slider?.slickPrev()
        ) : (
            slider?.slickNext()
        )
    }
    useEffect(() => {
        const ProductWrapper = document.querySelector(".product-slider");
        ProductWrapper.addEventListener('wheel', (e) => {
            scroll(e.wheelDelta);
            e.preventDefault();
        })
    },)
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        centerPadding: "60px",
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                settings: 'unslick'
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 0,
                vertical: true,
                verticalSwiping: true,
                beforeChange: function(currentSlide, nextSlide) {
                  console.log("before change", currentSlide, nextSlide);
                },
                afterChange: function(currentSlide) {
                  console.log("after change", currentSlide);
                }
                
            }
            }
        ]
        };
  return (
    <>
    <div className='mt-5 product-slider d-none d-md-block'>
        <Slider {...settings} ref={slider => setSlider(slider)}>
          <div className='product__wrapper py-5 communicate'>
            <img src={Communicate} alt="Communicate" className='mx-auto' />
            <h3 className='product_title mt-5 mb-3'>Communicate — <span>VOIPElements</span></h3>
            <Link to="">read more</Link>
          </div>
          <div className='product__wrapper py-5 run'>
            <img src={Run} alt="Run" className='mx-auto' />
            <h3 className='product_title mt-5 mb-3'>Run — <span>ITElements</span></h3>
            <Link to="">read more</Link>
          </div>
          <div className='product__wrapper py-5 protect'>
            <img src={Protect} alt="Protect" className='mx-auto' />
            <h3 className='product_title mt-5 mb-3'>Protect — <span>CloudElements</span></h3>
            <Link to="">read more</Link>
          </div>
          <div className='product__wrapper py-5 automate'>
            <img src={Automate} alt="Automate" className='mx-auto' />
            <h3 className='product_title mt-5 mb-3'>Autommate — <span>GrowthElements</span></h3>
            <Link to="">read more</Link>
          </div>
          <div className='product__wrapper py-5 future'>
            <img src={Future} alt="Future" className='mx-auto' />
            <h3 className='product_title mt-5 mb-3'>Future — <span>IoTElements</span></h3>
            <Link to="">read more</Link>
          </div>
        </Slider>
    </div>
    <Container fluid>
        <Row className='justify-content-center'>
          <Col xs={10} sm={10} md={10} lg={10} xl={8}>
            <div className='mt-5 product-slider d-block d-md-none'>
              <div className='product__wrapper py-5 communicate'>
                  <img src={Communicate} alt="Communicate" className='mx-auto' />
                  <h3 className='product_title mt-5 mb-3'>Communicate — <span>VOIPElements</span></h3>
                  <Link to="">read more</Link>
                </div>
                <div className='product__wrapper py-5 run'>
                  <img src={Run} alt="Run" className='mx-auto' />
                  <h3 className='product_title mt-5 mb-3'>Run — <span>ITElements</span></h3>
                  <Link to="">read more</Link>
                </div>
                <div className='product__wrapper py-5 protect'>
                  <img src={Protect} alt="Protect" className='mx-auto' />
                  <h3 className='product_title mt-5 mb-3'>Protect — <span>CloudElements</span></h3>
                  <Link to="">read more</Link>
                </div>
                <div className='product__wrapper py-5 automate'>
                  <img src={Automate} alt="Automate" className='mx-auto' />
                  <h3 className='product_title mt-5 mb-3'>Autommate — <span>GrowthElements</span></h3>
                  <Link to="">read more</Link>
                </div>
                <div className='product__wrapper py-5 future'>
                  <img src={Future} alt="Future" className='mx-auto' />
                  <h3 className='product_title mt-5 mb-3'>Future — <span>IoTElements</span></h3>
                  <Link to="">read more</Link>
                </div>
            </div>
          </Col>
        </Row>
    </Container>
    </>
  )
}

export default Products;