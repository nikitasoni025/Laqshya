import React, { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import "./registerpage.scss";
import { API } from '../../Services/Api';
import Loader from '../../Components/Loader/Loader';
import { Toaster } from '../../Components/Toaster/Toaster';



const initialValue = {
    "fullname": "",
    "email": "",
    "phonenumber": "",
    "institution": "",
    "standard": "",
    "password": ""

}

const RegisterPage = () => {
    const [formData, setFormData] = useState(initialValue)
    const [isEyeOpened, setIsEyeOpened] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    

    const navigate = useNavigate();

    useEffect(() => {
        const handleBackButton = () => {
            navigate('/');
        };

        window.addEventListener('popstate', handleBackButton);
        window.history.pushState(null, '', window.location.href);

        return () => {
            window.removeEventListener('popstate', handleBackButton);
        };
    }, [navigate]);



    const handleInputChange = async (e) => {

        const { name, value } = e.target;
        setFormData((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })

        console.log(formData);


    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        setIsLoading(true);

        let response = await API.registerParticipants(formData);
        console.log(response);
        if (response.isSuccess) {

            setFormData(initialValue)
            setIsLoading(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 4000);

            // alert("You have registered successfully");


        }
        else {
            // alert("Your Data is not submitted");
            setIsLoading(false);
            setShowError(true);
            setErrorMessage(response.errormsg || "Error!");
            setTimeout(() => setShowError(false),4000);

        }




    }

    return (
        <div className='register-page'>
            {/* toaster */}

            {showSuccess && <Toaster message={"Registered Successfully"} type={"success"} />}
            {showError && <Toaster message={errorMessage} type={"error"} />}

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
                        <div className="home-link">
                            <Link to={'/'}>Home</Link>
                        </div>

                    </div>
                </div>
                <div className="right-wrap">
                    <h1>REGISTRATION</h1>

                    <form action="">
                        <div className="row">
                            <input onChange={handleInputChange} type="text" name='fullname' required placeholder='Full Name' />
                        </div>
                        <div className="row">
                            <input onChange={handleInputChange} type="email" name='email' placeholder='Email' />

                        </div>
                        <div className="row">
                            <input onChange={handleInputChange} type="tel" name='phonenumber' placeholder='Phone Number' />

                        </div>
                        <div className="row">
                            <div className="custom-input">
                                <input onChange={handleInputChange} type="text" name='institution' placeholder='Institution' />

                            </div>
                        </div>
                        <div className="row">
                            <input onChange={handleInputChange} type="text" name='standard' placeholder='Standard' />

                        </div>
                        <div className="row">
                            <div className="password-wrap">
                                <input onChange={handleInputChange} type={isEyeOpened ? "text" : "password"} name='password' placeholder='Password' />

                                <button onClick={(e) => { e.preventDefault(); setIsEyeOpened(!isEyeOpened) }}>{isEyeOpened ? <FaEyeSlash /> : <FaEye />}</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="password-wrap">
                                <input onChange={handleInputChange} type={isEyeOpened ? "text" : "password"} name='password' placeholder='Confirm Password' />

                                <button onClick={(e) => { e.preventDefault(); setIsEyeOpened(!isEyeOpened) }}>{isEyeOpened ? <FaEyeSlash /> : <FaEye />}</button>
                            </div>
                        </div>
                        <div className="row">
                            <button onClick={handleSubmit} className='register-btn'>{isLoading ? <Loader /> : "Register"}</button>
                        </div>


                    </form>
                    <p>Already Have An Account ? <Link to={'/signin'}>Sign In</Link></p>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;