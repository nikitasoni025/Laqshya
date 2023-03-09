import React from 'react';
import { Link } from 'react-router-dom';
import "./registerpage.scss";

const RegisterPage = () => {
    return (
        <div className='register-page'>
            <div className="register-wrap">
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
                    <h1>REGISTRATION</h1>

                    <form action="">
                        <div className="row">
                            <input type="text" name='fullname' placeholder='Full Name' />
                        </div>
                        <div className="row">
                            <input type="email" name='email' placeholder='Email' />
                        </div>
                        <div className="row">
                            <input type="tel" name='phone-number' placeholder='Phone Number' />
                        </div>
                        <div className="row">
                            <input type="text" name='institution' placeholder='Institution' />
                        </div>
                        <div className="row">
                            <input type="text" name='standard' placeholder='Standard' />
                        </div>
                        <div className="row">
                            <div className="password-wrap">
                                <input type="password" name='password' placeholder='Password' />
                                <button></button>
                            </div>
                        </div>
                        <div className="row">
                            <button className='register-btn'>Register</button>
                        </div>
                    </form>
                    <p>Already Have An Account ? <Link to={'/signin'}>Sign In</Link></p>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage