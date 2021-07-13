import React from 'react';
import './log.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer';

function Log() {
  return (
      <>
      <Header />
         <div className="content">
         <div className="text">
            Login Form
         </div>
         <form action="#">
            <div className="field">
               <input type="text" required />
               <span className="fas fa-user"></span>
               <label>Email or Phone</label>
            </div>
            <div className="field">
               <input type="password" required />
               <span className="fas fa-lock"></span>
               <label>Password</label>
            </div>
            <div className="forgot-pass">
               <a href="#">Forgot Password?</a>
            </div>
            <button className = 'btn'>Sign in</button>
            <div className="sign-up">
               Not a member?
               <Link  to = "/Sign"> signup now</Link>
            </div>
         </form>
         </div>
         <Footer /> 
      </>
   )
}
export default Log