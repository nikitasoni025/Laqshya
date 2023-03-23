import React from 'react'
import { MdGroupAdd } from 'react-icons/md'
import { Link } from 'react-router-dom'

const CreateIndi = () => {
    return (
        <div className='createIndi'>
            <div className="createIndi-wrap">
                <div className="createIndi-heading">
                    <h1>Individual Participant</h1>
                    <Link className='adm-main-btn'>Add&nbsp;<MdGroupAdd /></Link>
                </div>

                <div className="add-individual">
                    <form action="">
                        <div className="row">
                            <input type="text" name='fullname' id='name' placeholder='Full Name'/>
                        </div>
                        <div className="row">
                            <input type="email" name='email' id='name' placeholder='Email'/>
                        </div>
                        <div className="row">
                            <input type="email" name='phonenumber' id='name' placeholder='Phone Number'/>
                        </div>
                        <div className="row">
                            <input type="text" name='institution' id='name' placeholder='Institution'/>
                        </div>
                        <div className="row">
                            <input type="text" name='standard' id='name' placeholder='standard'/>
                        </div>
                        <div className="row">
                           <select name="status" id="status">
                            <option value={true}>Paid</option>
                            <option value={false}>Unpaid</option>
                           </select>
                        </div>
                        <div className="row">
                            <input type="password" name='password' id='name' placeholder='password'/>
                        </div>
                       
                    </form>
                </div>

            </div>
        </div>
    )
}

export default CreateIndi