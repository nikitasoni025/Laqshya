
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage';
import "./Assets/fonts/stylesheet.scss";
import Eventpage from './Pages/EventsPage/Eventpage';
import { useEffect, useState } from 'react';
import music from './Assets/Audios/On my way - pubg mobile.mp3';
import ConatctPage from './Pages/ContactPage/ConatctPage';
import Gallery from './Pages/Gallery/Gallery';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import Loginpage from './Pages/LoginPage/Loginpage';
import Dashboard from './Pages/AdminPannel/Dashboard/Dashboard';
import Dataprovider from './Context/Dataprovider';

function App() {

  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);



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
  return (
    <Dataprovider>
      <Router basename='/'>
        <div className="App">
          <audio id='ouraudio' controls style={{ marginTop: "100px", display: "none" }} src={music}></audio>
          <Routes >
            <Route path='/' element={<Homepage isUserAuthenticated={isUserAuthenticated} windowSize={windowSize} />} />
            <Route path='/events' element={<Eventpage isUserAuthenticated={isUserAuthenticated} windowSize={windowSize} />} />
            <Route path='/gallery' element={<Gallery  windowSize={windowSize} />} />
            <Route path='/contact' element={<ConatctPage isUserAuthenticated={isUserAuthenticated} windowSize={windowSize} />} />
            <Route path='/register' element={<RegisterPage  windowSize={windowSize} />} />
            <Route path='/signin' element={<Loginpage setIsUserAuthenticated={setIsUserAuthenticated} windowSize={windowSize} />} />

            {/* ADMIN ROUTE START HERE */}
            <Route path='/admin/dashboard/:dashid' element={< Dashboard windowSize={windowSize} />} />


          </Routes>
        </div>
      </Router>
    </Dataprovider>

  );
}

export default App;
