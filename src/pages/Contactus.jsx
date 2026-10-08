import React from 'react'
import './Contactus.css'
import Header from "../components/Header/Header"
const Contactus = () => {
  return (
    <div>
      <Header/>
         {/* <!--FOOTER--> */}
    
        <div className="footer-container">
           
         
            {/* <!-- QUICK LINKS --> */}
            <div className="footer-box">
                <h3>QUICK LINKS</h3>
                <a href="#">HOME</a>
                 <a href="#">ABOUT</a> 
                 <a href="#">COURSES</a>
                  <a href="#">CONTACT</a>
    
            </div>
            {/* <!-- CONTACT --> */}
             <div className="footer-box">
                <h3>CONTACT US</h3>
                <p>Email: info@example.com</p>
                <p>phone: +234 816 507 8533</p>
                <p>owerri, Imo state</p>
             </div>
        </div>
         {/* <!--ABOUT--> */}
            <div className="footer-box">
                <h2> OUR DIGITAL SKILLS ACADEMY</h2>
                <p>Empowering students with practical digital skills for a better future</p>

            </div>
    </div>
  );
};

export default Contactus;
