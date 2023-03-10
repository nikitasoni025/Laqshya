import React, { useState } from 'react';
import { FaAddressCard, FaBars } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import "./dashboard.scss";
import { IoAnalyticsOutline } from "react-icons/io5";
import { RiUserStarLine } from "react-icons/ri";
import { CgFeed } from "react-icons/cg";
import Participants from '../Paticipants/Participants';


const Dashboard = () => {
    const [isSideBarOpened, setIsSideBarOpened] = useState(false)
    const{dashid}=useParams();


    return (
        <div className='dashboard'>
            <div className="dashboard-wrap">



                {/* CONTENT SECTION */}

                <div className="content-section">
                    <div className="content-wrap">
                        {/* LEFT SIDE */}

                        <div className={isSideBarOpened ? "side-bar opened" : "side-bar"}>
                            <button onClick={(e) => { setIsSideBarOpened(!isSideBarOpened) }}><FaBars /></button>
                            <ul className="side-menu">
                                <li><Link>{isSideBarOpened ? "OverView" : <IoAnalyticsOutline />}</Link></li>
                                <li><Link>{isSideBarOpened ? "Participants" : <RiUserStarLine />}</Link></li>
                                <li><Link>{isSideBarOpened ? "Posts" : <CgFeed />}</Link></li>
                                <li><Link>{isSideBarOpened ? "Posts" : <FaAddressCard />}</Link></li>
                                <li><Link>{isSideBarOpened ? "Posts" : <FaAddressCard />}</Link></li>
                            </ul>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="main-content">
                            {/* HEAD BAR */}
                            <div className="head-bar">
                                <div className="head-bar-left">

                                    <div className="logo">
                                        <h1>LAQSHYA</h1>


                                        {/* <img src="https://ik.imagekit.io/egjzyz51e/IMG_20230307_200718.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678199895069" alt="" /> */}
                                    </div>
                                    <div className="greet">Welcome Nikita Soni</div>
                                </div>
                                <div className="head-bar-right">
                                    <button className='adm-main-btn'>Logout</button>
                                </div>
                            </div>
                            {/* RIGHT SIDE SECTION START */}

                            <div className="main-content">
                                <div className="main-content-wrap">
                                    {dashid==="overview"?(
                                        <>overview</>
                                    ):dashid==="participants"?(
                                        <Participants/>
                                    ):null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard