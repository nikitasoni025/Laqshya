import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Bannercarousel from '../../Components/Bannercarousel/Bannercarousel';
import Eventcarousel from '../../Components/Eventcarousel/Eventcarousel';
import Eventmodal from '../../Components/Eventmodal/Eventmodal';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import { bannerslide, bouddhiki, kaushalya, Kautilya, natraja, parakram, Shauryas } from '../../Constants/OurConst';
import { checkTokenExpiration } from '../../Utils/commonutil';
import './Eventpage.scss';

const Eventpage = (props) => {

  const [isUserAuthenticatedExpired, setIsUserAuthenticatedExpired] = useState(checkTokenExpiration());
  const [ourIndex, setOurIndex] = useState(0);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const navigate = useNavigate();



  const openModal =async (ourIndex) => {
    setOurIndex(ourIndex);
    setIsModalOpened(true);
  }





  console.log(ourIndex)
  return (
    <div className='Eventpage'>
      {/* <Eventmodal/> */}
      {!isUserAuthenticatedExpired ? null : (
        <Link to={'/signin'} className='clktosignin'>Sign to enroll for this event</Link>
      )
      }
      <div className="eventpage-wrap">
        {/* Navbar  */}
        <Navbar />


        <div className="event-banner">
          <Bannercarousel
            bannerSlides={bannerslide}
          />
        </div>


        <div className=' event-detail'>
          <div className="event-wrapdetail">
            {/* event shaurya stars here */}
            <a href="" id='Shaurya'></a>
            <div className='event-row'>
              <h1> <span className='diff-font'>Shaurya</span> </h1>
              <h2>ROBOTICS</h2>
              <div className='row-details'>
                <p>Shaurya is an exciting robotic event that brings together various competitions, including xxcelerate, robo soccer league, robo go-karting, robo sumo, deep blue, and robo fire fighting. Participants showcase their innovative designs and programming skills as they compete in these challenging and thrilling events. Whether you're a robotics enthusiast or just looking for some high-tech entertainment, Shaurya is an event that's sure to impress.</p>
              </div>
              <div className='row-events'>
                <Eventcarousel
                  isUserAuthenticated={!isUserAuthenticatedExpired}
                  events={Shauryas}
                  openModal={openModal}
                  windowSize={props.windowSize.length > 0 && props.windowSize ? props.windowSize : undefined}
                />
              </div>
            </div>
            {/* event kaushalya starts here */}
            <a href="" id='kaushalya'></a>
            <div className='event-row' >
              <h1><span className='diff-font'>Kaushalya</span></h1>
              <h2>SPORTS</h2>
              <div className='row-details'>
                <p>Kaushalya is a multi-sport event that brings together athletes and enthusiasts from various backgrounds to compete in four exciting disciplines - cricket, arm wrestling, futsal, and Angry Bird. This event promises to be a thrilling display of strength, skill, and strategy, as participants battle it out in each sport to claim the coveted Kautilya trophy. Whether you're a seasoned athlete or a casual fan, Kautilya is sure to provide an unforgettable experience for all who participate.</p>
              </div>
              <div className='row-events'>
                <Eventcarousel
                  isUserAuthenticated={!isUserAuthenticatedExpired}
                  events={kaushalya}
                  windowSize={props.windowSize.length > 0 && props.windowSize ? props.windowSize : undefined}
                />
              </div>
            </div>
            {/* event bouddhiki starts here */}
            <a href="" id='Bouddhiki'></a>
            <div className='event-row'>
              <h1><span className='diff-font'>Bouddhiki</span></h1>
              <h2>Brain Teaser</h2>
              <div className='row-details'>
                <p>Bouddhiki is an exciting brain teaser event that challenges participants to showcase their intelligence and creativity through a series of mental challenges. This event features a Face of Laqshya competition, where participants are judged on their ability to showcase their personality and confidence. Additionally, the event includes an Artifex show, which highlights the artistic skills of the participants, and a Cinematics challenge, where participants create and present short films on a given theme. Bouddhiki is a thrilling event that combines multiple talents and skills to create a unique and exciting experience for all involved.</p>
              </div>
              <div className='row-events'>
                <Eventcarousel
                   isUserAuthenticated={!isUserAuthenticatedExpired}
                  events={bouddhiki}
                  openModal={openModal}
                  windowSize={props.windowSize.length > 0 && props.windowSize ? props.windowSize : undefined}
                />
              </div>
            </div>
            {/* event parakram starts here */}
            <a href="" id='Parakram'></a>
            <div className='event-row'>
              <h1><span className='diff-font'>Parakram</span></h1>
              <h2>Technical</h2>
              <div className='row-details'>
                <p>Parakram is a dynamic technical event that showcases a range of cutting-edge competitions. The event features four exciting competitions, including Bottle Jet, CAD Master, D Bugger, and Pharma. Each competition challenges participants to demonstrate their technical expertise and problem-solving skills in different areas such as aerodynamics, computer-aided design, debugging, and pharmaceuticals. With a high-energy atmosphere and talented participants, Parakram is a must-attend event for anyone interested in the latest technological advancements.</p>
                <div className='row-events'>
                  <Eventcarousel
                    isUserAuthenticated={!isUserAuthenticatedExpired}
                    events={parakram}
                    openModal={openModal}
                    windowSize={props.windowSize.length > 0 && props.windowSize ? props.windowSize : undefined}
                  />
                </div>
              </div>
            </div>
            {/* event natraj starts here */}
            <a href="" id='Natraja'></a>
            <div className='event-row' >
              <h1><span className='diff-font'>Natraja</span></h1>
              <h2>Cultural</h2>
              <div className='row-details'>
                <p>Nataraja" is a cultural event that celebrates the art of dance and the spirit of spontaneity through the popular game "Just a Minute". This event brings together dancers from different genres and backgrounds to showcase their skills and creativity in front of an enthusiastic audience. The participants are challenged to perform impromptu dances to various themes and music styles, while also being tested on their ability to articulate their thoughts in a minute or less. Nataraja promises to be a vibrant and entertaining evening that celebrates the beauty and diversity of dance and the power of words.</p>
                <div className='row-events'>
                  <Eventcarousel
                     isUserAuthenticated={!isUserAuthenticatedExpired}
                    events={natraja}
                    openModal={openModal}
                    windowSize={props.windowSize.length > 0 && props.windowSize ? props.windowSize : undefined}
                  />
                </div>
              </div>
            </div>
            {/* event kautilya */}
            <a href="" id='Kautilya'></a>
            <div className='event-row'>
              <h1><span className='diff-font'>Kautilya</span></h1>
              <h2>Academic</h2>
              <div className='row-details'>
                <p>Kautilya is an academic event that offers a diverse range of activities to engage and challenge participants. The event includes workshops and quiz masters to provide an immersive learning experience. Additionally, there is a hematology camp to promote awareness and education about blood disorders. For those seeking a more adventurous experience, a treasure hunt is also part of the event. Overall, Kautilya promises to be an exciting and educational event for all participants.</p>
                <div className='row-events'>
                  <Eventcarousel
                     isUserAuthenticated={!isUserAuthenticatedExpired}
                    events={Kautilya}
                    openModal={openModal}
                    windowSize={props.windowSize.length > 0 && props.windowSize ? props.windowSize : undefined}
                  />
                </div>
              </div>
            </div>



          </div>


        </div>
        <Footer windowSize={props.windowSize.length > 0 && props.windowSize ? props.windowSize : undefined} />

      </div>

    </div >

  )

}

export default Eventpage;