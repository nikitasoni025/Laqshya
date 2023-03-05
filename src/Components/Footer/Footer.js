import React from 'react';
import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "./footer.scss";


const Footer = () => {
  return (
    <div className='main-footer'>
      <div className="footer-wrap">
        <div className="coloumn-wrap">
          <div className="col">

            <img src="https://ik.imagekit.io/egjzyz51e/Picsart_23-03-05_13-29-47-340.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678003297911" alt="" />
          </div>
          <div className="col">
            <ul className="social-link">
              <li>Social</li>
              <li><Link>Instagram<FaInstagram /></Link></li>
              <li><Link>Facebook<FaFacebook /></Link></li>
              <li><Link>Youtube<FaYoutube /></Link></li>
            </ul>
          </div>
          <div className="col">
            <div className="register-link">
              <Link>Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer