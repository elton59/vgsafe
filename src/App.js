import Header from './components/Header'
import './App.css';
import Services from './components/Services';
import  {BrowserRouter as Router,Route,Routes}from 'react-router-dom'
import Appointment from './components/Appointment.js';
import AboutUs from './components/AboutUs';
import Main from './components/Main';
function App() {
  return (
    <>
    <div className="App">
    <Router>
    
    <Header/>
    <Routes>
    < Route  path ="/" exact element={<Main/>}/>
    < Route path="/Appointment" exact  element={<Appointment/>}/>
    < Route path="/Services" exact  element={<Services/>}/>
    < Route path="/AboutUs" exact  element={<AboutUs/>}/>
    </Routes>
    
  
    </Router>
    </div>
    
    </>
  );
}

export default App;
