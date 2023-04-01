import React, { useEffect, useRef, useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import PostCarousel from '../../Components/PostCarousel/PostCarousel';
import "./homepage.scss";
import NET from 'vanta/dist/vanta.net.min';


const Homepage = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const [preloading, setPreloading] = useState(false);
  const [currentDot, setCurrentDot] = useState(0);
  const myRef = useRef(null);


  useEffect(() => {

    let timer;
    let isVisited = localStorage.getItem('visited');
    console.log(isVisited);
    if (!isVisited || isVisited===undefined || isVisited===null || isVisited==='') {
      console.log("hua kya ");
      setPreloading(true)
      window.addEventListener('load', () => {
        timer = setTimeout(() => {
          setPreloading(false);
          localStorage.setItem('visited', 'true');
        }, 3000)
      })
    } else {
      setPreloading(false);
    }

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
      clearTimeout(timer);
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <div className='homepage'>

      {/* Preloader */}
      <div className={preloading ? 'preloading' : 'preloading preloadingends'}>
        {props.windowSize[0] <= 991 ? (
          <button onClick={() => { setPreloading(false); localStorage.setItem('visited', 'true') }}>Dive In</button>
        ) : null}
        <div className="prelogo">
          <h1 className={preloading ? '' : 'fade'}>LAQSHYA</h1>

          <p className={preloading ? '' : 'fade'}>In Assocoation With</p>

          <img className={preloading ? '' : 'fade'} src="https://ik.imagekit.io/dexo68yudb/Tec36_Logo_white_300x.png?updatedAt=1679068816840" alt="" />


        </div>
      </div>



      {/* Homepage Starts Here */}
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
              <div className="section-2-wrap">
                <div className="details-wrap">
                  <div className="content">
                    <div className="left-cont">
                      <h1>LAQSHYA <br /> <span>2K23</span></h1>
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
                    <div className="right-cont">
                      <video poster='https://ik.imagekit.io/egjzyz51e/output-onlinepngtools__1_.png?updatedAt=1679148485586' controls src="https://ik.imagekit.io/egjzyz51e/VID-20230301-WA0001.mp4?updatedAt=1677831082506"></video>

                    </div>

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
              <div className="spon-wrap">
                <h1> <span>IN</span> ASSOCIATION <span>WITH</span> </h1>
                <img src="https://ik.imagekit.io/egjzyz51e/Tec36_Logo_white_300x.png?updatedAt=1679145810521" alt="" />
              </div>
            </div>

            {/* SCHEDUL SECTION*/}
            <div className="schedule">
              <div className="schedule-wrap">
                <h1>SCHEDULE</h1>
                <div className="timings">
                  <div className="timing-left">
                    <div className={currentDot === 0 ? "dots initial" : currentDot === 1 ? "dots mid"  : currentDot ===2 ? "dots final" : "dots"}>
                      <div className={currentDot === 0 ? "dot active" : "dot"}><button onClick={() => { setCurrentDot(0) }}>18</button></div>
                      <div className={currentDot === 1 ? "dot active" : "dot"}><button onClick={() => { setCurrentDot(1) }}>19</button></div>
                      <div className={currentDot === 2 ? "dot active" : "dot"}><button onClick={() => { setCurrentDot(2) }}>20</button></div>
                    </div>
                  </div>
                  <div className="timing-right">
                    <div className={currentDot === 0 ? "schdl-text open" : "schdl-text"}>
                      Inauguration
                    </div>
                    <div className={currentDot === 1 ? "schdl-text open" : "schdl-text"}>
                      Competetion
                    </div>
                    <div className={currentDot === 2 ? "schdl-text open" : "schdl-text"}>
                      DJ Night
                    </div>
                  </div>
                </div>
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

export default Homepage;
