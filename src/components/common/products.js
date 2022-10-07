import React from "react";
import { useLayoutEffect } from "react";
import Communicate from "../../assets/products/communicate.png";
import Run from "../../assets/products/run.png";
import Protect from "../../assets/products/protect.png";
import Automate from "../../assets/products/automate.png";
import Future from "../../assets/products/future.png";
import { Link } from "gatsby";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import VoipElements from ""

const Products = () => {
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    gsap.registerPlugin(ScrollTrigger);

    const pinBoxes = document.querySelectorAll(".pin-wrap > *");
    const pinWrap = document.querySelector(".pin-wrap");

    let pinWrapWidth;
    let horizontalScrollLength;

    function refresh() {
      pinWrapWidth = pinWrap.scrollWidth;
      horizontalScrollLength = pinWrapWidth - window.innerWidth;
      //console.log(pinWrapWidth);
    }

    // if (document.readyState === "complete") {
    //do nothing
    // } else {
    // window.addEventListener("load", function () {
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
      x: () => -horizontalScrollLength - 100,
      ease: "none",
    });

    ScrollTrigger.addEventListener("refreshInit", refresh);
    // });
    // }
  }, []);
  // Next button
  // nextButton.addEventListener("click", function () {
  //   slideOneNext();
  // });

  /* // Previous button
        function slideOnePrev() {
          gsap.fromTo(targets[count], { xPercent: 0, zIndex: 10 }, {xPercent: 0, zIndex: 0 });
          gsap.fromTo(targets[count], { xPercent: 0, zIndex: 0 }, { delay: 0, duration: 1.2, xPercent: 100, zIndex: -10 });
          count = count < targets.length ? --count : 0;
        }
        prevButton.addEventListener("click", function() {
          slideOnePrev();
        }); */

  return (
    <>
      <div className="pin-spacer product-slider mt-5">
        <div id="sectionPin">
          <div className="row d-flex flex-nowrap py-70 pin-wrap">
            <div
              id="section-2"
              className="d-flex flex-wrap col-6 col-sm-6 col-md-2 process-item process-item--nobefore product__wrapper py-5 communicate"
            >
              <div className="product-slide-inner-block">
                <Link to="/">
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
                <Link to="/">
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
                <Link to="/">
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
                <Link to="/">
                  <img src={Automate} alt="Automate" className="mx-auto" />
                </Link>
                <h3 className="product_title mt-5 mb-3">
                  Autommate — <span>GrowthElements</span>
                </h3>
                <p className="product__description">
                  Curabitur aliquet quam id dui posuere blandit. Vivamus
                  suscipit tortor eget felis porttitor volutpat.
                </p>
              </div>
            </div>

            <div className="d-flex flex-wrap col-12 col-sm-6 col-md-2 process-item product__wrapper py-5 future">
              <div className="product-slide-inner-block">
                <Link to="/">
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
    </>
  );
};

export default Products;
