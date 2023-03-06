import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from "react-router-dom";
import "./gallery.scss";



const Gallery = () => {
  let gallery = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  return (
    <div className='gallery'>
      <div className="gallery-wrap">
        <div className="gallery-description">
          <h1>Our Gallery</h1>
          <p>Catch Us</p>
          <Link to={"/"} >Home</Link>
        </div>
        <div className="literal-gallery">
          <div className="gallery-container">
            {gallery.map(() => {
              return (
                <div className="gallery-item" >

                  <div className="over-lay"></div>
                  <img src="https://ik.imagekit.io/egjzyz51e/img_4_1677915173888.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1677915472669" alt="" />
                </div>

              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery