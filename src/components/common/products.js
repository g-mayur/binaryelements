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
// import VoipElements from ""

const Products = () => {
const [slider,setSlider] = useState()
const [slideIndex,setSlideIndex] = useState()
const [tempYScroll,setTempYScroll] = useState(0);
const [tempXScroll,setTempXScroll] = useState(0);

   const  scroll = (y) =>{
        //console.log(y);
        y > 0 ? (
           slider?.slickPrev()
        ) : (
            slider?.slickNext()
        )
    }

    const changeXScroll = (slide) => {
      setTempXScroll(1);
    }

    const changeYScroll = (slide) => {
      setTempYScroll(1);
    }

    useEffect(() => {
      if (tempXScroll == 1) {
        setTimeout(() => {
          window.scroll({
            top: document.getElementById("section_2").offsetTop,
            behavior: 'smooth'
          });
          setTempXScroll(0);
        }, 100);
      }
    }, [tempXScroll]);

    useEffect(() => {
      if (tempYScroll == 1) {
        setTimeout(() => {
          window.scroll({
            top: document.getElementById("section_3").offsetTop - 500,
            behavior: 'smooth'
          });
          setTempYScroll(0);
        }, 100);
      }
    }, [tempYScroll]);

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
        afterChange: function(index) {
          if ((index + 1) >= 2.5) {
            changeYScroll(1);
          }
          if ((index + 1) <= 1) {
            changeXScroll(1);
          }
        },
        responsive: [
          {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
            }
            },
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
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
                  //console.log("before change", currentSlide, nextSlide);
                },
                afterChange: function(currentSlide) {
                  //console.log("after change", currentSlide);
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
            <Link to="/"><img src={Communicate} alt="Communicate" className='mx-auto' /></Link>
            <h3 className='product_title mt-5 mb-3'>Communicate — <span>VOIPElements</span></h3>
            <p className='product__description'>Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
          </div>
          <div className='product__wrapper py-5 run'>
            <Link to="/"><img src={Run} alt="Run" className='mx-auto' /></Link>
            <h3 className='product_title mt-5 mb-3'>Run — <span>ITElements</span></h3>
            <p className='product__description'>Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
          </div>
          <div className='product__wrapper py-5 protect'>
            <Link to="/"><img src={Protect} alt="Protect" className='mx-auto' /></Link>
            <h3 className='product_title mt-5 mb-3'>Protect — <span>CloudElements</span></h3>
            <p className='product__description'>Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
          </div>
          <div className='product__wrapper py-5 automate'>
            <Link to="/"><img src={Automate} alt="Automate" className='mx-auto' /></Link>
            <h3 className='product_title mt-5 mb-3'>Autommate — <span>GrowthElements</span></h3>
            <p className='product__description'>Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
          </div>
          <div className='product__wrapper py-5 future'>
            <Link to="/"><img src={Future} alt="Future" className='mx-auto' /></Link>
            <h3 className='product_title mt-5 mb-3'>Future — <span>IoTElements</span></h3>
            <p className='product__description'>Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
          </div>
        </Slider>
    </div>
    <Container fluid>
        <Row className='justify-content-center'>
          <Col xs={10} sm={10} md={10} lg={10} xl={8}>
            <div className='mt-5 product-slider d-block d-md-none'>
              <div className='product__wrapper py-5 communicate'>
                <Link to="/"><img src={Communicate} alt="Communicate" className='mx-auto' /></Link>
                <h3 className='product_title mt-5 mb-3'>Communicate — <span>VOIPElements</span></h3>
                <p className='product__description'>Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
              </div>
            <div className='product__wrapper py-5 run'>
                <Link to="/"><img src={Run} alt="Run" className='mx-auto' /></Link>
                <h3 className='product_title mt-5 mb-3'>Run — <span>ITElements</span></h3>
                <p className='product__description'>Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
              </div>
            <div className='product__wrapper py-5 protect'>
                <Link to="/"><img src={Protect} alt="Protect" className='mx-auto' /></Link>
                <h3 className='product_title mt-5 mb-3'>Protect — <span>CloudElements</span></h3>
                <p className='product__description'>Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
              </div>
            <div className='product__wrapper py-5 automate'>
                <Link to="/"><img src={Automate} alt="Automate" className='mx-auto' /></Link>
                <h3 className='product_title mt-5 mb-3'>Autommate — <span>GrowthElements</span></h3>
                <p className='product__description'>Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
              </div>
            <div className='product__wrapper py-5 future'>
                <Link to="/"><img src={Future} alt="Future" className='mx-auto' /></Link>
                <h3 className='product_title mt-5 mb-3'>Future — <span>IoTElements</span></h3>
                <p className='product__description'>Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
              </div>
            </div>
          </Col>
        </Row>
    </Container>
    </>
  )
}

export default Products;