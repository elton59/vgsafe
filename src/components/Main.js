import React from 'react';
import './Main.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import athritis from '../assets/images/arthritis.png';
import diabetes from '../assets/images/diabetes.png';
import hypertension from '../assets/images/hypertension.png';
import painManagement from '../assets/images/painmanagement.png';
import drugoutsource from '../assets/images/drugoutsource.png';
import { Carousel } from 'react-responsive-carousel';
import aboutus from '../assets/images/aboutus2.jpg';
import aboutus2 from '../assets/images/aboutus.png';
import {Link} from 'react-router-dom'
import { FaChevronCircleLeft, FaEnvelope } from 'react-icons/fa';
import { FaChevronCircleRight } from 'react-icons/fa';
import { FaPhone}from 'react-icons/fa';


function Main() {
  return (
    <div className="wrapper">
     
      <div className="corouselsection">
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          showThumbs={false}
          showDots={false}
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  position:'absolute',
                  top:'230px',
                  right: "70px",
                  width:"40px",
                  fontSize:"20px",
                  backgroundColor:"transparent",
                  color:"black",
                  borderStyle:"none"
                }}
              >
                <FaChevronCircleRight  />
              </button>
            )
          } 
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
               title={label}
                style={{ 
                  position:'absolute',
                  top:'230px',
                  right:"90%",
                  width:"40px",
                  fontSize:"20px",
                  backgroundColor:"white",
                  color:"black",
                  zIndex:"2",
                  borderStyle:"none"
                }}
              >
                <FaChevronCircleLeft />
              </button>
            )
          }
      //  renderArrowNext={(onClickHandler, hasNext, label) =>
      //       hasNext && (
      //         <button
      //           type="button"
      //           onClick={onClickHandler}
      //           title={label}
      //           style={{
      //             position:'absolute',
      //             top:'230px',
      //             right: "100px",
      //             width:"40px",
      //             fontSize:"20px",
      //             backgroundColor:"white",
      //             color:"black",
      //             borderStyle:"none"
      //           }}
      //         >
      //           <FaChevronCircleRight  />
      //         </button>
      //       )
      //     } 
          >
       
        

      
          
          <div>
            <div class="">
              <img src={aboutus} alt="hypertension" className="corouselimage" />

            </div>
          </div>
        
           
          <div>
            <div class="">
              <img src={hypertension} alt="athritis" className="corouselimage" />
            </div>
          </div>
          
          <div>
            <div class="">
              <img src={diabetes} alt="athritis" className="corouselimage" />
            </div>
          </div>

         

          <div>
            <div class="">
              <img src={athritis} alt="athritis" className="corouselimage" />
            </div>
          </div>
          <div>
            <div class="">
              <img src={painManagement} alt="pain_management" className="corouselimage" />
            </div>
          </div>
          <div>
            <div class="">
              <img src={drugoutsource} alt="drug_outsourcing" className="corouselimage" />
            </div>
          </div>

        </Carousel>
      </div>
      <>
      <div className="aboutus">
        <div className='aboutus-edit'>
        <h1>ABOUT US</h1>
        </div>
        <div className="aboutusimgsection">
          <img src={aboutus2} className="aboutusimg" />
        </div>
        <div className="aboutusdescriptionsection">
         
          <p>VG Safe Medicines is a healthcare-based organization focused on optimizing therapeutic outcomes and improving the quality of life in chronic conditions by ensuring safety, efficacy, and availability of drugs to clients.</p>
          <Link to="/AboutUs"> <button className="aboutusbutton">Read More</button></Link>
        </div>

      </div>
      </>
      <div className="mainservicescontainer">
        <div className='mainserviceheader'>
      <h1>OUR SERVICES</h1>
      <p>We provide medication therapy management and drug outsourcing services. &nbsp; &nbsp; <Link to="/Services"><br/><br/>
            <button className='aboutusbutton2'>Read More</button>
            </Link></p></div>
        <div className="mainservice">
          <div className='mainservicecard'>
          <div className='mainservicetitle'>
            <h3>Hypertension</h3>
            </div>
              <img src={hypertension}/>

            <Link to="/Services">
            <br/><br/>
            <button className='readmore'>Read More</button>
            </Link>
          </div>

          <div className='mainservicecard'>
          <div className='mainservicetitle'>
            <h3>Diabetes Management</h3>
       </div>
            <img src={diabetes}/>
            <Link to="/Services">
            <br/><br/>
            <button className='readmore'>Read More</button>
            </Link>
          </div>
          <div className='mainservicecard'>
            <div className='mainservicetitle'>
            <h3>Arthritis Management (Rheumatoid and Osteoarthritis)</h3>
            </div>
          <img src={athritis}/>
            <Link to="/Services">
            <br/><br/>
            <button className='readmore'>Read More</button>
            </Link>
          </div>
          <div className='mainservicecard'>
          <div className='mainservicetitle'>
            <h3>Pain management in chronic conditions</h3>
            </div>
          <img src={painManagement}/>
            <Link to="/Services">
              <br/><br/>
            <button className='readmore'>Read More</button>
            </Link>
          </div>
          <div className='mainservicecard'>
          <div className='mainservicetitle'>
            <h3>Drug Outsourcing</h3>
            </div>
          <img src={drugoutsource}/>
            <Link to="/Services">
              <br/><br/>
            <button className='readmore'>Read More</button>
            </Link>
          </div>
        </div>
        </div>
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
                <h5 className="footer-title"> &copy; Copyright VGSafe All Rights Reserved</h5>
                  <h5 className="footer-title">Contacts Us</h5>
                  <div className="white"><FaPhone/>  <a href="tel:+254115523512" style={{color:'#9ed15c',textDecoration:'none'}}>+254115523512</a>/<a href="tel:+254106972134" style={{color:'#9ed15c',textDecoration:'none'}}>+254106972134</a></div>
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

export default Main;