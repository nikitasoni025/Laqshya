import React from 'react';
import './bannercarousel.scss';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "animate.css";
// https://ik.imagekit.io/dexo68yudb/625581fdda54f874b9152a6b_shutterstock_1683847615.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676362306320


const Bannercarousel = (props) => {

    const handleSlideChange=(e)=>{
        let indx=e.item.index;

        let overlayDetails=document.getElementsByClassName('overlay-deatils');
        console.log(indx,overlayDetails[4].classList);

        if(indx===3){
            overlayDetails[3].classList.add('details-active');
            overlayDetails[4].classList.remove('details-active');
            overlayDetails[5].classList.remove('details-active');
            overlayDetails[6].classList.remove('details-active');
            overlayDetails[7].classList.remove('details-active');
            overlayDetails[8].classList.remove('details-active');
        }else if(indx===4){
            overlayDetails[3].classList.remove('details-active');
            overlayDetails[4].classList.add('details-active');
            overlayDetails[5].classList.remove('details-active');
            overlayDetails[6].classList.remove('details-active');
            overlayDetails[7].classList.remove('details-active');
            overlayDetails[8].classList.remove('details-active');
        }else if(indx===5){
            overlayDetails[3].classList.remove('details-active');
            overlayDetails[4].classList.remove('details-active');
            overlayDetails[5].classList.add('details-active');
            overlayDetails[6].classList.remove('details-active');
            overlayDetails[7].classList.remove('details-active');
            overlayDetails[8].classList.remove('details-active');
        }else if(indx===6){
            overlayDetails[3].classList.remove('details-active');
            overlayDetails[4].classList.remove('details-active');
            overlayDetails[5].classList.remove('details-active');
            overlayDetails[6].classList.add('details-active');
            overlayDetails[7].classList.remove('details-active');
            overlayDetails[8].classList.remove('details-active');
        }else if(indx===7){
            overlayDetails[3].classList.remove('details-active');
            overlayDetails[4].classList.remove('details-active');
            overlayDetails[5].classList.remove('details-active');
            overlayDetails[6].classList.remove('details-active');
            overlayDetails[7].classList.add('details-active');
            overlayDetails[8].classList.remove('details-active');
        }else if(indx===8){
            overlayDetails[3].classList.remove('details-active');
            overlayDetails[4].classList.remove('details-active');
            overlayDetails[5].classList.remove('details-active');
            overlayDetails[6].classList.remove('details-active');
            overlayDetails[7].classList.remove('details-active');
            overlayDetails[8].classList.add('details-active');
        }
     
        

    }
    return (
        <div className='bannercarousel'>
            <OwlCarousel onChanged={handleSlideChange} className='owl-theme' autoplay={true} loop autoplaySpeed={5000} nav={false} items={1}>
                {props.bannerSlides ? props.bannerSlides.map((slides,index) => {
                    return (
                        <div key={index} className="item banner-slide">
                            <div className='banner-slide-wrap'>
                                <img src={slides.img} width={"100%"} height={"100%"} alt="banner"/>
                                <div className='banner-overlay'>
                                    <div className='overlay-deatils'>
                                        <h1>{slides.title}</h1>
                                        <div className="explr-btn">
                                            <a href={'/events/#'+slides.title}>Explore</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }):(
                    <div className="item banner-slide">
                            <div className='banner-slide-wrap'>
                                <img src='https://ik.imagekit.io/dexo68yudb/2514340.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676363192139' />
                                <div className='banner-overlay'>
                                    <div className='overlay-deatils'>
                                        <h1>Loading...</h1>
                                        <div className="explr-btn">
                                            <a href='#'>Explore</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                )}

            </OwlCarousel>

        </div>
    )
}

export default Bannercarousel