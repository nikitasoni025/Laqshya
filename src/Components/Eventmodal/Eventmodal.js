import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { eventDetails } from '../../Constants/OurConst';
import './eventmodal.scss';

const Eventmodal = (props) => {
    const [infoType, setInfoType] = useState('rul');
    return (
        <div className='Eventmodal'>
            <div className="event-modal-wrap">
                <div className="close-mod-btn"><button onClick={() => props.openModal(false)}><FaTimes /></button></div>
                <div className="info-nav-button">
                    <button className='nav-btn' onClick={() => setInfoType('rul')}>RULES</button>
                    <button className='nav-btn' onClick={() => setInfoType('jud')}>JUDGEMENT CRITERA</button>
                    {eventDetails[props.ourIndex].arena ? <button className='nav-btn' onClick={() => setInfoType('arn')}>ARENA</button> : null}

                </div>
                <div className="information">
                    {infoType === 'rul' ? (
                        <div className="rule-wrap">
                            <h1>RULES</h1>
                            {eventDetails[props.ourIndex].rules}
                           

                        </div>
                    ) : infoType === 'jud' ? (
                        <div className="judgement-wrap">
                            <h1>JUDGEMENT CRITERIA</h1>
                            <ul>
                                {eventDetails[props.ourIndex].judgement.map((judgement, index) => {
                                    return (
                                        <li key={index}>{judgement}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    ) : infoType === 'arn' ? (
                        <div className="arena-wrap">
                            <h1>ARENA</h1>
                            <div className="image-arena">
                                <img src={eventDetails[props.ourIndex].arena ? eventDetails[props.ourIndex].arena : ''} alt={'arena'} />
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default Eventmodal;