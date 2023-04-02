import React, { useEffect, useState } from 'react'
import "./myeventpage.scss";
import { MdDeleteOutline } from "react-icons/md";
import { API } from '../../Services/Api';
import { FaEdit, FaSave } from 'react-icons/fa';

const MyEventPage = () => {
  const [userData, setUserData] = useState({});
  const [enrolledIndiData, setEnrolledIndiData] = useState([]);
  const [enrolledGroupData, setEnrolledGroupData] = useState([]);
  const [editingid, setEditingId] = useState(null);
  const [toggle, setToggle] = useState(true);
  const [transactionid, setTransactionId] = useState('');


  useEffect(() => {
    const fetchAllDatas = async () => {
      if (sessionStorage.getItem('isLogined')) {
        const userResponse = await API.getParticipantWithId({ id: sessionStorage.getItem('isLogined') });

        if (userResponse.isSuccess) {
          setUserData(userResponse.data);

          const groupResponse = await API.getAllGroupsWithUser({ id: userResponse.data._id });

          if (groupResponse.isSuccess) {
            setEnrolledGroupData(groupResponse.data);
            setTransactionId(groupResponse.data.transactionid);
          }
        }
      }
    }
    fetchAllDatas();
  }, [toggle]);




  const handleInputChange = async (e) => {
    setTransactionId(e.target.value);
  }


  const handleDeleteGroup = async (id) => {


    if (window.confirm("Do You Really Want To Delete This Registration") === true) {
      const response = await API.deleteGroup({ id });
      if (response.isSuccess) {
        setToggle(!toggle);
      }
    }
  }

  const handleGroupUpdate = async (id, updateData) => {

    const response = await API.updateGroup({ id, updateData });

    if (response.isSuccess) {
      setToggle(!toggle);
      setEditingId(null)
    }

  }





  return (
    <div className='myEventPage'>
      <div className="myEventPage-wrap">
        <div className="heading">
          <h1>My Events</h1>
        </div>
        <div className="myevent-heading">
          {!userData || userData === null ? (
            <ul className="user-details">
              <li>User</li>
              <li>Is</li>
              <li>Loged Out</li>
            </ul>
          ) : (

            <ul className="user-details">
              <li>Name : {userData.fullname || ""}</li>
              <li>Email : {userData.email || ""}</li>
              <li>Number : {userData.phonenumber || ""}</li>
            </ul>
          )}
        </div>

        <div className="myevent-details-cards">
          <h1>Group Registrations</h1>
          <div className="myevent-group-grid">

            {enrolledGroupData && enrolledGroupData.length > 0 ? enrolledGroupData.map((group, indx) => {
              return (
                <div className="myeve-card">
                  <ul>
                    <li>Event Name : {group.eventname}</li>
                    <li>Group Name : {group.groupname}</li>
                    <li>Group ID : {group.groupid}</li>
                    <li>
                      Transaction Id : {editingid === group._id ? (
                        <>
                          <input value={transactionid} onChange={handleInputChange} type="text" name='transactionid' placeholder='Transaction Id' />
                          <button onClick={() => handleGroupUpdate(group._id,{transactionid:transactionid})}><FaSave /></button>
                        </>
                      ) : (
                        <>
                          {group.transactionid}&nbsp;<button onClick={() => setEditingId(group._id)}><FaEdit /></button>
                        </>
                      )}

                    </li>
                    <li>Registration Status :&nbsp;{group.status ? <span className='success-dot'></span> : <span> Pending &nbsp;<p className='error-dot'></p></span>}</li>
                    <li>Selection For Next Round :&nbsp;{group.selected ? <span className='success-dot'></span> : <span> Not Selected &nbsp;<span className='error-dot'></span></span>}</li>
                    <li><button onClick={() => handleDeleteGroup(group._id)}>Withdraw</button></li>
                  </ul>
                </div>
              )
            }) : (
              <p className='error-mark'>Not Registerd For Any Of The Events Yet</p>

            )}

          </div>
        </div>
      </div>
    </div>
  )
}

export default MyEventPage;