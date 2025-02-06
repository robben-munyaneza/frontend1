import React from 'react';
import './index.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Register from './components/Register';
import LoginForm from './components/LoginForm';
import SetRole from './components/setRole';


function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginForm/>} />
          <Route path="/setrole" element={<SetRole/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
