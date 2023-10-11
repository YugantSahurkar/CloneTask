import Header from "./Header";

import './css/Status.css'
function Status(){
    return<>
<Header/>
<div className="form">
      <form>
        <h2>Personal Details</h2>
        <div className="flex-aligner">
          <div className="fname label-box">
            <label>FirstName</label><br />
            <input type="text" placeholder="Joe" /><br />
          </div>
          <div className="lname label-box">
            <label>LastName</label><br />
            <input type="text" placeholder="Doe" /><br />
          </div>
        </div>
        <div className="label-box">
          <label>Aadhar Number</label><br />
          <input type="number" placeholder="12345678909876" /><br />
        </div>
        <div className="label-box">
          <label>Mobile Number</label><br />
          <input type="number" placeholder="1236547890" /><br />
        </div>
        <div className="label-box">
          <label>Your M pin for Login</label><br />
          <input type="text" placeholder="4569" /><br />
        </div>
        <div className="form-img">
          <img src="/images/female.jpeg" alt="Form" />
        </div>
      </form>

      <div className="sidebar-division">
        <h3>Application Status</h3>
        <h5>Application_statement</h5>
        <h4>InProgress</h4>
        <h5>Approved</h5>
        <div className="line-img">
          <img style={{height:'400px', width:'450px'}} src="/images/dot1.png" alt="Line" />
        </div>
      </div>
      <div className="clear"></div>
    </div>
    <div className="footer1">
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
}export default Status;