import React from 'react'
import "./myeventpage.scss";
import { MdDeleteOutline } from "react-icons/md";

const MyEventPage = () => {
  return (
    <div className='myEventPage'>
      <div className="myEventPage-wrap">
        <div className="heading">
          <h1>My Events</h1>
        </div>
        <div className="myevent-heading">
          <ul className="user-details">
            <li>Name</li>
            <li>Email</li>
            <li>Number</li>
          </ul>
        </div>
        <div className="myevent-detail">
          <h1>You Have Registered :</h1>
          <ul className="event-registered">
            <li>
              <span>Cricket</span>
              <span>Pending</span>
              <button><MdDeleteOutline/></button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MyEventPage;