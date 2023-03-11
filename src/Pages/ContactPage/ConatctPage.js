import React from 'react';
import { FaRegAddressCard } from 'react-icons/fa';
import Navbar from '../../Components/Navbar/Navbar';
import './contactPage.scss'

const ConatctPage = () => {
  return (
    <div className='contact-page'>
      <div className='contact-wrap'>
        <Navbar />
        <div className='contact-banner'>

          <div className='greet'>
            <h1> We'd like to hear from you!</h1>
          </div>
          <div className='contact-detail'>
            <div className='address'>
              <div className='address-card'>
                <FaRegAddressCard className='con-icon' />
                <h3>Address:Shivaji nagar Balod road Durg</h3>
                <h3>chhattisgarh - 491001</h3>
                <h3>Contact no : 9669978555 , 7999507973</h3>
              </div>
            </div>
            <div className='social-media'>
              <div className="social-card">
                <a href=""> Facebook</a>
                <a href="">Instagram</a>
                <a href="">youtube</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ConatctPage