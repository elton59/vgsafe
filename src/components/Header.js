import React from 'react';
import { IconContext } from "react-icons";
import {  FaAddressCard, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Navigation from './Navigation';
import './Header.css';
import {Link} from 'react-router-dom'
function Header() {

    return (

      <>
            <div className="header">
            <div className='headericons'>
            <IconContext.Provider value={{ color: "white",size:"22px", className: "global-class-name"}}>
            <FaFacebook/>&nbsp; 
            <FaInstagram/>&nbsp;
            <FaLinkedin/>&nbsp;
            <FaTwitter/>&nbsp;
            <FaWhatsapp/>&nbsp;
            </IconContext.Provider>
            </div>
            <Link to="/Appointment">
            <button className='headerbutton'>BookAppointment</button>
            </Link>
                <div className="headercontact">
                    <p> <a href="mailto:vgsafemedicines@gmail.com" style={{color:'#9ed15c',textDecoration:'none'}}><FaEnvelope/> &nbsp;vgsafemedicines@gmail.com</a><br/> <FaPhone/> &nbsp; <a href="tel:+254115523512" style={{color:'#9ed15c',textDecoration:'none'}}>+254115523512</a>/<a href="tel:+254106972134" style={{color:'#9ed15c',textDecoration:'none'}}>+254106972134</a></p>  
                 
                    </div> 
             </div>
             <Navigation/>
        </>

    );
}

export default Header;