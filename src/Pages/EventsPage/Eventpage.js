import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Eventpage.scss';

const Eventpage = () => {
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
                <p></p>
              </div>
            </div>
          </div>


        </div>


      </div>
    </div>

  )
}

export default Eventpage;