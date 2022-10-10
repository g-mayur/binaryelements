import React from "react";
import { useLayoutEffect } from "react";
import {  Col, Container, Row, } from "react-bootstrap"
import Communicate from "../../assets/products/communicate.png";
import Run from "../../assets/products/run.png";
import Protect from "../../assets/products/protect.png";
import Automate from "../../assets/products/automate.png";
import Future from "../../assets/products/future.png";
import { Link } from "gatsby";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Products = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const pinBoxes = document.querySelectorAll(".pin-wrap > *");
    const pinWrap = document.querySelector(".pin-wrap");

    let pinWrapWidth;
    let horizontalScrollLength;

    function refresh() {
      pinWrapWidth = pinWrap.scrollWidth;
      horizontalScrollLength = pinWrapWidth - window.innerWidth;
      console.log('pinWrapWidth', pinWrapWidth, horizontalScrollLength);
    }

    console.log("window load listener");
    refresh();
    gsap.registerEase("myEaseName", function (progress) {
      return progress; //linear
    });
    // Pinning and horizontal scrolling
    gsap.to(".pin-wrap", {
      scrollTrigger: {
        scrub: 1,
        trigger: "#sectionPin",
        pin: true,
        pinSpacer: ".pin-spacer",
        pinSpacing: true,
        start: "center center",
        markers: true,
        onEnter: () => console.log("enter"),
        end: () => `+=${pinWrapWidth}`,
        invalidateOnRefresh: true,
      },
      duration: 1,
      x: () => -horizontalScrollLength - 180,
      ease: "none",
    });

    ScrollTrigger.addEventListener("refreshInit", refresh);
  }, []);
  
  return (
    <>
      <div className="pin-spacer product-slider mt-5 d-none d-lg-block">
        <div id="sectionPin">
          <div className="row d-flex flex-nowrap py-70 pin-wrap">
            <div
              id="section-2"
              className="d-flex flex-wrap col-6 col-sm-6 col-md-2 process-item process-item--nobefore product__wrapper py-5 communicate"
            >
              <div className="product-slide-inner-block">
                <Link to="/business-units/voip-elements/">
                  <img
                    src={Communicate}
                    alt="Communicate"
                    className="mx-auto"
                  />
                </Link>
                <h3 className="product_title mt-5 mb-3">
                  Communicate — <span>VOIPElements</span>
                </h3>
                <p className="product__description">
                  Curabitur aliquet quam id dui posuere blandit. Vivamus
                  suscipit tortor eget felis porttitor volutpat.
                </p>
              </div>
            </div>
            <div
              id="section-1"
              className="d-flex flex-wrap col-12 col-sm-6 col-md-2 process-item product__wrapper py-5 run"
            >
              <div className="product-slide-inner-block">
                <Link to="/business-units/it-elements/">
                  <img src={Run} alt="Run" className="mx-auto" />
                </Link>
                <h3 className="product_title mt-5 mb-3">
                  Run — <span>ITElements</span>
                </h3>
                <p className="product__description">
                  Curabitur aliquet quam id dui posuere blandit. Vivamus
                  suscipit tortor eget felis porttitor volutpat.
                </p>
              </div>
            </div>

            <div className="d-flex flex-wrap col-12 col-sm-6 col-md-2 process-item product__wrapper py-5 protect">
              <div className="product-slide-inner-block">
                <Link to="/business-units/cloud-elements/">
                  <img src={Protect} alt="Protect" className="mx-auto" />
                </Link>
                <h3 className="product_title mt-5 mb-3">
                  Protect — <span>CloudElements</span>
                </h3>
                <p className="product__description">
                  Curabitur aliquet quam id dui posuere blandit. Vivamus
                  suscipit tortor eget felis porttitor volutpat.
                </p>
              </div>
            </div>

            <div className="d-flex flex-wrap col-12 col-sm-6 col-md-2 process-item product__wrapper py-5 automate">
              <div className="product-slide-inner-block">
                <Link to="/business-units/growth-elements/">
                  <img src={Automate} alt="Automate" className="mx-auto" />
                </Link>
                <h3 className="product_title mt-5 mb-3">
                  Automate — <span>GrowthElements</span>
                </h3>
                <p className="product__description">
                  Curabitur aliquet quam id dui posuere blandit. Vivamus
                  suscipit tortor eget felis porttitor volutpat.
                </p>
              </div>
            </div>

            <div className="d-flex flex-wrap col-12 col-sm-6 col-md-2 process-item product__wrapper py-5 future">
              <div className="product-slide-inner-block">
                <Link to="/business-units/iot-elements/">
                  <img src={Future} alt="Future" className="mx-auto" />
                </Link>
                <h3 className="product_title mt-5 mb-3">
                  Future — <span>IoTElements</span>
                </h3>
                <p className="product__description">
                  Curabitur aliquet quam id dui posuere blandit. Vivamus
                  suscipit tortor eget felis porttitor volutpat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container fluid>
        <Row className='justify-content-center'>
          <Col xs={10} sm={10} md={10} lg={10} xl={8}>
            <div className='mt-5 product-slider d-block d-md-none'>
              <div className='product__wrapper py-5 communicate'>
                <Link to="/business-units/voip-elements/"><img src={Communicate} alt="Communicate" className='mx-auto' /></Link>
                <h3 className='product_title mt-5 mb-3'>Communicate — <span>VOIPElements</span></h3>
                <p className='product__description'>Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
              </div>
            <div className='product__wrapper py-5 run'>
                <Link to="/business-units/it-elements/"><img src={Run} alt="Run" className='mx-auto' /></Link>
                <h3 className='product_title mt-5 mb-3'>Run — <span>ITElements</span></h3>
                <p className='product__description'>Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
              </div>
            <div className='product__wrapper py-5 protect'>
                <Link to="/business-units/cloud-elements/"><img src={Protect} alt="Protect" className='mx-auto' /></Link>
                <h3 className='product_title mt-5 mb-3'>Protect — <span>CloudElements</span></h3>
                <p className='product__description'>Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
              </div>
            <div className='product__wrapper py-5 automate'>
                <Link to="/business-units/growth-elements/"><img src={Automate} alt="Automate" className='mx-auto' /></Link>
                <h3 className='product_title mt-5 mb-3'>Automate — <span>GrowthElements</span></h3>
                <p className='product__description'>Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
              </div>
            <div className='product__wrapper py-5 future'>
                <Link to="/business-units/iot-elements/"><img src={Future} alt="Future" className='mx-auto' /></Link>
                <h3 className='product_title mt-5 mb-3'>Future — <span>IoTElements</span></h3>
                <p className='product__description'>Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
              </div>
            </div>
          </Col>
        </Row>
    </Container>

    </>
  );
};

export default Products;
