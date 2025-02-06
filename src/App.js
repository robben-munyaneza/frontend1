import logo from './logo.svg';
import './index.js';
import Home from './components/Home.js';
import ImportButton from './components/ImportButton.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DetailedFormFounder from './components/DetailedFormFounder.jsx';
import DetailedFormSeeker from './components/DetailedFormSeeker.jsx';


    function App() {
      return (
        <div>
          <DetailedFormFounder/>
          {/* <DetailedFormSeeker/> */}
        </div>
      );
    }
    
  
    


export default App;
