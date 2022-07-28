import { React, useState } from 'react';
import './Appointment.css';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';
import { css } from "@emotion/react";


function Appointment(props) {
  let [loading, setLoading] = useState(true);
  let [color] = useState("#9ed15c");

  // Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;
  const url = "https://vgsafe-api.herokuapp.com/api/bookAppointment"
  const [data, setData] = useState(
    {

      cfname: "",
      clname: "",
      cemail: "",
      cpno: "",
      cad: "",
      cat: "",
      crp: "null",
      cc: ['noneselected', 'hypertension', 'diabetes', 'arthritis', 'painmanagement'],

    }
  )

  function submit(e) {
    
    e.preventDefault();
    axios.post(url, {

      client_firstname: data.cfname,
      client_lastname: data.clname,
      client_email: data.cemail,
      client_phonenumber: data.cpno,
      appointment_date: data.cad,
      appointment_time: data.cat,
      reason_for_appointment: data.crp,
      client_condition: data.cc
    }).then(res => {
      console.log(res.data)
      alert(res.data.message);
    }).then(function () {
      window.location = "/";
    })
  }
  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata);
    console.log(newdata)
  }
  return (
    <div >
      <div className='Body'>
        <div className='appointment'>
          <div class="container">
            <h2>Book Appointment</h2>
            <div className='formflex'>
              <form onSubmit={(e) => submit(e)}>
                <div className='formgroup'>
                  <label>*First Name</label><br />
                  <input type="text" placeholder='First Name' name="cfname" id='cfname' value={data.cfname} onChange={(e) => handle(e)} required />
                </div>
                <div className='formgroup'>
                  <label>*Last Name</label><br />
                  <input type="text" placeholder='Last Name' name="clname" id='clname' value={data.clname} onChange={(e) => handle(e)} required />
                </div>
                <div className='formgroup'>
                  <label>*Email</label><br />
                  <input type="email" placeholder='Email' name="cemail" id='cemail' value={data.cemail} onChange={(e) => handle(e)} required />
                </div>
                <div className='formgroup'>
                  <label>*Phone Number</label><br />
                  <input type="number" placeholder='Phone Number' name="cpno" id='cpno' value={data.cpno} onChange={(e) => handle(e)}  required/>
                </div>
                <div className='formgroup'>
                  <label>*Preffered Date</label><br />
                  <input type="date" placeholder='Input Date' name="cad" id='cad' value={data.cad} onChange={(e) => handle(e)} required/>
                </div>
                <div className='formgroup'>
                  <label>*Alternative Date</label><br />
                  <input type="date" placeholder='Input alternate date' name="cat" id='cat' value={data.cat} onChange={(e) => handle(e)} required/>
                </div>
                <div className='formgroup' style={{ position: 'relative', top: -40 }}>
                  <label>*Condition</label><br />
                  <select onChange={(e) => handle(e)} name="cc" id="cc" required >
                    <option value={data.cc[0]}>select condition</option>
                    <option value={data.cc[1]} >Hypertension</option>
                    <option value={data.cc[2]}>Diabetes</option>
                    <option value={data.cc[3]} >Arthritis</option>
                    <option value={data.cc[4]}>Pain Management</option>

                  </select>
                </div>
                <div className='formgroup'>
                
                  <textarea  hidden={true} placeholder='Reason For Appointment' name="crp" id='crp' value={data.crp} onChange={(e) => handle(e)}  required/>
                </div>
               
                <button className="submit-button">Book Appointment</button>
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
    </div>
  );
}

export default Appointment;