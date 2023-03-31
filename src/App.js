
import './App.scss';
import { BrowserRouter as Router, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import "./Assets/fonts/stylesheet.scss";
import Eventpage from './Pages/EventsPage/Eventpage';
import { useEffect, useState } from 'react';
import music from './Assets/Audios/WhatsApp Audio 2023-03-18 at 12.50.14 AM.mp3';
import ConatctPage from './Pages/ContactPage/ConatctPage';
import Gallery from './Pages/Gallery/Gallery';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import Loginpage from './Pages/LoginPage/Loginpage';
import Dashboard from './Pages/AdminPannel/Dashboard/Dashboard';
import Dataprovider from './Context/Dataprovider';
import MyEventPage from './Pages/MyEventPage/MyEventPage';
import Adminlogin from './Pages/AdminPannel/AdminLogin/Adminlogin';
import { API } from './Services/Api';
import PostPage from './Pages/PostPage/PostPage';
import MyPost from './Pages/MyPost/MyPost';

const PrivateRoute = ({ isAdminAuthenticated, ...props }) => {
  return isAdminAuthenticated ? <><Outlet /></> : <Navigate replace to={'/admin'} />
}

function App() {

  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);


  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);


  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    const isAdmin = sessionStorage.getItem('adminId');
    if (isAdmin) {
      setIsAdminAuthenticated(true);
    } else {
      setIsAdminAuthenticated(false);
    }
    const timer = setInterval(() => {
      if (isAdmin) {
        setIsAdminAuthenticated(true);
      } else {
        setIsAdminAuthenticated(false);
      }
    }, 5000);
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      clearInterval(timer);
    };
  }, []);


  return (
    <Dataprovider>
      <Router basename='/'>
        <div className="App">
          <audio id='ouraudio' controls style={{ marginTop: "100px", display: "none" }} src={music}></audio>
          <Routes >
            <Route path='/' element={<Homepage isUserAuthenticated={isUserAuthenticated} windowSize={windowSize} />} />
            <Route path='/events' element={<Eventpage isUserAuthenticated={isUserAuthenticated} windowSize={windowSize} />} />
            <Route path='/gallery' element={<Gallery windowSize={windowSize} />} />
            <Route path='/contact' element={<ConatctPage isUserAuthenticated={isUserAuthenticated} windowSize={windowSize} />} />
            <Route path='/register' element={<RegisterPage windowSize={windowSize} />} />
            <Route path='/signin' element={<Loginpage setIsUserAuthenticated={setIsUserAuthenticated} windowSize={windowSize} />} />
            <Route path='/myevents' element={<MyEventPage setIsUserAuthenticated={setIsUserAuthenticated} windowSize={windowSize} />} />
            <Route path='/posts' element={<PostPage  windowSize={windowSize} />} />
            <Route path='/mypost/:id' element={<MyPost  windowSize={windowSize} />} />

            {/* ADMIN ROUTE START HERE */}
            <Route path='/admin' element={< Adminlogin setIsAdminAuthenticated={setIsAdminAuthenticated} windowSize={windowSize} />} />
            <Route path='/admin/dashboard/:dashid' element={< Dashboard setIsAdminAuthenticated={setIsAdminAuthenticated} windowSize={windowSize} />} />



          </Routes>
        </div>
      </Router>
    </Dataprovider>

  );
}

export default App;
