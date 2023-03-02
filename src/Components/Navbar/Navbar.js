import React, { useState } from 'react';
import "./navbar.scss";
import{ CgUserlane } from "react-icons/cg"
import{ FaBars } from "react-icons/fa"

const Navbar = () => {
  // MAKING STATE (states are nothing but its variable ; we can sture dunamic data to be stored)
  const [isSideBarOpened, setIsSideBarOpened]= useState(false);
  return (
    <div className='navbar'>
        <div className="main-navbar">
            <div className="left-navbar">
              <div className="logo"><h1>LAQSHYA</h1></div>
              <ul className="menu">
                <li><a href="/">HOME</a></li>
                <li><a href="/">Events</a></li>
                <li><a href="/">Gallery</a></li>
                <li><a href="/">Contact</a></li>
              </ul>

              
            </div>
            <div className="right-navbar">
              <a href="#">Register <CgUserlane/></a>
              <button onClick={} className='side-bar-btn'>
                <FaBars/>
              </button>

            
            </div>
        </div>
    </div>
  )
}

export default Navbar