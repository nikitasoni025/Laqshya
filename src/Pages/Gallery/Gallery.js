import React, { useState } from 'react';
import { MdOutlineZoomIn, MdZoomOutMap } from 'react-icons/md';
import { Link } from "react-router-dom";
import { galleryData } from '../../Constants/OurConst';
import "./gallery.scss";



const Gallery = () => {
 

  const [imgSrc, setImgSrc] = useState('');
  const [displayZoom, setDisplayZoom] = useState(false);

  const handleZoomOut = (src) => {
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
               <div className="gallery-size">
               <div className="home-btn-wrap">
                <Link to={"/"} >Home</Link>
                </div>
                <div className="gallery-des-content">
                <h1>Our Gallery</h1>
                <p> Kaleidoscope Of Memories</p>
                  </div>
                </div>                
              
              </div>
              <div className="literal-gallery">
                <div className="gallery-container">
                  {galleryData.map((items, index) => {
                    return (
                      <div className="gallery-item" key={index}>

                        {items.type==='img' ? <img src={items.link} alt="" /> : <video controls muted autoPlay src={items.link}></video>}

                        
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