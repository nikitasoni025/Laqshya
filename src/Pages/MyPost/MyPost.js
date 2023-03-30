import React from 'react';
import "./mypost.scss";

const MyPost = () => {
    return (
        <div className='myPost'>
            <div className="mypost-wrap">
                <div className="mypost-container">
                    <div className="mypost-cnt-left">
                        <div className="left-wrap">

                            <div className="img-cnt1">
                                <img src="https://ik.imagekit.io/egjzyz51e/img_2_1677915120207.jpg?updatedAt=1677915356389" alt="" />
                            </div>
                            <div className="img-cnt2">
                                <img src="https://ik.imagekit.io/egjzyz51e/img_2_1677915120207.jpg?updatedAt=1677915356389" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="mypost-cnt-right">
                        <div className="details">
                            <ul className="cnt-det">
                                <li>Category</li>
                                <li>Title</li>
                                <li>Description</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyPost