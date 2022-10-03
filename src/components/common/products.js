import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Slider from 'react-slick';
import Communicate from '../../assets/products/communicate.png';
import Run from '../../assets/products/run.png';
import Protect from '../../assets/products/protect.png';
import Automate from '../../assets/products/automate.png';
import Future from '../../assets/products/future.png';

const Products = () => {
// const [slide,setSlide] = useState()
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
        let ProductWrapper = document.querySelector(".product-slider");
        ProductWrapper.addEventListener('wheel', (e) => {
            scroll(e.wheelDelta);
            e.preventDefault();
        })
    },[])
    var settings = {
        // dots: true,
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
                initialSlide: 2
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
        };
  return (
    <div className='mt-5 product-slider'>
        <Slider {...settings} ref={slider => setSlider(slider)}>
          <div className='product__wrapper py-5 text-center communicate'>
            <img src={Communicate} alt="Communicate" className='mx-auto' />
          </div>
          <div className='product__wrapper py-5 text-center run'>
            <img src={Run} alt="Run" className='mx-auto' />
          </div>
          <div className='product__wrapper py-5 text-center protect'>
            <img src={Protect} alt="Protect" className='mx-auto' />
          </div>
          <div className='product__wrapper py-5 text-center automate'>
            <img src={Automate} alt="Automate" className='mx-auto' />
          </div>
          <div className='product__wrapper py-5 text-center future'>
            <img src={Future} alt="Future" className='mx-auto' />
          </div>
        </Slider>
      </div>
  )
}

export default Products;