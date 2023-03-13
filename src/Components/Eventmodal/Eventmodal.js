import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { eventDetails } from '../../Constants/OurConst';
import './eventmodal.scss';

const Eventmodal = (props) => {
    console.log(props.ourIndex);
    return (
        <div className='Eventmodal'>
            <div className="event-modal-wrap">
                <div className="close-mod-btn"><button onClick={()=>props.setIsModalOpened(false)}><FaTimes /></button></div>
                <div className="introduction">
                    <h1 className='cust-heading'>{eventDetails[props.ourIndex].title}</h1>
                    <p>{eventDetails[props.ourIndex].intro}</p>

                </div>
                <div className="basic-info">
                    <h1 className='cust-heading'>Basic Information</h1>
                    <div className="rules">
                        <h2>Rules :</h2>
                        <ul>
                            {eventDetails[props.ourIndex].rules.map((rule, index) => {
                                return (
                                    <li key={index}>{rule}</li>
                                )

                            })}
                        </ul>


                    </div>
                    <div className="round-details">
                        <h2>Round Details :</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, reprehenderit!</p>
                    </div>
                    <div className="fees-details">
                        <h2>Registration Details :</h2>
                        <h3>Registration Fees (Individual) : {eventDetails[props.ourIndex].registrationfee} /-</h3>

                    </div>
                    <div className="incharge">
                        {eventDetails[props.ourIndex].eventIncharges.map((incharge, index) => {
                            return (
                                <div key={index}>{incharge.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{incharge.contactno}</div>
                            )

                        })}
                    </div>
                    <div className="manager-details">
                        {eventDetails[props.ourIndex].eventManagers.map((managers, index) => {
                            return (
                                <div>{managers.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{managers.contactno}</div>
                            )

                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eventmodal;