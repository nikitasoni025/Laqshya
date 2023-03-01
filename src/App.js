
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage';
import "./Assets/fonts/stylesheet.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
