import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { eventDetails } from '../../Constants/OurConst';
import './eventmodal.scss';
import { playclicksound } from '../../Utils/commonutil';

const Eventmodal = (props) => {
    const [infoType, setInfoType] = useState('rul');
    return (
        <div className='Eventmodal'>
            <div className="event-modal-wrap">
                <div className="close-mod-btn"><button onClick={() => { props.openModal(false); playclicksound(); }}><FaTimes /></button></div>
                <div className="info-nav-button">
                    <button className='nav-btn' onClick={() => { setInfoType('rul'); playclicksound() }}>RULES</button>
                    <button className='nav-btn' onClick={() => { setInfoType('jud'); playclicksound() }}>JUDGEMENT CRITERA</button>
                    {eventDetails[props.ourIndex].arena ? <button className='nav-btn' onClick={() => { setInfoType('arn'); playclicksound() }}>ARENA</button> : null}

                </div>
                <div className="information">
                    {infoType === 'rul' ? (
                        <div className="rule-wrap">
                            <h1>RULES</h1>

                            {eventDetails[props.ourIndex].rules && eventDetails[props.ourIndex].rules.length > 0 ? eventDetails[props.ourIndex].rules.map((rule, indx) => {
                                return (
                                    <ol key={indx}>
                                        <li>
                                            <ol>
                                                {rule.length > 0 ? rule.map((rule, indx) => {
                                                    return (
                                                        <li key={indx}>{rule}</li>
                                                    )
                                                }) : null}

                                            </ol>
                                        </li>
                                    </ol>

                                )
                            }) : null}



                        </div>
                    ) : infoType === 'jud' ? (
                        <div className="judgement-wrap">
                            <h1>JUDGEMENT CRITERIA</h1>


                            {eventDetails[props.ourIndex].judgement.map((judgement, index) => {
                                return (
                                    <ul key={index}>
                                        <li>
                                            {judgement.length > 0 ? (
                                                <>
                                                    <h2>Round {index + 1}</h2>
                                                    <ul>
                                                        {judgement.map((judge, indx) => {

                                                            return <li>{judge}</li>
                                                        })}
                                                    </ul>
                                                </>
                                            ) : null}
                                        </li>
                                    </ul>
                                )
                            })}

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