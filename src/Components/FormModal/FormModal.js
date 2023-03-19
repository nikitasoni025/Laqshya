import React, { useContext, useEffect, useState } from 'react';
import "./formmodal.scss";
import AutoComplete from '../AutoComplete/AutoComplete';
import { FaChevronLeft, FaSeedling, FaTimes, FaTrash } from 'react-icons/fa';
import { DataContext } from '../../Context/Dataprovider';
import Loader from '../Loader/Loader';
import { API } from '../../Services/Api';



const FormModal = (props) => {
    const { account } = useContext(DataContext);


    const initialIndiFormData = {

    }

    const initialGroupFormData = {
        groupname: "",
        members: [
            {
                fullname: "",
                email: "",
                phonenumber: "",
                institution: "",
                standard: "",
            }
        ],
        eventname: "",
        registrationfee: "",
        status: false,
    }

    const [groupedClicked, setGroupedClicked] = useState("S1");
    const [s3FormType, setS3FormType] = useState(null);
    const [paticipants, setParticipants] = useState([]);
    const [indiFormData, setIndiFormData] = useState();
    const [isLoading, setIsLoading] = useState(false);

    // setIndiFormData(initialIndiFormData);
    useEffect(() => {
        const fetchUser = async () => {
            const userId = sessionStorage.getItem("isLogined");
            const response = await API.getParticipantWithId({ id: userId });
            console.log( "from Modal",userId,response);
            if (response.isSuccess) {

                let {_id,fullname,email,phonenumber,institution,standard} =response.data;
                setIndiFormData({
                    id: userId || "CSIT",
                    fullname: fullname|| "Anonymous",
                    email: email || "Anonymous@gmail.com",
                    phonenumber: phonenumber || "XXXXXXXXXX",
                    institution: institution || "Anonymous",
                    standard: standard || "Anonymous",
                    eventname: props.eventNameFee.eventname || "undifined",
                    eventid: props.eventNameFee.eventid,
                    registrationfee: props.eventNameFee.registrationfee || 0,
                    status: false
                })
            }
        }
        fetchUser();
    }, []);


    const handleSelectPaticipants = (paticipant) => {
        const userexist = paticipants.find((user) => user._id === paticipant._id);
        if (!userexist) {
            setParticipants([...paticipants, paticipant]);
        }
    }

    const handleSubmit = (event) => { };

    const handleIndividalSubmit = async (formData) => {

        console.log("mm", formData);
    }




    return (
        <div className='formModal'>
            <div className="formModal-wrap">
                <button onClick={() => props.setOpenFormModal(false)} className='cls-btn'><FaTimes /></button>

                <div className="form-wrap">
                    {/* first-step */}
                    {groupedClicked === "S1" ? (
                        <div className="form-step-1">
                            <h1> {props.eventNameFee.isGrouped ? "Do you want to Perform" : "You are performing"} </h1>
                            <div className="row">
                                <button onClick={() => setGroupedClicked("S3")}>Individual</button>
                                {props.eventNameFee.isGrouped ? (
                                    <>
                                        <span>OR</span>
                                        <button onClick={() => setGroupedClicked("S2")}>Grouped</button>
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
                                    <button onClick={() => setGroupedClicked("S1")}><FaChevronLeft />Back</button>
                                    <button onClick={handleSubmit()}>Make Group</button>
                                </div>
                            </div>
                        </div>
                    ) : groupedClicked === "S3" ? (
                        <div className="form-step-3">
                            <h1>Registering For</h1>
                            <h2>Event Name : {props.eventNameFee.eventname}</h2>
                            <h2>Registration Fee :{props.eventNameFee.registrationfee}&nbsp;₹</h2>
                            {s3FormType === "indi" ? <button onClick={() => handleIndividalSubmit(indiFormData)}>{isLoading ? <Loader /> : "Pay"}</button> : s3FormType === "group" ? <button onClick={() => { }}>{isLoading ? <Loader /> : "Pay"}</button> : null}

                            <button onClick={() => setGroupedClicked("S1")}><FaChevronLeft />Back</button>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default FormModal;