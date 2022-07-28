import React from 'react';
import './AboutUs.css';
import aboutus from '../assets/images/aboutus.png';
import { FaPhone,FaEnvelope } from 'react-icons/fa';


function AboutUs() {
    return (
        <div>
      
         <div className='aboutus_s'>
     
             <div className='aboutuscard_s'>
               <div className='aboutuscard_s-edit'>
             <h1 style={{color:'black',textAlign:'center'}}>WHO WE ARE</h1>
             </div>
          <div className='aboutuscardimgdiv_s'>
           <div className='aboutuscardimg_s'>
               <img src={aboutus}/>
           </div>
           </div>
           <div className='aboutuscardtext_s'>
         
         <p >VG Safe Medicines is a healthcare-based organization focused on optimizing therapeutic outcomes and improving the quality of life in chronic conditions by ensuring safety, efficacy, and availability of drugs to clients.</p>
         <p >We offer our clients individualized medication therapy management aimed at promoting rational use of drugs, medication adherence, and minimizing the risk of adverse drug effects and complications. This we achieve by scrutinizing clients’ prescriptions, advising clients on safe and efficacious use of their drugs, performing regular follow-ups to ensure medication adherence and response to therapy, and responding to queries of clients about their experiences after taking medications.</p>

         <p >We outsource drugs for our clients with the aim of enhancing the affordability and availability of their drugs. We are keen on the specifications of the drugs used by our clients in terms of the exact drug component, the dose strength, the dosage form, and their brand of preference. </p>



          
          </div>
           </div>
       
           <div className="mainabout">
          <div className='mainaboutcard'>
            <h2>Mission</h2>
            <ul>
           <li> <p>To be the most trusted healthcare partner in chronic conditions</p></li>
            <br/>
            </ul>
     

          </div>

          <div className='mainaboutcard'>
            <h2>Vision</h2>
            <ul>
            <li><p>To optimize therapeutic outcomes and improve the quality of life in chronic conditions by ensuring safety, efficacy, and availability of drugs.</p></li>
            <br/>
            </ul>
            
          </div>
          <div className='mainaboutcard'>
            <h2>Core Values</h2>
         <ul >
         <p>
           <li>Rational use of Medicines.</li>
            <li>	Medication Adherence.</li>
             <li>Improved Quality of Life.</li>
             </p>
             </ul>
         
          </div>
        
        </div>
         
          
         </div>
         <div className='Footerb'>
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
                  <div className="white"><FaPhone/> <a href="tel:+254115523512" style={{color:'#9ed15c',textDecoration:'none'}}>+254115523512</a>/<a href="tel:+254106972134" style={{color:'#9ed15c',textDecoration:'none'}}>+254106972134</a></div>
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
    );
}

export default AboutUs;