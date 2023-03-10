import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./participants.scss";
import { MdDeleteForever, MdGroupAdd } from "react-icons/md";
import { FaEdit, FaSearch } from 'react-icons/fa';
import { TbArrowWaveLeftDown, TbArrowWaveRightUp } from 'react-icons/tb';
import { initialdata } from '../../../Constants/OurConst';
import { API } from '../../../Services/Api';



const initialfiltervalue = {
    searched: "",
    status: "",
    events: ""
}

const Participants = () => {
    const [tableData, setTableData] = useState(initialdata);
    const [filteredTerm, setFilteredTerm] = useState(initialfiltervalue);
    const [sortBy, setSortBy] = useState("fullname");
    const [sortOrder, setSortOrder] = useState("asc");
    let [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(5);

    // useEffect(() => {
    //     const fetchData = async () => {

    //         const response = await API.getAllParticipants();

    //         if (response.isSuccess) {
    //             console.log(response.data);
    //             setTableData(response.data);
    //         }

    //     }
    //     fetchData()

    // }, [])





    const handleSearch = (e) => {
        // console.log(filteredTerm);
        const { name, value } = e.target;
        setFilteredTerm((pre) => {
            return {
                ...pre,
                [name]: value,
            }
        })
    }
    const handleSort = (field) => {
        console.log(field);
        if (field === sortBy) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        }
        else {
            setSortBy(field);
            setSortOrder("asc");
        }
        setCurrentPage(1);
    }
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const filteredData = tableData.filter((item) =>
        item.name.toLowerCase().includes(filteredTerm.searched.toLowerCase()) &&
            item.status === true ? "paid" : "unpaid".includes(filteredTerm.status.toLowerCase()) &&
        item.event.toLowerCase().includes(filteredTerm.events.toLowerCase())
    );
    const sortedData = filteredData.sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];
        if (aValue < bValue) {
            return sortOrder === "asc" ? -1 : 1;
        }
        else if (aValue > bValue) {
            return sortOrder === "asc" ? 1 : -1;
        }
        else {
            return 0;
        }
    });
    const currentData = sortedData.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(sortedData.length / itemPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleItemPerpage=(e)=>{

        setItemPerPage(e.target.value);
        setCurrentPage(1);

    }




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
                                <input onChange={handleSearch} type="text" placeholder='Search' name='searched' id='searched' />
                                <button><FaSearch /></button>
                            </div>

                        </div>

                        <div className="filter-col">
                            <label htmlFor="status">Status</label>
                            <div className="adm-input-wrap">
                                <select value={filteredTerm.status} onChange={handleSearch} name="status" id="status">
                                    <option disabled hidden >Choose Status</option>
                                    <option value="paid">Paid</option>
                                    <option value="unpaid">Unpaid</option>
                                </select>
                            </div>
                        </div>
                        <div className="filter-col">
                            <label htmlFor="events">Events</label>
                            <div className="adm-input-wrap">
                                <select value={filteredTerm.events} onChange={handleSearch} name="events" id="events">
                                    <option disabled hidden >Choose Event</option>
                                    <option value="" >All</option>
                                    <option value="xxc">Xxcelerate</option>
                                    <option value="rsl">Robo Soccer League</option>
                                    <option value="rgk">Robo Go Karting</option>
                                    <option value="rs">Robo Sumo</option>
                                    <option value="db">Deep Blue</option>
                                    <option value="rff">Robo Fire Fighting</option>
                                    <option value="dr">Drone Race</option>
                                    <option value="cri">Cricket</option>
                                    <option value="aw">Arm Wrestling</option>
                                    <option value="fut">Futsal</option>
                                    <option value="ab">Angry Bird</option>
                                    <option value="fol">Face Of Laqshya</option>
                                    <option value="art">Artifex</option>
                                    <option value="cine">Cinematics</option>
                                    <option value="cm">Cad Master</option>
                                    <option value="pwb">Lets Play With Bond</option>
                                    <option value="bj">Bottle Jet</option>
                                    <option value="dbug">D Bugger</option>
                                    <option value="tf">Tech Farmactic</option>
                                    <option value="mym">Make Your Move</option>
                                    <option value="jm">Just A Minute</option>
                                    <option value="quiz">Quiz</option>
                                    <option value="th">Tresure Hunt</option>
                                    <option value="pyi">Pitch Your Idea</option>
                                    <option value="work">Workshop</option>
                                    {/* <option value="">Cicket</option> */}
                                </select>
                            </div>
                        </div>
                        <div className="filter-col">
                            <label htmlFor="status">Number of items</label>
                            <div className="adm-input-wrap">
                                <select value={itemPerPage} onChange={handleItemPerpage} name="noitem" id="status">
                                    <option value={5} >5</option>
                                    <option value={20} >20</option>
                                    <option value={40} >40</option>
                                    <option value={80} >80</option>
                                    <option value={100} >100</option>
                                   
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DATABASE TABLE */}

                <div className="participants-table">
                    <div className="participants-table-wrap">
                        <table cellSpacing={5} >
                            <thead>
                                <tr>
                                    <th onClick={() => handleSort("id")}>Id</th>
                                    <th>UniqueId</th>
                                    <th onClick={() => handleSort("fullname")}>Name</th>
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
                                {currentData.map((data, indx) => {

                                    return (
                                        <tr key={indx}>
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
                                                {/* <input type="checkbox" /> */}
                                                <button>Select</button>
                                                <button><FaEdit /></button>
                                                <button><MdDeleteForever /></button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Table Configuration Button */}

                <div className="table-config">
                    <div className="table-config-wrap">
                        <div className="pagination-btn">
                            <p>Pagination</p>
                            <button onClick={() => { currentPage <= 1 ? setCurrentPage(currentPage) : setCurrentPage(--currentPage) }}><TbArrowWaveLeftDown /></button>
                            <h1> {currentPage}</h1>
                            <button onClick={() => { currentPage > (pageNumbers.length - 1) ? setCurrentPage(currentPage) : setCurrentPage(++currentPage) }}><TbArrowWaveRightUp /></button>
                        </div>
                    </div>
                </div>




            </div>

        </div>
    )
}

export default Participants;