import React from 'react';
import { Link } from 'react-router-dom';
import './loginpage.scss';

const Loginpage = () => {
  return (
    <div className='Loginpage'>
        <div className="loginpage-wrap">
        <div className="left-wrap">
                    <div className="logo">
                    <img src="https://ik.imagekit.io/egjzyz51e/IMG_20230307_200718.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678199895069" alt="" />
                    </div>
                    <div className="left-details">
                        <h1>
                            CSGI Welcomes You
                        </h1>
                        <h1>
                            To Laqshya 2K23.

                        </h1>
                        <h3>
                           Central India's Bigest Techno-Management-Sports & Culture Fest
                        </h3>

                    </div>
                </div>
                <div className="right-wrap">
                    <h1>SIGN IN</h1>

                    <form action="">
                        <div className="row">
                            <input type="email" name='email' placeholder='Email' />
                        </div>
                        <div className="row">
                            <input type="password" name='password' placeholder='Password' />
                        </div>
                        <div className="row">
                            <button className='register-btn'>Choose Events</button>
                        </div>
                    </form>
                    <p>Already Have An Account ? <Link>Sign In</Link></p>
                </div>
        </div>
    </div>
  )
}

export default Loginpage;