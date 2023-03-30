import axios from 'axios';
import React, { useState } from 'react'
import { MdGroupAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './createpost.scss';

const Createpost = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    event.preventDefault();
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    try {
      const res = await axios.post('/upload', formData);
      const imageURL = res.data.url;
      // add imageURL to MongoDB using Mongoose
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='createpost'>
      <div className="createpost-wrap">

        <div className="createpost-heading">
          <h1>Add Post</h1>
        </div>


        <div className="addpost-form">
          <form action="">
            <div className="left-form">
              <label htmlFor="postimg">
                Click or Drag To Upload
                <input style={{display:"none"}} type="file" id='postimg' onChange={handleFileChange} />
              </label>

            </div>
            <div className="right-form">
              <div className="row">
                <input type="text" name='title'  />
              </div>
              <div className="row">
                <input type="text" name='description' />
              </div>
              <div className="row">
                <button>Post</button>
              </div>
            </div>
          </form>
        </div>



      </div>
    </div>
  )
}

export default Createpost;