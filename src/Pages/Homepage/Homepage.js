import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import "./homepage.scss";

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