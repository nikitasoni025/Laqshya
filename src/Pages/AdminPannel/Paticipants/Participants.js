import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./participants.scss"
import { MdDeleteForever, MdGroupAdd } from "react-icons/md"
import { FaEdit, FaSearch } from 'react-icons/fa'
import { initialdata } from '../../../Constants/OurConst'

const Participants = () => {
    const [tableData, setTableData] = useState(initialdata)


    return (
        <div className='participants'>
            <div className="participants-wrap">

                <div className="participants-heading">
                    <h1>Participants</h1>
                    <Link className='adm-main-btn'>Add&nbsp;<MdGroupAdd /></Link>
                </div>

                {/*FILTER GROUP */}
                <div className="filter-group">
                    <div className="filter-group-wrap">
                        <div className="search-bar">
                            <label htmlFor="searched">Search for participants</label>
                            <div className="input-wrap">
                                <input type="text" placeholder='Search' name='searched' id='searched' />
                                <button><FaSearch /></button>
                            </div>

                        </div>

                        <div className="filter-col">
                            <label htmlFor="status">Status</label>
                            <div className="adm-input-wrap">
                                <select name="status" id="status">
                                    <option disabled hidden selected>Choose Status</option>
                                    <option value="paid">Paid</option>
                                    <option value="unpaid">Unpaid</option>
                                </select>
                            </div>
                        </div>
                        <div className="filter-col">
                            <label htmlFor="events">Events</label>
                            <div className="adm-input-wrap">
                                <select name="events" id="events">
                                    <option disabled hidden selected>Choose Event</option>
                                    <option value="">Xxcelerate</option>
                                    <option value="">Robo Soccer League</option>
                                    <option value="">Robo Go Karting</option>
                                    <option value="">Robo Sumo</option>
                                    <option value="">Deep Blue</option>
                                    <option value="">Robo Fire Fighting</option>
                                    <option value="">Drone Race</option>
                                    <option value="">Cricket</option>
                                    <option value="">Arm Wrestling</option>
                                    <option value="">Futsal</option>
                                    <option value="">Angry Bird</option>
                                    <option value="">Face Of Laqshya</option>
                                    <option value="">Artifex</option>
                                    <option value="">Cinematics</option>
                                    <option value="">Cad Master</option>
                                    <option value="">Lets Play With Bond</option>
                                    <option value="">Bottle Jet</option>
                                    <option value="">D Bugger</option>
                                    <option value="">Tech Farmactic</option>
                                    <option value="">Make Your Move</option>
                                    <option value="">Just A Minute</option>
                                    <option value="">Quiz</option>
                                    <option value="">Tresure Hunt</option>
                                    <option value="">Pitch Your Idea</option>
                                    <option value="">Workshop</option>
                                    {/* <option value="">Cicket</option> */}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DATABASE TABLE */}

                <div className="participants-table">
                    <div className="participants-table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>UniqueId</th>
                                    <th>Name</th>
                                    <th>Event</th>
                                    <th>Email</th>
                                    <th>Number</th>
                                    <th>Institution</th>
                                    <th>Standard</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data, indx) => {
                                    
                                    return (
                                        <tr>
                                            <td>{data.id}</td>
                                            <td>{data.uid}</td>
                                            <td>{data.name}</td>
                                            <td>{data.event}</td>
                                            <td>{data.email}</td>
                                            <td>{data.number}</td>
                                            <td>{data.institution}</td>
                                            <td>{data.standard}</td>
                                            <td>{data.status}</td>
                                            <td className='action-btn'>
                                                <input type="checkbox" />
                                                <button><FaEdit/></button>
                                                <button><MdDeleteForever/></button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>




            </div>

        </div>
    )
}

export default Participants;