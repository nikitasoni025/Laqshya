import React, { useEffect, useState } from 'react';
import "./navbar.scss";
import { CgUserlane } from "react-icons/cg";
import { GrTechnology } from "react-icons/gr";
import { FaAudible, FaBars, FaDiceSix, FaTimes, FaVolumeMute, FaVolumeUp } from "react-icons/fa"
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  // MAKING STATE (states are nothing but its variable ; we can sture dunamic data to be stored)
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);
  const [isUserLogined, setIsUserLogined] = useState(false);


  useEffect(() => {
    setAudioPlayed(true);
    document.getElementById('ouraudio').play();
    const isLogined = sessionStorage.getItem('isLogined');
    if (isLogined) {
      setIsUserLogined(true);
    } else {
      setIsUserLogined(false);
    }
  }, [])





  window.onscroll = () => {
    setIsScrolled(window.pageYOffset > 80 ? true : false);
    return () => (window.onscroll = null);
  }

  const playSound = (ev) => {
    setAudioPlayed(!audioPlayed);
    if (audioPlayed) {
      document.getElementById('ouraudio').play();
    } else {
      document.getElementById('ouraudio').pause();
    }
  }







  return (
    <div className={isScrolled ? 'navbar scroll-effect' : 'navbar'}>
      <div className="main-navbar">
        <div className="left-navbar">
          <div className="logo"><h1>LAQSHYA</h1></div>
          <button className='audio-btn' onClick={(e) => playSound(e)}>{audioPlayed ? <FaVolumeMute /> : <FaVolumeUp />}</button>
          <ul className="menu">
            <li><a href="/">HOME</a></li>
            <li><a href="/events">EVENTS</a></li>
            <li><a href="/gallery">GALLERY</a></li>
            <li><a href="/gallery">BOARD</a></li>
            <li><a href="/contact">CONTACT</a></li>
          </ul>


        </div>
        <div className="right-navbar">
          {isUserLogined ? (
            <Link to={'/'}><span>My Events<FaDiceSix/></span></Link>
          ) : (
            <Link to={'/signin'}><span>Login<CgUserlane /></span></Link>

          )}
          <button onClick={() => { setIsSideBarOpened(!isSideBarOpened) }} className='side-bar-btn'>
            <FaBars />
          </button>


        </div>
      </div >

      {/* side bar */}

      < div className={isSideBarOpened ? "side-bar opened" : "side-bar"} >
        <ul className="side-menu">
          <li><button onClick={() => { setIsSideBarOpened(false) }} className='side-bar-btn'><FaTimes /></button></li>
          <li><Link className={isSideBarOpened ? "anim1" : ""} to={"/"}>HOME</Link></li>
          <li><Link className={isSideBarOpened ? "anim2" : ""} to={"/events"}>EVENTS</Link></li>
          <li><Link className={isSideBarOpened ? "anim3" : ""} to={"/gallery"}>GALLERY</Link></li>
          <li><Link className={isSideBarOpened ? "anim4" : ""} to={"/contact"}>CONTACT</Link></li>
          <li><Link className={isSideBarOpened ? "anim4" : ""} to={"/contact"}>BOARDS</Link></li>
          <li><Link className={isSideBarOpened ? "anim5" : ""} to="/signin">LOGIN</Link></li>

        </ul>
      </div >

    </div >
  )
}

export default Navbar;