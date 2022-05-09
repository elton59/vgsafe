import React from 'react';
import './Appointment.css';
import {   FaPhoneAlt, FaEnvelope } from 'react-icons/fa';


function Appointment(props) {
    return (    
        <div >
            <div className='Body'> 
<div className='appointment'>
<div class="container">
    <h2>Book Appointment</h2>
<div className='formflex'>
  <form>
       <div className='formgroup'>
      <label>*First Name</label><br/>
      <input type="text"   placeholder="*Fist Name" name="fname" />
      </div>
      <div className='formgroup'>
      <label>*Last Name</label><br/>
      <input type="text"   placeholder="*Last Name" name="fname"  />
      </div>
      <div className='formgroup'>
      <label>*Email</label><br/>
      <input type="email"   placeholder="*Email" name="fname" />
      </div>
      <div className='formgroup'>
      <label>*Phone Number</label><br/>
      <input type="number"  placeholder="*Phone Number" name="fname" />
      </div>
      <div className='formgroup'>
      <label>*Date</label><br/>
      <input type="date"   placeholder="*Date" name="fname" />
      </div>
      <div className='formgroup'>
      <label>*Time</label><br/>
      <input type="time"   placeholder="*Time" name="fname" />
       </div>
       <div className='formgroup'>
      <label>*Reason for Appointment</label><br/>
      <textarea   placeholder="*Reason" name="reason" />
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
                <h5 className="footer-title"> &copy; Copyright VGSafe All Rights Reserved</h5>
                  <h5 className="footer-title">Contacts Us</h5>
                  <div className="white"><FaPhoneAlt/>0115523512</div>
                  <div className="white"><FaEnvelope/>vgsafemedicines@gmail.com</div>
                

                 
                </div>
                <br/><br/><br/>
                <div className="site-navigation">
                 
               
                 <div className="white" >Website developed by <a  style={{color:'pink',textDecoration:'none'}}href="https://yubuntutech.co.ke">Yubuntutech solutions </a></div>
               

                
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