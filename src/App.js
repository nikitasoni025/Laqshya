
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage';
import "./Assets/fonts/stylesheet.scss";
import Eventpage from './Pages/EventsPage/Eventpage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/events' element={<Eventpage />} />

        </Routes>
      </div>
    </Router>

  );
}

export default App;
