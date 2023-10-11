import { NavLink } from 'react-router-dom';
import Header from './Header'

import './css/Registration.css'
function Registration(){

    return<>
    <Header/>
       <form>
        <div> 
          <strong>Personal Details</strong>
<div className="subnameone"><span>Name</span>      <span >Surname</span> </div>
 
          <br />
      <input 
            className="name"
            type="text"
            inputMode="text"
            placeholder="Your name"
          />
          
          <input
            className="name"
            type="text"
            inputMode="text"
            placeholder="Your Last Name"
          />
        </div>
        <div className="photo">
          <img className="photo" src="./images/female.jpeg" alt="" />
        </div>
        <div>
          <strong>Aadhar Number</strong>
          <br />
          <input
            type="text"
            className="nums"
            inputMode="numeric"
            pattern="[0-9]"
            placeholder="Aadhar Card"
          />
          <br />
          <strong>Mobile Number</strong>
          <br />
          <input
            type="text"
            className="nums"
            inputMode="numeric"
            id=""
            placeholder="Mobile Number"
          />
          <br />
           <strong>Email Address</strong>
           <br />
          <input
            type="email"
            className="nums"
            name=""
            id=""
            placeholder="Email"
          />
        </div>
        <div className="subnameB"><span>Address</span>      <span >Pin Code</span> </div>
        <div className="addr">
          <input
            type="text"
            className="add"
            name="text"
            id=""
            placeholder="Address"
          />
          <input
            type="text"
            className="add"
            inputMode="numeric"
            placeholder="pin code"
          />
        </div>
        <div className="subnamec"><span>Country</span>      <span >State</span>  <span>District</span></div>
        <div className="region">
          <input
            type="text"
            className="state"
            name="Country"
            id=""
            placeholder="Country"
          />
          <input
            type="text"
            className="state"
            name="State"
            id=""
            placeholder="State"
          />
          <input
            type="text"
            className="state"
            name="District"
            id=""
            placeholder="District"
          />
        </div>
        <div className="subnamed"><span>Name</span>      <span >Middle Name</span>  <span>Subname </span></div>

        <div className="Nominee Details">
          <input
            type="text"
            className="details"
            name="Name"
            id=""
            placeholder="Name"
          />
          <input
            type="text"
            className="details"
            name="Middle Name"
            id=""
            placeholder="Middle Name"
          />
          <input
            type="text"
            className="details"
            name="Surname"
            id=""
            placeholder="Surname"
          />
        </div>

        <div className="Nominee Details">
          <h2>Nominee Details</h2>
        <div className="subnamee"><span>Name</span>      <span >Middle Name</span></div>
          <input
            type="text"
            className="sdetails"
            name="Nominee Relation"
            id=""
            placeholder="Nominee Relation"
          />
          <input
            type="text"
            className="sdetails"
            name="Enter Pan Card No"
            id=""
            placeholder="Enter Pan Card No"
          />
        </div>
        <div className="submit">
            <NavLink to='/login' style={{textDecoration:'none'}}> <button className="submitbtn">Submit</button> </NavLink>
         
        </div>
      </form>
      <div className="footers">
        <fc>
          Company <br />
          About Us <br />
          Blog <br />
          Careers <br />
        </fc>
        <fc>
          Support <br />
          Help Center
          <br />
          Safety Center
          <br />
          Community Guidelines <br />
        </fc>
        <fc>
          Legal
          <br />
          Cookies Policy
          <br />
          Privacy Policy
          <br />
          Term of Service
          <br />
          Law Enforcement <br />
        </fc>
        <fc>Install App</fc>
        <fc />
      </div>
   
    
    </>
}export default Registration;