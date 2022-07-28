import { React, useEffect, useState } from 'react';
import { FaPhone, FaEnvelope, FaTrash } from 'react-icons/fa';
import './ViewAppointment.css';
import axios from 'axios';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/BounceLoader";


function ViewAppointment() {
  let [loading, setLoading] = useState(true);
  let [color] = useState("#9ed15c");
  const [post, setPost] = useState([]);

  const url = "https://vgsafe-api.herokuapp.com/api/returnClient";

  
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

  useEffect(() => {
    setLoading(true);
    axios.get(url).then((response) => {
      console.log(response)
      setPost(response.data );
    }).then(setLoading(false));
  }, []);
  if (!post) return null;
  return (

    <div className='Body'>

      <div className='appointment'>
      <ClipLoader color={color} loading={loading} css={override} size={150}  />
        <div class="container">
          <h1>Appointments</h1>
          <div class="table-wrapper">

            <table className='students'>
              <tr>

                <th >ID</th>
                <th>First Name</th>
                <th >Last Name</th>
                <th>Email</th>
                <th >Phone</th>
                <th>Preffered Date </th>
                <th >Alternative Date</th>
                <th >Condition</th>
                <th>Action</th>
              </tr>



              {
                  
               post.map(client => (

                  <tr>
                    <td >{client.client_id}</td>
                    <td>{client.client_firstname}</td>
                    <td>{client.client_lastname}</td>
                    <td >{client.client_email}</td>
                    <td>{client.client_phonenumber}</td>
                    <td>{client.appointment_time}</td>
                    <td>{client.appointment_date}</td>
                    <td>{client.client_condition}</td>
                    <td><button className='delete-button' onClick={ () => {
                       var cid=client.client_id;
    const del_url = "https://vgsafe-api.herokuapp.com/api/deleteClient";
    axios.delete(del_url,{params: {
      c_id: cid}}).then(res => {
      alert(res.data.message);
    }
    ).then(function () {
      window.location = "ViewAppointment";
    })
   
       console.log(client.client_id)

  }}><FaTrash />Delete</button></td>
                  </tr>)
                  )
                   
                  }

                 


            </table>
          </div>

        </div>
      </div>
      <div className='Footerd'>
        <div className="waterdrop"></div>

        <div className="footer-top">
          <div className="pt-exebar">
            <div className="col-md-3">

            </div>
          </div>
          <div className="">
            <div className="row">
              <div className="">
                <div className="wclassNameget footer_wclassNameget">

                  <div className="site-navigation">
                    <h5 className="footer-title"> &copy; Copyright VGSafe All Rights Reserved</h5>
                    <h5 className="footer-title">Contacts Us</h5>
                    <div className="white"><FaPhone /><a href="tel:+254115523512" style={{ color: '#9ed15c', textDecoration: 'none' }}>+254115523512</a>/<a href="tel:+254106972134" style={{ color: '#9ed15c', textDecoration: 'none' }}>+254106972134</a></div>
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


export default ViewAppointment;