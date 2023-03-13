import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { DataContext } from '../../Context/Dataprovider';
import { API } from '../../Services/Api';
import './loginpage.scss';


const initialLoginValues={
    email:'',
    password:''
}


const Loginpage = ({setIsUserAuthenticated}) => {
    const [isEyeOpened, setIsEyeOpened] = useState(false);
    const [formData,setFormData]=useState(initialLoginValues);
    const [isLoading,setIsLoading]=useState(false)

    const {setAccount} =useContext(DataContext);

    const navigate=useNavigate();


    const handleInputChange=(ev)=>{
        const {name,value}=ev.target;

        setFormData((preval)=>{
            return{
                ...preval,
                [name]:value
            }
        })
    }

    const handleLogin= async (ev)=>{
        ev.preventDefault();

        let response= await API.userSignin(formData);

        if(response.isSuccess){
            setIsLoading(false);
            // setShowSuccess(true);
            // setTimeout(() => setShowSuccess(false), 4000);
            setFormData(initialLoginValues);
            sessionStorage.setItem('accessToken',`Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken',`Bearer ${response.data.refreshToken}`);
            setIsUserAuthenticated(true);
            await setAccount({username:response.data.data.name,email:response.data.data.email});
            navigate('/events');
        }else{
            setFormData(initialLoginValues);
            setIsLoading(false);

        }


    }


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
                        <div className="home-link">
                            <Link to={'/'}>Home</Link>
                        </div>

                    </div>
                </div>
                <div className="right-wrap">
                    <h1>SIGN IN</h1>

                    <form action="">
                        <div className="row">
                            <input onChange={handleInputChange} value={formData.email} type="email" name='email' placeholder='Email' />
                        </div>
                        <div className="row">
                            <div className="password-wrap">
                                <input onChange={handleInputChange} value={formData.password} type={isEyeOpened ? "text" : "password"} name='password' placeholder='Confirm Password' />
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