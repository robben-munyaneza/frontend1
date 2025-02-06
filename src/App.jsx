import React from 'react';
import './index.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Register from './components/Register';
import LoginForm from './components/LoginForm';
import SetRole from './components/setRole';
<<<<<<< HEAD
import DetailedFormFounder from './components/DetailedFormFounder';
import FindersDash from './components/FindersDash';
import SeekerDash from './components/seekerdash';
import DetailedFormSeeker from './components/DetailedFormSeeker';

=======
import FindersDash from './components/Findersdash.jsx';
>>>>>>> bc5cd5702f2477be9da4e929e34487c2d38af7e5


function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/setrole" element={<SetRole/>} />
<<<<<<< HEAD
        <Route path="/founderform" element={<DetailedFormFounder/>} />
        <Route path="/seekerform" element={<DetailedFormSeeker/>} />
        <Route path="/finderdash" element={<FindersDash/>} />
        <Route path="/seekerdash" element={<SeekerDash/>} />




      
=======
      <Route path="/FindersDash" element={<FindersDash/>} />
>>>>>>> bc5cd5702f2477be9da4e929e34487c2d38af7e5
        </Routes>
      </div>
    </Router>
  );
}
export default App;
