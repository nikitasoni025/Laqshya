import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { eventDetails } from '../../Constants/OurConst';
import './eventmodal.scss';
import { playclicksound } from '../../Utils/commonutil';
import { SiGooglepay, SiPaytm, SiPhonepe } from 'react-icons/si';

const Eventmodal = (props) => {
    const [infoType, setInfoType] = useState('rul');
    const [finalFee, setFinalFee] = useState(0);


    const handleUpiPay = (e) => {
        playclicksound()
        let deepLink = `upi://pay?pa=${eventDetails[props.ourIndex].upiid}&am=${finalFee}&pn=${'Laqshya'}&cu=INR&tn=${eventDetails[props.ourIndex].title}`;
        window.location.href = deepLink;
        props.setOpenFormModal(false);
    }
    return (
        <div className='Eventmodal'>
            <div className="event-modal-wrap">
                <div className="close-mod-btn"><button onClick={() => { props.openModal(false); playclicksound(); }}><FaTimes /></button></div>
                <div className="info-nav-button">
                    {eventDetails[props.ourIndex].rules ?  <button className='nav-btn' onClick={() => { setInfoType('rul'); playclicksound() }}>RULES</button> : null}
                    {eventDetails[props.ourIndex].judgement ? <button className='nav-btn' onClick={() => { setInfoType('jud'); playclicksound() }}>ROUND RULES</button> : null}
                    {eventDetails[props.ourIndex].arena ? <button className='nav-btn' onClick={() => { setInfoType('arn'); playclicksound() }}>ARENA</button> : null}
                    <button className='nav-btn' onClick={() => { setInfoType('pay'); playclicksound() }}>PAYMENT</button>

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
                            <h1>ROUND RULES</h1>


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
                    ) : infoType === 'pay' ? (
                        <div className="pay-wrap">
                            <h1>Payment Details</h1>
                            {eventDetails[props.ourIndex].qrimage && eventDetails[props.ourIndex].upiid ? (
                                <>
                                    <div className="qr">
                                        <img width={300} src={eventDetails[props.ourIndex].qrimage} alt="qr image" />
                                    </div>
                                    <div className="amnt">Amount:{eventDetails[props.ourIndex].fixed ? eventDetails[props.ourIndex].registrationfee + "₹ Fixed" :eventDetails[props.ourIndex].registrationfee + "₹ Per Person"}</div>
                                    <div className="pay-btn">
                                        <button onClick={handleUpiPay}><SiPaytm /> &nbsp; <SiPhonepe /> &nbsp; <SiGooglepay /></button>
                                    </div>
                                </>

                            ) : <p>It is Free Of Cost</p>}
                        </div>

                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default Eventmodal;