import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import "./homepage.scss";

let smokeimg="https://ik.imagekit.io/dexo68yudb/image.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677697561319";

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className="wrap-home">

        {/* Navbar */}

        <Navbar />
        <div className="section">
          <div className="wrap-section">

            {/* header section */}

            <div className="header">
              <div className="overlay">
              </div>

              <img className='headerfade-lft' src={smokeimg} alt="smokeimg" />
              <img className='headerfade-right' src={smokeimg} alt="smokeimg" />
            </div>

            {/* sections 1 start here */}

            <div className="section-1">
              
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage