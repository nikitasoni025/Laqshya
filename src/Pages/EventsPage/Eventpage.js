import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Eventpage.scss';

const Eventpage = () => {
  return (
    <div className='Eventpage'>
        <div className="eventpage-wrap">
          {/* Navbar  */}
          <Navbar/>


          <div className="event-banner">

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
        </div>
    </div>
  )
}

export default Eventpage;