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
                <li>Home</li>
                <li>Events</li>
                <li>Gallery</li>
                <li>Contact</li>
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