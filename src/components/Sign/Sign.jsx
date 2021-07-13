import React from 'react';
import './sign.css'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Sign() {
   return (
      <>
         <Header />
         <div className="content">
         <div className="text">
            Sign-Up Form
         </div>
         <form action="#">
            <div className="field">
               <input type="number" placeholder="Phone" required />
               <span className="fas fa-phone"></span>
            </div>
            <div className="field">
               <input type="email" placeholder="Email" required />
               <span className="fas fa-user"></span>
            </div>
            <div className="field">
               <input type="password" placeholder="Password" required />
               <span className="fas fa-lock"></span>
            </div>
            <div className="forgot-pass">
               <a href="#">Forgot Password?</a>
            </div>
            <button className = "btn1">Sign Up</button>
            <div className="sign-up">
               Already a member?
               <Link to = "/login">Login now</Link>
            </div>
         </form>
         </div>
         <Footer />
      </>
   )
}
export default Sign;