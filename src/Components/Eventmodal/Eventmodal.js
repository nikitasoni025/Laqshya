import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './eventmodal.scss';

const Eventmodal = () => {
    return (
        <div className='Eventmodal'>
            <div className="event-modal-wrap">
                <div className="close-mod-btn"><button><FaTimes /></button></div>
                <div className="introduction">
                    <h1>Introduction</h1>
                    <p>Cricket, often referred to as "Gentleman’s game" is the national sport of England. It is a bat and ball game that was evolved in England .Tennis Cricket is an  variant of the game of cricket.The main aim of the game is to score more runs than the opponent by hitting fours, sixes and running between the wickets to win the match.The game is played on a circular or an oval-shaped grassy field which is known as ‘Cricket Ground’ or ‘Cricket Stadium' the ground consists of a flat rectangular shaped pitch on which the game is executed.It is 22 yards long and 10 feet wide and has distinct markings that define the creases according to the laws of cricket.</p>

                </div>
                <div className="basic-info">
                    <h1>Basic Information</h1>
                    <div className="rules">
                        <h2>Rules :</h2>
                        <ul>
                            <li>1</li>
                            <li>02</li>
                            <li>3</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>

                        </ul>


                    </div>
                    <div className="round-details">
                        <h2>Round Details :</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, reprehenderit!</p>
                    </div>
                    <div className="fees-details">
                        <h2>Registration Details :</h2>
                        <h3>Registration Fees (Team) : 150/-</h3>
                        <h3>Registration Fees (Individual) : 50/-</h3>
                        
                    </div>
                    <div className="incharge">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, molestiae.</div>
                    <div className="manager-details">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, fugit ipsa.</div>
                </div>
            </div>
        </div>
    )
}

export default Eventmodal;