import React from 'react'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";


import "./postCarousel.scss";
import { EffectCoverflow, Pagination } from "swiper"

const PostCarousel = () => {
  let post = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (

    <div className='post-carousel'>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination]} 
        className="mySwiper"
      >
        {/* Here the Image Section */}

        {post.map((item,index)=>{
          return(
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          )
        })}

      </Swiper>
    </div>
  )
}

export default PostCarousel;