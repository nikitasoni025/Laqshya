import React, { useState } from 'react';
import "./formmodal.scss";
import { GrGroup } from "react-icons/gr"
import { FaLayerGroup, FaSeedling, FaUserCheck } from 'react-icons/fa';

const FormModal = () => {
    const isGrouped = true;
    const [groupedClicked, setGroupedClicked] = useState(false);
    return (
        <div className='formModal'>
            <div className="formModal-wrap">

                <div className="form-wrap">
                    {/* first-step */}
                    {groupedClicked ? (
                        <div className="form-step-1">
                            <h1>Do you want to Perform </h1>
                            <div className="row">
                                <button>Individual</button>
                                <span>OR</span>
                                <button>Grouped</button>
                            </div>
                        </div>
                    ) : (
                        // second step
                        <div className="form-step-2">
                            <div className="row">
                                <div className="input-icon-wrap">
                                    <span className='input-icon'><FaSeedling /></span>
                                    <input type="text" name='groupname' placeholder='Group Name' id='groupname' />
                                </div>


                            </div>

                            <div className="row">
                                <div className="input-icon-wrap">
                                    <FaUserCheck />
                                    <input type="text" placeholder='Search Participants Name' />
                                    <button>Add</button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>

            </div>
        </div>
    )
}

export default FormModal;