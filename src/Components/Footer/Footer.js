import React from 'react';
import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "./footer.scss";


const Footer = (props) => {
  return (
    <div className='main-footer'>
      <div className="footer-wrap">
        <div className="coloumn-wrap">
          <div className="col">
            <div className="wdth-wrap">
              <img src="https://ik.imagekit.io/egjzyz51e/IMG_20230307_200718.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678199895069" alt="" />
              <p>Copyright © CSIT 2023<br />Techno Management Sports & Cultural Fest</p>
            </div>
          </div>
          <div className="col">
            <ul className="social-link">
              {props.windowSize[0] <= 990 ? null : <li>Social</li>}
              <li><Link>{props.windowSize[0] <= 990 ? <FaInstagram color='#ff2bae' /> : <>Instagram &nbsp; <FaInstagram /></>}</Link></li>
              <li><Link>{props.windowSize[0] <= 990 ? <FaFacebook /> : <>Facebook &nbsp;  <FaFacebook /></>}</Link></li>
              <li><Link>{props.windowSize[0] <= 990 ? <FaYoutube /> : <>Youtube &nbsp; <FaYoutube /></>}</Link></li>
            </ul>
          </div>
          <div className="col">
            <div className="register-link">
              <h4>Click Here To Register</h4>
              <Link>Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;