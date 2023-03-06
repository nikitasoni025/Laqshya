import React, { useState } from 'react';
import { MdOutlineZoomIn, MdZoomOutMap } from 'react-icons/md';
import { Link } from "react-router-dom";
import "./gallery.scss";



const Gallery = () => {
  let gallery = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  const [imgSrc, setImgSrc] = useState('');
  const [displayZoom, setDisplayZoom] = useState(false);

  const handleZoomOut = (src) => {
    console.log("clicked", src);
    setImgSrc(src);
    setDisplayZoom(true);

  }
  return (
    <>
      {
        displayZoom ? (
          <div className="zoom-out-wrap" >
            <div className="btns">
              <button onClick={()=>setDisplayZoom(false)}><MdOutlineZoomIn/></button>
            </div>
            <div className="img-display">
              <img src={imgSrc} alt="zoomed out" />
            </div>
          </div >

        ) : (

          <div className='gallery'>
            {/* Gallery wrap */}
            <div className="gallery-wrap">
              <div className="gallery-description">
                <h1>Our Gallery</h1>
                <p> Kaleidoscope Of Memories</p>
                <Link to={"/"} >Home</Link>
              </div>
              <div className="literal-gallery">
                <div className="gallery-container">
                  {gallery.map((items, index) => {
                    return (
                      <div className="gallery-item" key={index}>

                        <img src="https://ik.imagekit.io/egjzyz51e/img_4_1677915173888.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1677915472669" alt="" />
                        <div className="over-lay">
                          <button onClick={() => handleZoomOut("https://ik.imagekit.io/egjzyz51e/img_4_1677915173888.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1677915472669")} ><MdZoomOutMap /></button>
                        </div>
                      </div>

                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Gallery;