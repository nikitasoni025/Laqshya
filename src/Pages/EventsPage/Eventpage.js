import React from 'react';
import Eventcarousel from '../../Components/Eventcarousel/Eventcarousel';
import Navbar from '../../Components/Navbar/Navbar';
import './Eventpage.scss';

const Eventpage = (props) => {

  let Shauryas=[
    {
      title:"Xxcelerate",
      img:"https://ik.imagekit.io/dexo68yudb/625581fdda54f874b9152a6b_shutterstock_1683847615.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676362306320",
    },
    {
      title:"Robo Soccer League",
      img:"https://ik.imagekit.io/dexo68yudb/625581fdda54f874b9152a6b_shutterstock_1683847615.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676362306320",
    },
    {
      title:"Robo Go Karting",
      img:"https://ik.imagekit.io/dexo68yudb/625581fdda54f874b9152a6b_shutterstock_1683847615.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676362306320",
    },
    {
      title:"Robo Sumo",
      img:"https://ik.imagekit.io/dexo68yudb/625581fdda54f874b9152a6b_shutterstock_1683847615.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676362306320",
    },
    {
      title:"Deep Blue",
      img:"https://ik.imagekit.io/dexo68yudb/625581fdda54f874b9152a6b_shutterstock_1683847615.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676362306320",
    },
    {
      title:"Robo Fire Fighting",
      img:"https://ik.imagekit.io/dexo68yudb/625581fdda54f874b9152a6b_shutterstock_1683847615.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676362306320",
    },
    {
      title:"Drone Race",
      img:"https://ik.imagekit.io/dexo68yudb/625581fdda54f874b9152a6b_shutterstock_1683847615.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676362306320",
    },
  ]
  let kautilya=[
    {
      title:"cricket",
      img:"https://ik.imagekit.io/dexo68yudb/625581fdda54f874b9152a6b_shutterstock_1683847615.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676362306320",
    },
    {
      title:"Arm Wrestling",
      img:"https://ik.imagekit.io/dexo68yudb/625581fdda54f874b9152a6b_shutterstock_1683847615.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676362306320",
    },
    {
      title:"Futsal",
      img:"https://ik.imagekit.io/dexo68yudb/625581fdda54f874b9152a6b_shutterstock_1683847615.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676362306320",
    },
    {
      title:"Angry Bird",
      img:"https://ik.imagekit.io/dexo68yudb/625581fdda54f874b9152a6b_shutterstock_1683847615.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676362306320",
    },
    
  ]
  let bouddhiki=[
    {
      title:"Face Of Laqshya",
      img:"https://ik.imagekit.io/dexo68yudb/625581fdda54f874b9152a6b_shutterstock_1683847615.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676362306320",
    },
    {
      title:"Artifex",
      img:"https://ik.imagekit.io/dexo68yudb/625581fdda54f874b9152a6b_shutterstock_1683847615.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676362306320",
    },
    {
      title:"cinematics",
      img:"https://ik.imagekit.io/dexo68yudb/625581fdda54f874b9152a6b_shutterstock_1683847615.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676362306320",
    },
    
    
  ]

  return (
    <div className='Eventpage'>
      <div className="eventpage-wrap">
        {/* Navbar  */}
        <Navbar />


        <div className="event-banner">
          <img src="https://ik.imagekit.io/dexo68yudb/giphy__1_.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1677773135214" className='event-angrybird'></img>
          <img src="https://ik.imagekit.io/dexo68yudb/giphy__2_.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1677774324253" className='event-robot'></img>

        </div>

        <div className="eventnav">
          <ul className="event-navmenu">
            <li><a href='#'><span className='diff-font'>Shaurya</span> Robotics</a></li>
            <li><a href='#'><span className='diff-font'>Kaushalya</span> Sports</a></li>
            <li><a href='#'><span className='diff-font'>Bouddhiki</span> Brain Teaser</a></li>
            <li><a href='#'><span className='diff-font'>Parakram</span> Technical </a></li>
            <li><a href='#'><span className='diff-font'>Natraja</span> Cultural</a></li>
            <li><a href='#'><span className='diff-font'>Kautilya</span> Acedmics</a></li>
          </ul>

        </div>
        <div className=' event-detail'>
          <div className="event-wrapdetail">
            {/* event shaurya stars here */}
            <div className='event-row'>
              <h1> <span className='diff-font'>Shaurya</span> </h1>
              <h2>ROBOTICS</h2>
              <div className='row-details'>
                <p>Shaurya is an exciting robotic event that brings together various competitions, including xxcelerate, robo soccer league, robo go-karting, robo sumo, deep blue, and robo fire fighting. Participants showcase their innovative designs and programming skills as they compete in these challenging and thrilling events. Whether you're a robotics enthusiast or just looking for some high-tech entertainment, Shaurya is an event that's sure to impress.</p>
              </div>
              <div className='row-events'>
                <Eventcarousel
                events={Shauryas}
                windowSize={props.windowSize.length > 0 && props.windowSize ? props.windowSize : undefined}
                />
              </div>
            </div>
            {/* event kaushalya starts here */}
            <div className='event-row'>
            <h1><span className='diff-font'>Kautilya</span></h1>
            <h2>SPORTS</h2>
            <div className='row-details'>
                <p>Kautilya is a multi-sport event that brings together athletes and enthusiasts from various backgrounds to compete in four exciting disciplines - cricket, arm wrestling, futsal, and Angry Bird. This event promises to be a thrilling display of strength, skill, and strategy, as participants battle it out in each sport to claim the coveted Kautilya trophy. Whether you're a seasoned athlete or a casual fan, Kautilya is sure to provide an unforgettable experience for all who participate.</p>
              </div>
              <div className='row-events'>
                <Eventcarousel
                events={kautilya}
                windowSize={props.windowSize.length > 0 && props.windowSize ? props.windowSize : undefined}
                />
              </div>
            </div>
            {/* event bouddhiki starts here */}
            <div className='event-row'>
            <h1><span className='diff-font'>Bouddhiki</span></h1>
            <h2>Brain Teaser</h2>
            <div className='row-details'>
                <p>Bouddhiki is an exciting brain teaser event that challenges participants to showcase their intelligence and creativity through a series of mental challenges. This event features a Face of Laqshya competition, where participants are judged on their ability to showcase their personality and confidence. Additionally, the event includes an Artifex show, which highlights the artistic skills of the participants, and a Cinematics challenge, where participants create and present short films on a given theme. Bouddhiki is a thrilling event that combines multiple talents and skills to create a unique and exciting experience for all involved.</p>
              </div>
              <div className='row-events'>
                <Eventcarousel
                events={bouddhiki}
                windowSize={props.windowSize.length > 0 && props.windowSize ? props.windowSize : undefined}
                />
              </div>
            </div>
          </div>



        </div>


      </div>
    </div>

  )
}

export default Eventpage;