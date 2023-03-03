import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import "./homepage.scss";

// let smokeimg = "https://ik.imagekit.io/dexo68yudb/image.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677697561319";
let smokeimg = "https://ik.imagekit.io/dexo68yudb/giphy.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1677770580940";

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className="wrap-home">

        {/* Navbar */}

        <Navbar />
        <div className="section">
          <div className="wrap-section">

            {/* header section */}

            <div className="header">
              <img className='headerfade-lft' src={smokeimg} alt="smokeimg" />
            </div>

            {/* SECTION 1 start here */}

            <div className="section-1">

              <div className="banner">
                <h1>JAI SHIVAJI HALLA BOL</h1>

              </div>

            </div>

            {/* SECTION 2 */}

            <div className="section-2">
              {/* DETAILS WRAP */}
              <div className="details-wrap">

                <div className="about-lakshya-details">
                  <h1>LAQSHYA <span>2K23</span></h1>
                  <h3>Techno Management Sports & Cultural Fest</h3>
                  <div className="about-wrap">
                    <div className="abt-wrap-left">
                      <p><span className='main-highlight'>Laqshya 2k23</span> is a highly anticipated annual event that took place in the <span className="main-highlight"> Chhattrapati Shivaji Institute of Technology</span>. This event is a combination of techno, management, sports, and cultural activities, which brought together students from all over the region to showcase their skills and talents.</p>
                      <p>The event began with a grand opening ceremony, which included a colorful procession of students dressed in traditional attire. This was followed by various technical competitions such as coding challenges, robotics contests, and hackathons, which tested the students' problem-solving skills and technical knowledge.</p>
                      <p>In addition to technical events,<span className="main-highlight"> Laqshya 2k23</span> also featured a range of management games and simulations that aimed to challenge the participants' leadership and decision-making abilities. These activities included quizzes, case studies, and business plan competitions, which were judged by industry experts and renowned academics.
                      </p>
                      <p>Sports enthusiasts had a chance to participate in various indoor and outdoor sports competitions, such as cricket, Futsal, Arm Wrestling ,Angry Birds. These events not only promoted physical fitness and healthy competition but also provided an opportunity for students to showcase their teamwork and sportsmanship skills.
                      </p>
                      <p>Apart from technical, management, and sports events, the cultural events were the highlights of the festival. There were music and dance performances, and various other cultural activities that showcased the diverse talents and cultural heritage of the region.</p>
                    </div>

                  </div>
                </div>



              </div>
            </div>

            {/* SECTION  */}

           


          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage