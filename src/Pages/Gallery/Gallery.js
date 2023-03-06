import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from "react-router-dom";
import "./gallery.scss";



const Gallery = () => {
  return (
    <div className='gallery'>
        <div className="gallery-wrap">
            <div className="gallery-description">
                <h1>Our Gallery</h1>
                <p>Catch Us</p>
                <Link to={"/"} >Home</Link>
            </div>
        </div>
    </div>
  )
}

export default Gallery