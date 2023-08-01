import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Register from './component/Register';
import Login from './component/Login';
import Bookride from './component/Bookride';
import Services from './component/Services';
import BookingList from './component/BookingList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/bookride" element={<Bookride />} />
      <Route path="/services" element={<Services/>}/>
      <Route path="/booking_list" element={<BookingList />}/>
  </Routes>
  );
}

export default App;
