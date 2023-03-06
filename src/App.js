
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage';
import "./Assets/fonts/stylesheet.scss";
import Eventpage from './Pages/EventsPage/Eventpage';
import { useEffect, useState } from 'react';
import music from './Assets/Audios/On my way - pubg mobile.mp3';

import ConatctPage from './Pages/ContactPage/ConatctPage';
import Gallery from './Pages/Gallery/Gallery';

function App() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  console.log(windowSize);
  return (
    <Router basename='/'>
      <div className="App">
      <audio  autoplay id='ouraudio' controls style={{marginTop:"100px",display:"none"}}  src={music}></audio>
        <Routes >
          <Route path='/' element={<Homepage windowSize={windowSize} />} />
          <Route path='/events' element={<Eventpage windowSize={windowSize}/>} />
          <Route path='/gallery' element={<Gallery windowSize={windowSize}/>} />
          <Route path='/contact' element={<ConatctPage windowSize={windowSize}/>} />
          

        </Routes>
      </div>
    </Router>

  );
}

export default App;
