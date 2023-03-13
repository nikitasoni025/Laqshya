import React, { useState } from 'react';
import "./navbar.scss";
import { CgUserlane } from "react-icons/cg"
import { FaAudible, FaBars, FaTimes, FaVolumeMute, FaVolumeUp } from "react-icons/fa"
import { Link } from 'react-router-dom';

const Navbar = () => {
  // MAKING STATE (states are nothing but its variable ; we can sture dunamic data to be stored)
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);


  window.onscroll = () => {
    setIsScrolled(window.pageYOffset > 80 ? true : false);
    return () => (window.onscroll = null);
  }

  const playSound=(ev)=>{
    setAudioPlayed(!audioPlayed);
    if(audioPlayed){
      document.getElementById('ouraudio').play();
    }else{
      document.getElementById('ouraudio').pause();
    }
  }

  
  




  return (
    <div className={isScrolled ? 'navbar scroll-effect' : 'navbar'}>
      <div className="main-navbar">
        <div className="left-navbar">
          <div className="logo"><h1>LAQSHYA</h1></div>
          <button className='audio-btn' onClick={(e)=>playSound(e)}>{audioPlayed ? <FaVolumeMute/> : <FaVolumeUp /> }</button>
          <ul className="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/gallery">Leader Board</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>


        </div>
        <div className="right-navbar">
          <Link to={'/signin'}><span>Login <CgUserlane /></span></Link>
          <button onClick={() => { setIsSideBarOpened(!isSideBarOpened) }} className='side-bar-btn'>
            <FaBars />
          </button>


        </div>
      </div>

      {/* side bar */}

      <div className={isSideBarOpened ? "side-bar opened" : "side-bar"}>
        <ul className="side-menu">
          <li><button onClick={() => { setIsSideBarOpened(false) }} className='side-bar-btn'><FaTimes /></button></li>
          <li><Link className={isSideBarOpened ? "anim1" : ""} to={"/"}>Home</Link></li>
          <li><Link className={isSideBarOpened ? "anim2" : ""} to={"/events"}>Events</Link></li>
          <li><Link className={isSideBarOpened ? "anim3" : ""} to={"/gallery"}>Gallery</Link></li>
          <li><Link className={isSideBarOpened ? "anim4" : ""} to={"/contact"}>Contact</Link></li>
          <li><Link className={isSideBarOpened ? "anim5" : ""} to="/signin">Sign In</Link></li>

        </ul>
      </div>

    </div>
  )
}

export default Navbar;