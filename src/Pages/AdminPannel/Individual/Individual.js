import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./individual.scss";
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




const Individual = () => {
    const [tableData, setTableData] = useState([]);
    const [filteredTerm, setFilteredTerm] = useState(initialfiltervalue);
    const [sortBy, setSortBy] = useState("fullname");
    const [sortOrder, setSortOrder] = useState("asc");
    let [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(5);

    useEffect(() => {
        const fetchData = async () => {
            const response = await API.getAllIndividuals({ limit: itemPerPage });
            if (response.isSuccess) {
                console.log(response);
                setTableData(response.data);
            }

        }
        fetchData();
    }, []);

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

    // const indexOfLastItem = currentPage * itemPerPage;
    // const indexOfFirstItem = indexOfLastItem - itemPerPage;
    // const filteredData = tableData.filter((item) =>
    //     item.name.toLowerCase().includes(filteredTerm.searched.toLowerCase()) &&
    //         item.status === true ? "paid" : "unpaid".includes(filteredTerm.status.toLowerCase()) &&
    //     item.event.toLowerCase().includes(filteredTerm.events.toLowerCase())
    // );
    // const sortedData = filteredData.sort((a, b) => {
    //     const aValue = a[sortBy];
    //     const bValue = b[sortBy];
    //     if (aValue < bValue) {
    //         return sortOrder === "asc" ? -1 : 1;
    //     }
    //     else if (aValue > bValue) {
    //         return sortOrder === "asc" ? 1 : -1;
    //     }
    //     else {
    //         return 0;
    //     }
    // });
    // const currentData = sortedData.slice(indexOfFirstItem, indexOfLastItem);

    // const pageNumbers = [];
    // for (let i = 1; i <= Math.ceil(sortedData.length / itemPerPage); i++) {
    //     pageNumbers.push(i);
    // }

    const handleItemPerpage = (e) => {

        setItemPerPage(e.target.value);
        setCurrentPage(1);
    }
    return (
        <div className='individual'>
            <div className="individual-wrap">
                <div className="individual-heading">
                    <h1>Individual Participant</h1>
                    <Link className='adm-main-btn'>Add&nbsp;<MdGroupAdd /></Link>
                </div>

                {/*FILTER GROUP */}
                <div className="filter-group">
                    <div className="filter-group-wrap">
                        <div className="search-bar">
                            <label htmlFor="searched">Search for group participants</label>
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
                                    <option value="Xxcelerate">Xxcelerate</option>
                                    <option value="Robo Soccer Leaguers">Robo Soccer League</option>
                                    <option value="Robo Go Karting">Robo Go Karting</option>
                                    <option value="rsRobo Sumo">Robo Sumo</option>
                                    <option value="Deep Blue">Deep Blue</option>
                                    <option value="Robo Fire Fighting">Robo Fire Fighting</option>
                                    <option value="Drone Race">Drone Race</option>
                                    <option value="Cricket">Cricket</option>
                                    <option value="Arm Wrestling">Arm Wrestling</option>
                                    <option value="Futsal">Futsal</option>
                                    <option value="Angry Bird">Angry Bird</option>
                                    <option value="Face Of Laqshya">Face Of Laqshya</option>
                                    <option value="Artifex">Artifex</option>
                                    <option value="Cinematics">Cinematics</option>
                                    <option value="Cad Master">Cad Master</option>
                                    <option value="Lets Play With Bond">Lets Play With Bond</option>
                                    <option value="Bottle Jet">Bottle Jet</option>
                                    <option value="Code Crunch">Code Crunch</option>
                                    <option value="Tech Farmactic">Tech Farmactic</option>
                                    <option value="Make Your Move">Make Your Move</option>
                                    <option value="jm">Just A Minute</option>
                                    <option value="\Quiz">Quiz</option>
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

                        {/* export to excel */}

                        <div className="filter-col">
                            <label htmlFor="export">Export to Excel</label>
                            <div className="adm-input-wrap">
                                <input type="button" value={"Export"} name="export" id='export' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* DATABASE TABLE */}

                <div className="individual-table">
                    <div className="group-table-wrap">
                        <table cellSpacing={5} >
                            <thead>
                                <tr>
                                    <th onClick={() => handleSort("id")}>Id</th>
                                    <th>UniqueId</th>
                                    <th onClick={() => handleSort("fullname")}>Name</th>
                                    <th>Email</th>
                                    <th>Event</th>
                                    <th>Institution</th>
                                    <th>Standard</th>
                                    <th>Registration Fee</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data, indx) => {

                                    return (
                                        <tr key={indx}>
                                            <td>{indx}</td>
                                            <td>{data.uid}</td>
                                            <td>{data.fullname}</td>
                                            <td>{data.email}</td>
                                            <td>{data.eventname}</td>
                                            <td>{data.institution}</td>
                                            <td>{data.standard}</td>
                                            <td>{data.registrationfee}</td>
                                            <td>{data.status ? "Paid" : "Unpaid"}</td>
                                            <td className='action-btn'>                                               
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

                {/* <div className="table-config">
                    <div className="table-config-wrap">
                        <div className="pagination-btn">
                            <p>Pagination</p>
                            <button onClick={() => { currentPage <= 1 ? setCurrentPage(currentPage) : setCurrentPage(--currentPage) }}><TbArrowWaveLeftDown /></button>
                            <h1> {currentPage}</h1>
                            <button onClick={() => { currentPage > (pageNumbers.length - 1) ? setCurrentPage(currentPage) : setCurrentPage(++currentPage) }}><TbArrowWaveRightUp /></button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Individual