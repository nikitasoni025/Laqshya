import React, { useState } from 'react';
import { FaAddressCard, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./dashboard.scss";


const Dashboard = () => {
    const [isSideBarOpened, setIsSideBarOpened] = useState(false)

    return (
        <div className='dashboard'>
            <div className="dashboard-wrap">



                {/* CONTENT SECTION */}

                <div className="content-section">
                    <div className="content-wrap">

                        <div className={isSideBarOpened ? "side-bar opened" : "side-bar"}>
                            <button onClick={(e) => { setIsSideBarOpened(!isSideBarOpened) }}><FaBars /></button>
                            <ul className="side-menu">
                                <li><Link>{isSideBarOpened ? "DashBoard" : <FaAddressCard />}</Link></li>
                                <li><Link>{isSideBarOpened ? "Participants" : <FaAddressCard />}</Link></li>
                                <li><Link>{isSideBarOpened ? "Posts" : <FaAddressCard />}</Link></li>
                                <li><Link>{isSideBarOpened ? "Posts" : <FaAddressCard />}</Link></li>
                                <li><Link>{isSideBarOpened ? "Posts" : <FaAddressCard />}</Link></li>
                            </ul>
                        </div>
                        <div className="main-content">
                            <div className="head-bar">

                                <div className="head-bar-left">

                                    <div className="logo">

                                        <img src="https://ik.imagekit.io/egjzyz51e/IMG_20230307_200718.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678199895069" alt="" />
                                    </div>
                                    <div className="greet">Welcome Nikita Soni</div>
                                </div>

                                <div className="head-bar-right">
                                    <button>Logout</button>
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