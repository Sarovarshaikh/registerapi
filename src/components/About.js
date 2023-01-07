import React from "react";
import { Link } from "react-router-dom";
import '../components/About.css'
const About = () => {
  const userData = localStorage.getItem("user-info");
  const userParse = JSON.parse(userData);
  return (
    <div className="table-container" id="full-size">
      <div className="card">
        <h1>Details</h1>
        <table id="table">
          <tr class="table-header">
            <th>Fullname</th>
            <th>Username</th>
            <th>Country</th>
            <th>Email id</th>
            <th>Mobile number</th>
            
          </tr>
          <tr className="table-body">
            <td>{userParse.message.full_name}</td>
            <td>{userParse.message.username}</td>
            <td>{userParse.message.country_row_id}</td>
            <td>{userParse.message.email_id}</td>
            <td>{userParse.message.mobile_number}</td>
          </tr>
        </table>
      </div>
     
       
      <p className="fs-4 mt-4"><Link to="/login" >Back</Link> ⬅️</p>
    </div>
  );
};

export default About;
