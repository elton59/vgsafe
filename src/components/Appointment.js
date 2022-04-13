import React from 'react';
import Navigation from './Navigation';
import './Appointment.css';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin,  FaPhoneAlt, FaTwitter } from 'react-icons/fa';


function Appointment(props) {
    return (    
        <div >
            <div className='Body'> 
<div className='appointment'>
<div class="container">
    <h1>Book Appointment</h1>
<div className='formflex'>
  <form>
       <div className='formgroup'>
      <label>*FirstName</label><br/>
      <input type="text"   value="*FistName" name="fname" />
      </div>
      <div className='formgroup'>
      <label>*LastName</label><br/>
      <input type="text"   value="*LastName" name="fname"  />
      </div>
      <div className='formgroup'>
      <label>*Email</label><br/>
      <input type="email"   value="*Email" name="fname" />
      </div>
      <div className='formgroup'>
      <label>*PhoneNumber</label><br/>
      <input type="number"   value="*PhoneNumber" name="fname" />
      </div>
      <div className='formgroup'>
      <label>*Date</label><br/>
      <input type="date"   value="*Date" name="fname" />
      </div>
      <div className='formgroup'>
      <label>*Time</label><br/>
      <input type="time"   value="*Time" name="fname" />
       </div>
       <div className='formgroup'>
      <label>*Reason for Appointment</label><br/>
      <textarea   value="*Reason" name="reason" />
       </div>
       <div className='formgroup' style={{position:'relative',top:-40}}>
      <label>*Condition</label><br/>
      <select>
      <option>select condition</option>
          <option>Hypertension</option>
          <option>Diabetes</option>
          <option>Arthritis</option>
          <option>Pain Management</option>
      
      </select> 
       </div>
       <input type="submit" value="Book Appointment"/>
  </form>
  </div>
  </div>
</div>
<div className='Footerd'>
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
</div>
        </div>
    );
}

export default Appointment;