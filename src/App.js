import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Register from './components/Register';
import LoginForm from './components/LoginForm';
import './index.js';
import SetRole from './components/setRole';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SetRole/>} />
        </Routes>
      </div>
    </Router>
  );
}

    

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginForm/>} />
      </Routes>
    </Router>
  );
};

export default App;
