import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import "./postpage.scss";

const PostPage = () => {
  return (
    <div className='postPage'>
      <div className="postPage-wrap">
        <Navbar />
        <div className="post-header">
          <div className="post-header-wrap">
            <div className="left-head">
              <h1>Catch The</h1>
              <span> Latest</span>
            </div>

          </div>
        </div>
        <div className="post-container">
          <div className="cont-grid">
            <div className="post-item-card">
              <img src="https://ik.imagekit.io/egjzyz51e/DSC_0214.JPG?updatedAt=1679562389933" alt="" />
              <div className="overlay">
                <span>category</span>
                <span>TItle</span>
              </div>
            </div>
            <div className="post-item-card">
              <img src="https://ik.imagekit.io/egjzyz51e/DSC_0214.JPG?updatedAt=1679562389933" alt="" />
              <div className="overlay">
                <span>category</span>
                <span>TItle</span>
              </div>
            </div>
            <div className="post-item-card">
              <img src="https://ik.imagekit.io/egjzyz51e/DSC_0214.JPG?updatedAt=1679562389933" alt="" />
              <div className="overlay">
                <span>category</span>
                <span>TItle</span>
              </div>
            </div>
            <div className="post-item-card">
              <img src="https://ik.imagekit.io/egjzyz51e/DSC_0214.JPG?updatedAt=1679562389933" alt="" />
              <div className="overlay">
                <span>category</span>
                <span>TItle</span>
              </div>
            </div>
            <div className="post-item-card">
              <img src="https://ik.imagekit.io/egjzyz51e/DSC_0214.JPG?updatedAt=1679562389933" alt="" />
              <div className="overlay">
                <span>category</span>
                <span>TItle</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PostPage