import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { TbArrowNarrowRight } from 'react-icons/tb';
import { RiLockPasswordLine, RiMailSendLine } from 'react-icons/ri';
import { DataContext } from '../../Context/Dataprovider';
import { API } from '../../Services/Api';
import './loginpage.scss';


const initialLoginValues = {
    email: '',
    password: ''
}


const Loginpage = ({ setIsUserAuthenticated }) => {
    const [isEyeOpened, setIsEyeOpened] = useState(false);
    const [formData, setFormData] = useState(initialLoginValues);
    const [isLoading, setIsLoading] = useState(false)

    const { setAccount } = useContext(DataContext);

    const navigate = useNavigate();


    const handleInputChange = (ev) => {
        const { name, value } = ev.target;

        setFormData((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    const handleLogin = async (ev) => {
        ev.preventDefault();

        let response = await API.userSignin(formData);

        if (response.isSuccess) {
            setIsLoading(false);
            const {id,name,email,phonenumber,institution,standard}=response.data.data;
            // setShowSuccess(true);
            // setTimeout(() => setShowSuccess(false), 4000);
            setFormData(initialLoginValues);
            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            sessionStorage.setItem('isLogined', id);
            setIsUserAuthenticated(true);
            console.log(response);
            await setAccount({id:id, username: name, email: email ,phonenumber:phonenumber,institution:institution,standard:standard});
            navigate('/events');
        } else {
            setFormData(initialLoginValues);
            setIsLoading(false);

        }


    }


    return (
        <div className='Loginpage'>
            <div className="animated-background">
                <img src={'https://ik.imagekit.io/dexo68yudb/Sphere0000.png?updatedAt=1678733368137'} alt="sphere" />
                <img src={'https://ik.imagekit.io/dexo68yudb/Sphere0000.png?updatedAt=1678733368137'} alt="sphere" />
                <img src={'https://ik.imagekit.io/dexo68yudb/Sphere0000.png?updatedAt=1678733368137'} alt="sphere" />
                <img src={'https://ik.imagekit.io/dexo68yudb/Sphere0000.png?updatedAt=1678733368137'} alt="sphere" />
            </div>
            <div className="loginpage-wrap">
                <div className="left-wrap">
                    <div className="logo">
                        <img src="https://ik.imagekit.io/egjzyz51e/IMG_20230307_200718.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678199895069" alt="" />
                    </div>
                    <div className="left-details">
                        <h1>
                            CSGI Welcomes You To Laqshya 2K23
                        </h1>
                        <h3>in Association with</h3>
                        <img src="https://ik.imagekit.io/egjzyz51e/Tech36garh_Grey_300x.png?updatedAt=1678861467885" alt="" />
                        <h3 className='divider'>Presents</h3>

                        <h3>
                            Central India's Bigest Techno-Management-Sports & Culture Fest
                        </h3>
                        <div className="home-link">
                            <Link to={'/'}>Go To Home  <TbArrowNarrowRight className='arw-icon' /></Link>
                        </div>

                    </div>
                </div>
                <div className="right-wrap">
                    <h1>SIGN IN</h1>

                    <form action="">
                        <div className="row">
                            <div className="icon-input-wrap">
                                <RiMailSendLine />
                                <input onChange={handleInputChange} value={formData.email} type="email" name='email' placeholder='Email' />

                            </div>
                        </div>
                        <div className="row">
                            <div className="password-wrap">
                                <RiLockPasswordLine />
                                <input onChange={handleInputChange} value={formData.password} type={isEyeOpened ? "text" : "password"} name='password' placeholder='Password' />
                                <button onClick={(e) => { e.preventDefault(); setIsEyeOpened(!isEyeOpened) }}>{isEyeOpened ? <FaEyeSlash /> : <FaEye />}</button>
                            </div>
                        </div>
                        <div className="row">
                            <button onClick={handleLogin} className='register-btn'>Choose Events</button>
                        </div>
                    </form>
                    <p>Don't Have An Account ? <Link to={"/register"}>Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Loginpage;