import React from 'react';
import './Navigation.css';
import vigisafe from '../assets/logo/vglogo.png';
import {Link} from 'react-router-dom';

function Navigation(props) {
    return (
        < div className='navigationwrapper'>
        <div className="navigation">
          
            <div className="navigationtabs">
                <Link to="/">
            <p className="navigationlink">Home</p>
            </Link>
            <Link to="/AboutUs">
          <p className="navigationlink">About Us</p>
          </Link>
          <Link to="/Services">
          <p className="navigationlink">Services</p></Link>
        
          <Link to="/Appointment">
          <p className="navigationlink">Appointment</p> 
          </Link> 
            </div>
           
           
        </div>
        <div className="navigationlogo">
            <img src={vigisafe} className="logoimg"alt="vigisafe"/>
            </div>
        </div>
    );
}

export default Navigation;