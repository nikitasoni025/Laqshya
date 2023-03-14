import React, { useState } from 'react';
import "./formmodal.scss";
import { GrGroup } from "react-icons/gr"
import { FaLayerGroup, FaSeedling, FaTrash, FaUserCheck } from 'react-icons/fa';
import AutoComplete from '../AutoComplete/AutoComplete';

const FormModal = () => {
    const isGrouped = true;
    const [groupedClicked, setGroupedClicked] = useState(false);
    const [paticipants, setParticipants] = useState([]);

    const handleSelectPaticipants = (paticipant) => {

        if (!paticipants.includes(paticipant)) {
            setParticipants([...paticipants, paticipant]);
        }

    }

    const handleSubmit = (event) => {

        

    }


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
                            <AutoComplete onSelect={handleSelectPaticipants} />
                            <div className="row">
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
                            <div className="row">
                                <button onClick={handleSubmit()}>Add</button>
                            </div>


                        </div>
                    )}

                </div>

            </div>
        </div>
    )
}

export default FormModal;