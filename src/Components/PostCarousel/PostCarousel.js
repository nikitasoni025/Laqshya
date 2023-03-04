import React from 'react'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";


import "./postCarousel.scss";
import { Autoplay, EffectCoverflow, EffectCreative, Pagination } from "swiper"
import { Link } from 'react-router-dom';

const PostCarousel = (props) => {
  let post = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let posts = [
    { title: "New Post", img: "https://ik.imagekit.io/dexo68yudb/Dance_Fusion.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673809010282" },
    { title: "Shaurya Came With Terrific Surprise", img: "https://ik.imagekit.io/dexo68yudb/Ballet_Performance_Photos_and_Premium_High_Res_Pictures.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673809213988" },
    { title: "New Post", img: "https://ik.imagekit.io/dexo68yudb/Black_Minimalist_Quote_Instagram_Post.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677790805602" },
    { title: "New Post", img: "https://ik.imagekit.io/dexo68yudb/21_Professional_Break_Dancing_Photos___Photoshop_Tutorials.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673809612232" },
    { title: "New Post", img: "https://ik.imagekit.io/dexo68yudb/Jazz__Classical_Grace___1_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673809716244" },
    { title: "New Post", img: "https://ik.imagekit.io/dexo68yudb/Jazz__Classical_Grace___1_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673809716244" },
    { title: "New Post", img: "https://ik.imagekit.io/dexo68yudb/Jazz__Classical_Grace___1_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673809716244" },
    { title: "New Post", img: "https://ik.imagekit.io/dexo68yudb/Jazz__Classical_Grace___1_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673809716244" },
    { title: "New Post", img: "https://ik.imagekit.io/dexo68yudb/Jazz__Classical_Grace___1_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673809716244" },
    { title: "New Post", img: "https://ik.imagekit.io/dexo68yudb/Jazz__Classical_Grace___1_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673809716244" },

  ]
  return (

    <div className='post-carousel'>
      <Swiper
        effect={props.windowSize[0] <= 990 ? "creative" : "coverflow"}
        autoplay={{delay: 3000,disableOnInteraction: false}}
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={props.windowSize[0] <= 990 ? "auto" : 3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={props.windowSize[0] <= 990 ? [EffectCreative, Autoplay] : [EffectCoverflow, Autoplay, Pagination]}
        className="mySwiper"
      >
        {/* Here the Image Section */}

        {posts.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              {/* <Link to={'/events'} className="my-post-card"> */}
              <div className="my-post-card">
                <a href='/events' className="overlay">
                  <div className="numberi">{index+1}</div>
                  <div className="over-details">
                    <div className="badge"><span>Category</span></div>
                    <h1>{item.title.length > 20 ? item.title.slice(0, 20) + "..." : item.title}</h1>
                  </div>

                </a>
                <img src={item.img} />
              </div>
              {/* </Link> */}
            </SwiperSlide>
          )
        })}

      </Swiper>
    </div >
  )
}

export default PostCarousel;