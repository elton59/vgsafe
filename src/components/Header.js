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
                    <p><FaEnvelope/> &nbsp;vgsafemedicines@gmail.com <br/>  <FaPhone/> &nbsp; 0115523512</p>  
                 
                    </div> 
             </div>
             <Navigation/>
        </>

    );
}

export default Header;