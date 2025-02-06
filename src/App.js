import React from 'react';
import FindersDash from './components/findersdash';
import SeekerDash from './components/seekerdash';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FindersDash />} />
          <Route path="/finder-dashboard" element={<FindersDash />} />
          <Route path="/seeker-dashboard" element={<SeekerDash />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
