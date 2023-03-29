import React from 'react'
import "./myeventpage.scss"

const MyEventPage = () => {
  return (
    <div className='myEventPage'>
        <div className="myEventPage-wrap">
              <h1>My Events</h1>
            <div className="myevent-heading">
              <h3>Name</h3>
              <h3>email</h3>
              <h3>phone number</h3>
            </div>
            <div className="myevent-detail">
              <div className="my-event-wrap">
                <h1>Event You Have Registered</h1>
                
              </div>
            </div>
        </div>
    </div>
  )
}

export default MyEventPage;