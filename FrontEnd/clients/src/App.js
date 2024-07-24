
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Login, Register, Booking, Dashobrad, MyOffers, MyReservation} from './components/index';
function App() {
  return (
    <>

  <Router>
      <Routes>
    
        <Route path="/" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashobrad" element={<Dashobrad />} />
        <Route path="/MyOffers" element={<MyOffers />} />
        <Route path="/MyReservation" element={<MyReservation />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
