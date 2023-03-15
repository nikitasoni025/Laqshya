import React, { useState } from 'react';
import "./formmodal.scss";
import AutoComplete from '../AutoComplete/AutoComplete';
import { FaBackward, FaChevronCircleLeft, FaChevronLeft, FaSeedling, FaTimes, FaTrash } from 'react-icons/fa';

const FormModal = () => {
    const isGrouped = true;
    const [groupedClicked, setGroupedClicked] = useState(true);
    const [paticipants, setParticipants] = useState([]);

    const handleSelectPaticipants = (paticipant) => {

        const userexist = paticipants.find((user) => user._id === paticipant._id);


        if (!userexist) {
            setParticipants([...paticipants, paticipant]);
        }

    }

    const handleSubmit = (event) => {



    }


    return (
        <div className='formModal'>
            <div className="formModal-wrap">
                <button className='cls-btn'><FaTimes /></button>

                <div className="form-wrap">
                    {/* first-step */}
                    {groupedClicked ? (
                        <div className="form-step-1">

                            <h1> Do you want to Perform </h1>
                            <div className="row">
                                <button>Individual</button>
                                <span>OR</span>
                                <button onClick={() => setGroupedClicked(false)}>Grouped</button>
                            </div>
                        </div>
                    ) : (
                        // second step
                        <div className="form-step-2">
                            <h1> Group Registration </h1>
                            <div className="row">
                                <div className="input-icon-wrap">
                                    <span className='input-icon'><FaSeedling /></span>
                                    <input type="text" name='groupname' placeholder='Group Name' id='groupname' />
                                </div>



                            </div>
                            <AutoComplete onSelect={handleSelectPaticipants} />
                            <div className="row2">
                                <div className="list-wrap">
                                    <ul>
                                        {paticipants.map((paticipant, index) => {
                                            return (

                                                <li key={index}>
                                                    <h1>{paticipant.fullname}</h1>
                                                    <button><FaTrash /></button>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="row2">
                                <div className="back-cross-btn">
                                    <button onClick={()=> setGroupedClicked(true)}><FaChevronLeft />Back</button>
                                    <button onClick={handleSubmit()}>Make Group</button>
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