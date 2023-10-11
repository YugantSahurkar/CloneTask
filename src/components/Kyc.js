import React from "react";
import './css/Kyc.css'
import Header from './Header'
import Footer from './Footer'
import { NavLink } from "react-router-dom";
const kyc = () => {
  return (

    <div>
          <Header/>
      <div>
        <div className="leftcontainerwithimg">
          <i class="fa-solid fa-circle-left"></i>
          <img className="client" src="/images/male.jpg" alt="" />

          <p className="parag">
            Lorem ipsum dolor sit amet, <br />
            consectectur adipiscing elit, <br />
            sed do eiusmod tempor <br />
            incididunt ut labore et dolore <br />
            magna aliqua. Ut enim ad <br />
            minim veniam.
            <br />
            <br />
            <b> Priyanka Chaudhary</b>
            <br />
            <span>UI UX</span>
            
          </p>
          

        </div>
      </div>
      <div className="Rightcontainer">
        <div className="midcontainer">
          <div>
            <strong className="strong" style={{marginTop:'20px'}}>Become a member</strong>
            <br />
            <button className="twobtn">E-kyc</button>
            <button className="twobtn">Manunal-kyc</button>
            <br />
            <p className="paraa" style={{color:'rgb(8, 8, 74)',fontWeight:'20px'}}>Enter Aadhar no.</p> <br />
            <input className="input"
              type="text"
              inputMode="numeric"
              pattern="[0-9]"
              placeholder="Aadhar Card"
            />
            <br />
          
<NavLink to='/registration'>  <button className="otp">Get OTP</button></NavLink>   
       </div>
        </div>
      </div>
<Footer/>
      
    </div>
  );
};

export default kyc;