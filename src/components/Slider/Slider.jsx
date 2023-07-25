import React from 'react';
import Carousel from 'react-material-ui-carousel'

import {Swiper,SwiperSlide} from "swiper/react";
import {Pagination,Navigation} from "swiper";

//import "swiper/css"
//import"Swiper/css/Pagination"
//import "swiper/css/navigation"
import    "./Slider.css";

import { SliderProducts } from "../../data/products"

const Slider = () => {
  return (
    <div className="s-container">
        {/* <Swiper */}
        <Carousel>
        modules={[Pagination,Navigation]}
        className="mySwiper"
        navigation={true}
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        
            

                {SliderProducts.map((slide,i) =>(
                    <SwiperSlide>
                        <div className="left-s">
                            <div className="name">
                                <span>
                                    {slide.name}
                                </span>

                                <span>
                                    {slide.detail}
                                </span>
                            </div>
                            <span>{slide.price}$</span>
                            <div>Shop now</div>
                        </div>
                        <img src={slide.img} alt=""  className='img-p'/>
                        </SwiperSlide>
                        
                ))}
            
            </Carousel>
        {/* </Swiper> */}
    </div>
  );
};

export default Slider
