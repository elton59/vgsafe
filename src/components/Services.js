import React from 'react';
import './Service.css';
import athritis from '../assets/images/arthritis.png';
import diabetes from '../assets/images/diabetes.png';
import hypertension from '../assets/images/hypertension.png';
import drugoutsource from '../assets/images/drugoutsource.png';
import painManagement from '../assets/images/painmanagement.png';
import { FaPhone, FaEnvelope } from 'react-icons/fa';


function Services() {
  return (
    <div>
      <div>

      </div>
      <div className='service'>
        <div className='serviceheader'>
          <h1>Medication Therapy Management</h1></div><br />
        <div className='serviceflex'>
          <div className='servicecard'>
            <h3>Hypertension management.</h3>

            <div className='servicecardimgdiv'>
              <div className='servicecardimg'>
                <img src={hypertension} />
              </div>
            </div>

            <div className='servicecardtext'>
              <p>
                <ul>

                  <li>	Identifying uncontrolled hypertension.</li>
                  <li>Educating clients about hypertension and its treatment.</li>
                  <li>Advising clients on rational use of their drugs.</li>
                  <li>Identifying and advising clients on adverse drug effects.</li>
                  <li>	Advising clients on lifestyle modifications to improve their health outcomes.</li>
                  <li>Regular follow up to check on medication adherence and response to therapy.</li>

                </ul>
              </p>
            </div>
          </div>
          <div className='servicecard'>
            <h3>Diabetes management</h3>

            <div className='servicecardimgdiv'>
              <div className='servicecardimg'>
                <img src={diabetes} />
              </div>
            </div>
            <div className='servicecardtext'>
              <p><ul>
                <li>	Identifying uncontrolled blood sugars.</li>
                <li>Educating clients about diabetes and its treatment.</li>
                <li>	Advising clients on rational use of their drugs.</li>
                <li>Identifying and advising clients on adverse drug effects.</li>
                <li>Advising clients on lifestyle modifications to improve their health outcomes.</li>
                <li>Regular follow up to check on medication adherence and response to therapy.</li>


              </ul>
              </p>
            </div>
          </div>
          <div className='servicecard'>
            <h3>Arthritis Management (Rheumatoid and Osteoarthritis)</h3>
            <div className='servicecardimgdiv'>
              <div className='servicecardimg'>
                <img src={athritis} />
              </div>
            </div>
            <div className='servicecardtext'>
              <p> <ul>
                <li>Educating clients about arthritis and its treatment.</li>
                <li>	Advising clients on rational use of their drugs.</li>
                <li>	Advising clients on pain management in arthritis</li>
                <li>	Identifying and advising clients on adverse drug effects.</li>
                <li>	Advising clients on lifestyle modifications to improve their.</li> health outcomes
                <li>	Regular follow up to check on medication adherence and response to therapy.</li>


              </ul>
              </p>
            </div>
          </div>
          <div className='servicecard'>
            <h3>Pain management</h3>

            <div className='servicecardimgdiv'>
              <div className='servicecardimg'>
                <img src={painManagement} />
              </div>
            </div>
            <div className='servicecardtext'>
              <p> <ul>
                <li>	Educate clients about pain and various treatment option available.</li>
                <li>	Advising clients on safe and efficacious management of pain.</li>
                <li>	Regular follow up to check on medication adherence and response to therapy.</li>



              </ul>
              </p>
            </div>
          </div>

        </div>
        <div className='serviceheader'><h1>Drug Outsourcing</h1></div><br />
        <div className='serviceflex' >

          <div className='servicecard' >
            <div className='servicecardimgdiv'>
              <div className='servicecardimg'>
                <img src={drugoutsource} />
              </div>
            </div>
            <div className='servicecardtext'>
              <p><ul><li>We outsource drugs for our clients with the aim of enhancing the affordability and availability of their drugs. We are keen on the specifications of the drugs used by our clients in terms of the exact drug component, the dose strength, the dosage form, and their brand of preference.</li></ul></p>
            </div>
          </div>

        </div>
      </div>
      <div className='Footerc'>
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
                    <div className="white"><FaEnvelope />vgsafemedicines@gmail.com</div>



                  </div>
                  <br /><br /><br />
                  <div className="site-navigation">


                    <div className="white" >Website developed by <a style={{ color: 'pink', textDecoration: 'none' }} href="https://yubuntutech.co.ke">Yubuntutech solutions </a></div>



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

export default Services;