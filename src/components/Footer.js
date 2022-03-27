import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin,  FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import './Footer.css';


function Footer() {
    return (
        <div >
        <div className='Footer'>
    <div id="waterdrop"></div>

      <div className="footer-top">
        <div className="pt-exebar">
        <div className="col-md-3">
            
            </div>
        </div>
        <div className="">
          <div className="row">
            <div className="">
              <div className="widget footer_widget">
               
                <div className="site-navigation">
                 
                  <h5 className="footer-title">Contacts Us</h5>
                  <div className="white"><FaPhoneAlt/>0115523512</div>
               

                 
                </div>
              </div>

            </div>
         
          
          </div>
        </div>
      </div>
    
 
 

        </div>
        <div>
  
       </div>
       </div>
    );
}

export default Footer;