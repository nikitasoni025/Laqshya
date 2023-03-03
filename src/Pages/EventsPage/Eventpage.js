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
            <div className='event-shaurya'>
              <h1> <span className='diff-font'>Shaurya</span> </h1>
              <h2>ROBOTICS</h2>
              <div className='shaurya-details'>
                <p>Shaurya is an exciting robotic event that brings together various competitions, including xxcelerate, robo soccer league, robo go-karting, robo sumo, deep blue, and robo fire fighting. Participants showcase their innovative designs and programming skills as they compete in these challenging and thrilling events. Whether you're a robotics enthusiast or just looking for some high-tech entertainment, Shaurya is an event that's sure to impress.</p>
              </div>
              <div className='shaurya-events'>
                <Eventcarousel
                events={Shauryas}
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