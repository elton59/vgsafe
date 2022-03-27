import React from 'react';
import './AboutUs.css';
import aboutus from '../assets/images/aboutus.png';
function AboutUs() {
    return (
        <div>
      
         <div className='aboutus_s'>
             
             <div className='aboutuscard_s'>
         
          <div className='aboutuscardimgdiv_s'>
           <div className='aboutuscardimg_s'>
               <img src={aboutus}/>
           </div>
           </div>
           <div className='aboutuscardtext_s'>
         <h1 style={{color:'#0161b8'}}>WHO WE ARE</h1>
         <p>VG Safe Medicines is a healthcare-based organization focused on optimizing therapeutic outcomes and improving the quality of life in chronic conditions by ensuring safety, efficacy, and availability of drugs to clients.</p>
               <p>We offer our clients individualized medication therapy management aimed at promoting rational use of drugs, medication adherence, and minimizing the risk of adverse drug effects and complications. This we achieve by scrutinizing clients’ prescriptions, advising clients on safe and efficacious use of their drugs, performing regular follow-ups to ensure medication adherence and response to therapy, and responding to queries of clients about their experiences after taking medications.
                 <p>We outsource drugs for our clients with the aim of enhancing the affordability and availability of their drugs. We are keen on the specifications of the drugs used by our clients in terms of the exact drug component, the dose strength, the dosage form, and their brand of preference. </p>
</p>
          
          </div>
           </div>
       
      
           <div className="mainabout">
          <div className='mainaboutcard'>
            <h3>Mission</h3>
            <br/>
     

          </div>

          <div className='mainaboutcard'>
            <h3>Vision</h3>
            <br/>
            
            
          </div>
          <div className='mainaboutcard'>
            <h3>Core Values</h3>
         
         
          </div>
        
        </div>
         
          
         </div>
        </div>
    );
}

export default AboutUs;