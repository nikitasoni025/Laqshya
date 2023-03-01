import React from 'react';
import "./navbar.scss";
import{ CgUserlane } from "react-icons/cg"

const Navbar = () => {
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

            
            </div>
        </div>
    </div>
  )
}

export default Navbar