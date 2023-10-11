
import Header from './Header'
import Footer from './Footer';
import  './css/Login.css'
import { NavLink } from 'react-router-dom';
function Login(){
    
    return<>
    <Header/>
    <div>
      <div className="main1">
        <h1 className="head"> Benefits of Saving Account </h1>
        <p className="gg">
          {" "}
          <i class="fa fa-hand-o-right" aria-hidden="true"></i>Liquidity. One of
          the benefits of opening a savings account <br />
          is that it offers you liquidity
        </p>
        <p className="gg">
          {" "}
          <i class="fa fa-hand-o-right" aria-hidden="true"></i>Liquidity. One of
          the benefits of opening a savings account <br />
          is that it offers you liquidity
        </p>
        <p className="gg">
          {" "}
          <i class="fa fa-hand-o-right" aria-hidden="true"></i>Liquidity. One of
          the benefits of opening a savings account <br />
          is that it offers you liquidity
        </p>
        <p className="gg">
          {" "}
          <i class="fa fa-hand-o-right" aria-hidden="true"></i>Liquidity. One of
          the benefits of opening a savings account <br />
          is that it offers you liquidity
        </p>
        <p className="gg">
          {" "}
          <i class="fa fa-hand-o-right" aria-hidden="true"></i>Liquidity. One of
          the benefits of opening a savings account <br />
          is that it offers you liquidity
        </p>
      </div>
      <div class="main">
        <div class="container">
          <div class="input">
            <span className="spann" style={{marginBottom:'5px'}}>Enter Number</span>
            <input
              class="Email"
              type="Email"
              name=""
              placeholder="Enter your Email Id"
            />
            <br />
            <br />
            <span className="spann1">Enter Password</span>
            <input
              class="password"
              type="Password"
              name="Password"
              id=""
              placeholder="password"
            />
          </div>
          
          <NavLink to='/status'><button class="btn">Log In</button></NavLink>
          <a href class="frgt" style={{marginTop:'20px'}}>
            Forgot Password?
          </a>
          <br /> <br />
          <a href="form.html" class="asdfghjkl">
            Become a Member{" "}
          </a>
        </div>
      </div>
    </div>
    <Footer/>
    </>
}
export default Login;