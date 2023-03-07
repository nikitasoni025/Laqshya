import React from 'react';
import "./registerpage.scss";

const RegisterPage = () => {
    return (
        <div className='register-page'>
            <div className="register-wrap">
                <div className="left-wrap">
                    <div className="logo">
                    <img src="https://ik.imagekit.io/egjzyz51e/laqshya_1__2_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678109555157" alt="" />
                    </div>
                    <div className="left-details">
                        <h1>
                            CSGI Welcomes You
                        </h1>
                        <h1>
                            To Laqshya 2K23.

                        </h1>
                        <p>
                            ducjhdvmsascsoichvivj dncacinhaivnh ivihv NXKJ  BSBQO       HQO AMBO
                        </p>

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
                            <button className='register-btn'>Choose Events</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage