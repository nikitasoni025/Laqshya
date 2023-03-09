import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './contactPage.scss'

const ConatctPage = () => {
  return (
    <div className='contact-page'>
      <div className='contact-wrap'>
        <Navbar/>
        <div className='greet'>
          <h1> We'd like to hear from you!</h1>
        </div>
        <div className='contact-detail'>
          <div className='address'>
            <h3>Address:Shivaji nagar Balod road Durg</h3>
            <h3>chhattisgarh - 491001</h3>
            <h3>Contact no : 9669978555 , 7999507973</h3>
          </div>
          <div className='social-media'>

          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ConatctPage