import React, { useEffect, useState } from 'react';
import { MdGroupAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { API } from '../../../Services/Api';
import './admins.scss';



const Admins = () => {
    const [adminsData,setAdminsData]=useState([]);
    const [toggle,setToggle]=useState(true);

    useEffect(()=>{
        const fetchAdmins=async()=>{
            const response=await API.getAllAdmins();
            console.log(response);
            if(response.isSuccess){
                setAdminsData(response.data);
            }
        }
        fetchAdmins();
    },[toggle]);

    const handlePromote= async (id,role)=>{
        const updateData={role:role==='admin' ? 'pladmin' : 'admin'};
        const response =await API.updateAdmin({id,updateData});
        if(response.isSuccess){
            setToggle(!toggle);
        }
    }



    return (
        <div className='Admins'>
            <div className="admins-wrap">

                <div className="admin-heading">
                    <h1>Admins</h1>
                    <Link className='adm-main-btn'>Add&nbsp;<MdGroupAdd /></Link>
                </div>

                <div className="admin-list">
                    <ul>
                        {adminsData && adminsData.length>0 ? adminsData.map((admin,indx)=>{
                            return(
                                <li key={indx}><span>{admin.fullname}</span> <span>{admin.role}</span> <button onClick={()=>handlePromote(admin._id,admin.role)}>{admin.role==='admin' ? 'Promote' : 'Demote'}</button></li>
                            )
                        }) : <li></li>}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Admins;