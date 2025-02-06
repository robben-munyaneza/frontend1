import React from 'react';
import './index.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Register from './components/Register';
import LoginForm from './components/LoginForm';
import SetRole from './components/setRole';
import DetailedFormFounder from './components/DetailedFormFounder';
import FindersDash from './components/FindersDash';
import SeekerDash from './components/seekerdash';
import DetailedFormSeeker from './components/DetailedFormSeeker';



function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/setrole" element={<SetRole/>} />
        <Route path="/founderform" element={<DetailedFormFounder/>} />
        <Route path="/seekerform" element={<DetailedFormSeeker/>} />
        <Route path="/finderdash" element={<FindersDash/>} />
        <Route path="/seekerdash" element={<SeekerDash/>} />




      
        </Routes>
      </div>
    </Router>
  );
}
export default App;
