import React from 'react';      
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

    


export default App;
