import React, { useEffect, useRef, useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import PostCarousel from '../../Components/PostCarousel/PostCarousel';
import "./homepage.scss";
import NET from 'vanta/dist/vanta.net.min';


const Homepage = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET(props.windowSize[0] < 991 ? {
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x58fffa,
        backgroundColor: 0x0,
        points: 9.00,
        maxDistance: 23.00,
        spacing: 25.00
      } : {
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x58fffa,
        backgroundColor: 0x0,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <div className='homepage'>
      <div className="wrap-home">

        {/* Navbar */}

        <Navbar />
        <div className="section">
          <div className="wrap-section">

            {/* HEADER */}

            <div className="header" ref={myRef}>
              {/* <img className='headerfade-lft' src={smokeimg} alt="smokeimg" /> */}
              <div className='headerfade-lft'></div>
              <span className='shadow-logo'>LAQSHYA</span>
            </div>

            {/* SECTION 1 start here */}

            <div className="section-1">
              <div className="banner">
                <h1> <span>#</span>BOLSHIVAJIHALLABOL</h1>
              </div>
            </div>

            {/* SECTION 2 */}

            <div className="section-2">
              {/* DETAILS WRAP */}
              <div className="details-wrap">

                <div className="about-lakshya-details">
                  <div className="upper-about">
                    <h1>LAQSHYA <span>2K23</span></h1>
                    <h3>Techno Management Sports & Cultural Fest</h3>
                    <div className="about-wrap">
                      <p><span className='main-highlight'>Laqshya 2k23</span> is a highly anticipated annual event that took place in the <span className="main-highlight"> Chhattrapati Shivaji Institute of Technology</span>. This event is a combination of techno, management, sports, and cultural activities, which brought together students from all over the region to showcase their skills and talents.</p>
                      <p>The event began with a grand opening ceremony, which included a colorful procession of students dressed in traditional attire. This was followed by various technical competitions such as coding challenges, robotics contests, and hackathons, which tested the students' problem-solving skills and technical knowledge.</p>
                      <p>In addition to technical events,<span className="main-highlight"> Laqshya 2k23</span> also featured a range of management games and simulations that aimed to challenge the participants' leadership and decision-making abilities. These activities included quizzes, case studies, and business plan competitions, which were judged by industry experts and renowned academics.
                      </p>
                      <p>Sports enthusiasts had a chance to participate in various indoor and outdoor sports competitions, such as cricket, Futsal, Arm Wrestling ,Angry Birds. These events not only promoted physical fitness and healthy competition but also provided an opportunity for students to showcase their teamwork and sportsmanship skills.
                      </p>
                      <p>Apart from technical, management, and sports events, the cultural events were the highlights of the festival. There were music and dance performances, and various other cultural activities that showcased the diverse talents and cultural heritage of the region.</p>
                    </div>
                  </div>
                  <div className="lower-about"></div>
                </div>

                {/* CoLLAGE SECTION */}

                <div className="collage">
                  <div className="collage-wrap">
                    <div className="row">
                      <img className='animated-float' src="https://ik.imagekit.io/egjzyz51e/img_5_1677915210110.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1677915371515" alt="" /></div>
                    <div className="row">
                      <img style={{ animationDelay: "0.2s" }} className='animated-float' src="https://ik.imagekit.io/egjzyz51e/img_3_1677915162450.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1677915392553" alt="" /></div>
                    <div className="row">
                      <img style={{ animationDelay: "0.5s" }} className='animated-float' src="https://ik.imagekit.io/egjzyz51e/img_2_1677915120207.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1677915356389" alt="" /></div>
                    <div className="row">
                      <img style={{ animationDelay: "0.9s" }} className='animated-float' src="https://ik.imagekit.io/egjzyz51e/img_4_1677915173888.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1677915472669" alt="" /></div>
                  </div>
                </div>



              </div>
            </div>

            {/* SECTION 3  */}

            <div className="section-3">
              <div className="section3-wrap">
                <ul className="sec-3-title">
                  <li>C</li>
                  <li>A</li>
                  <li>P</li>
                  <li>T</li>
                  <li>U</li>
                  <li>R</li>
                  <li>E</li>
                  <li>D</li>
                </ul>
                <ul className="sec-3-title2">
                  <li>M</li>
                  <li>O</li>
                  <li>M</li>
                  <li>E</li>
                  <li>N</li>
                  <li>T</li>
                  <li>S</li>
                </ul>
                {/* LATEST POST CARDS */}
                <div className="wrap-carousel">
                  <PostCarousel windowSize={props.windowSize.length > 0 && props.windowSize ? props.windowSize : undefined} />
                </div>
              </div>
            </div>

            {/* SECTION 4 SPONSOR */}

            <div className="sponsor">
              <div className="sponsor-wrap">





              </div>
            </div>

            {/* FOOTER SECTION */}

            <Footer windowSize={props.windowSize.length > 0 && props.windowSize ? props.windowSize : undefined} />








          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage