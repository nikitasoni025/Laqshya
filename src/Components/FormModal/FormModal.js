import React, { useContext, useEffect, useState } from 'react';
import "./formmodal.scss";
import AutoComplete from '../AutoComplete/AutoComplete';
import { FaChevronLeft, FaSeedling, FaTimes, FaTrash } from 'react-icons/fa';
import { DataContext } from '../../Context/Dataprovider';
import Loader from '../Loader/Loader';
import { API } from '../../Services/Api';
import { Toaster } from '../Toaster/Toaster';



const FormModal = (props) => {
    const { account } = useContext(DataContext);

    const initialGroupFormData = {
        groupname: "",
        members: [],
        eventname: "",
        registrationfee: "",
        status: false,
    }

    const [groupedClicked, setGroupedClicked] = useState("S1");
    const [s3FormType, setS3FormType] = useState(null);
    const [paticipants, setParticipants] = useState([]);
    const [indiFormData, setIndiFormData] = useState({});
    const [groupFormData, setGroupFormData] = useState(initialGroupFormData);
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // setIndiFormData(initialIndiFormData);
    useEffect(() => {
        const fetchUser = async () => {
            const userId = sessionStorage.getItem("isLogined");
            const response = await API.getParticipantWithId({ id: userId });
            if (response.isSuccess) {

                let { _id, fullname, email, phonenumber, institution, standard } = response.data;
                setIndiFormData({
                    id: userId || "CSIT",
                    fullname: fullname || "Anonymous",
                    email: email || "Anonymous@gmail.com",
                    phonenumber: phonenumber || "XXXXXXXXXX",
                    institution: institution || "Anonymous",
                    standard: standard || "Anonymous",
                    eventname: props.eventNameFee.eventname || "undifined",
                    eventid: props.eventNameFee.eventid,
                    registrationfee: props.eventNameFee.registrationfee || 0,
                    status: false
                });

                setGroupFormData({...initialGroupFormData,eventname:props.eventNameFee.eventname,eventid:props.eventNameFee.eventid,registrationfee:props.eventNameFee.registrationfee})

                setParticipants([response.data])

            }
        }
        fetchUser();
    }, []);


    const handleSelectPaticipants = (paticipant) => {
        const userexist = paticipants.find((user) => user._id === paticipant._id);
        const maxParticipants = props.eventNameFee.maxParticipants;
        if (!userexist && paticipants.length <= maxParticipants) {
            setParticipants([...paticipants, paticipant]);
            setGroupFormData({...groupFormData,members:paticipants});
            console.log("participants", paticipants);
        } else {
            setShowError(true);
            setErrorMessage("Participant Limit Reached");
            setTimeout(() => setShowError(false), 4000);
        }
    }
    const handleDeleteMembers = (participantid) => {
        const updatedusers = paticipants.filter((user) => user._id !== participantid);
        setParticipants(updatedusers);
        setGroupFormData({...groupFormData,members:updatedusers});
    }

    const handleGroupNameChange=(ev)=>{
        const {name,value} = ev.target;
        setGroupFormData({...groupFormData,groupname:value});
    }
    const handleMakeGroup=()=>{
        setGroupFormData({...groupFormData,members:paticipants});
        setS3FormType('group');
        setGroupedClicked('S3');
    }

    const handleGroupSubmit=async(groupformData)=>{
        setIsLoading(true)
        console.log(groupFormData);

        const response= await API.registerGroups(groupFormData);

        if(response.isSuccess){
            setIsLoading(false);
            setGroupedClicked('S1');
            setShowSuccess(true);
            setTimeout(() => {setShowSuccess(false);props.setOpenFormModal(false)}, 4000);
        }else{
            setIsLoading(false)
            setShowError(true);
            setErrorMessage(response.valerror || "Error!, Check Your Network Connection");
            setTimeout(() => {setShowError(false)}, 4000);
        }
        console.log("Group response",response);
    }

    const handleIndividalSubmit = async (formData) => {

        setIsLoading(true);

        const response = await API.registerIndividuals(formData);

        if (response.isSuccess) {
            setIsLoading(false);
            setGroupedClicked('S1');
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 4000);
        } else {
            setIsLoading(false);
            setShowError(true);
            setErrorMessage(response.valerror || "Error!, Check Your Network Connection");
            setTimeout(() => setShowError(false), 4000);
        }

    }




    return (
        <div className='formModal'>
            <div className="formModal-wrap">
                {showSuccess && <Toaster message={`Registered Successfully For ${props.eventNameFee.eventname}`} type={"success"} />}
                {showError && <Toaster message={errorMessage} type={"error"} />}
                <button onClick={() => props.setOpenFormModal(false)} className='cls-btn'><FaTimes /></button>

                <div className="form-wrap">
                    {/* first-step */}
                    {groupedClicked === "S1" ? (
                        <div className="form-step-1">
                            <h1> {props.eventNameFee.isGrouped ? "Do you want to Perform" : "You are performing"} </h1>
                            <div className="row">
                                <button onClick={() => { setS3FormType('indi'); setGroupedClicked("S3") }}>Individual</button>
                                {props.eventNameFee.isGrouped ? (
                                    <>
                                        <span>OR</span>
                                        <button onClick={() => { setS3FormType('group'); setGroupedClicked("S2") }}>Grouped</button>
                                    </>
                                ) : null}
                            </div>
                        </div>
                    ) : groupedClicked === "S2" ? (
                        // second step
                        <div className="form-step-2">
                            <h1> Group Registration </h1>
                            <div className="row">
                                <div className="input-icon-wrap">
                                    <span className='input-icon'><FaSeedling /></span>
                                    <input value={groupFormData.groupname} onChange={handleGroupNameChange} type="text" name='groupname' placeholder='Group Name' id='groupname' />
                                </div>
                            </div>
                            <AutoComplete maxParticipants={props.eventNameFee.maxParticipants} onSelect={handleSelectPaticipants} />
                            <div className="row2">
                                <div className="list-wrap">
                                    <ul>
                                        {paticipants.map((paticipant, index) => {
                                            return (

                                                <li key={index}>
                                                    <h1>{paticipant.fullname}</h1>
                                                    <button onClick={() => handleDeleteMembers(paticipant._id)}><FaTrash /></button>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="row2">
                                <div className="back-cross-btn">
                                    <button onClick={() => setGroupedClicked("S1")}><FaChevronLeft />Back</button>
                                    <button onClick={handleMakeGroup}>Make Group</button>
                                </div>
                            </div>
                        </div>
                    ) : groupedClicked === "S3" ? (
                        <div className="form-step-3">
                            <h1>Registering For</h1>
                            <h2>Event Name : {props.eventNameFee.eventname}</h2>
                            <h2>Registration Fee :{s3FormType ==='indi'? props.eventNameFee.registrationfee :(props.eventNameFee.registrationfee * paticipants.length) }&nbsp;₹</h2>
                            {s3FormType === "indi" ? <button onClick={() => handleIndividalSubmit(indiFormData)}>{isLoading ? <Loader /> : "Pay"}</button> : s3FormType === "group" ? <button onClick={() => {handleGroupSubmit(groupFormData)}}>{isLoading ? <Loader /> : "Pay"}</button> : null}

                            <button onClick={() => setGroupedClicked("S1")}><FaChevronLeft />Back</button>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default FormModal;