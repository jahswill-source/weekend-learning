import React from 'react'
import pix from "./assets/bruno.png"

const App = () => {
  return (
    <div>
          
        {/* <!--NAV BAR--> */}
        <header>
        <div className="nav-link"><a href="../../Desktop/htmlproject7/home.txt">Home</a></div>
         <div className="nav-link"><a href="../../Desktop/htmlproject7/ABOUT.txt">About</a></div>
          <div className="nav-link"><a href="../../Desktop/htmlproject7/contact.txt">Contact Us</a></div>
           <div className="nav-link"><a href="../../Desktop/htmlproject7/services.txt">Services</a></div>
        </header>
        {/* <!--HERO SECTION--> */}
        <div className="hero-section">
            <div className="overlay">
                <div className="text">
                    <h1>WELCOME TO JBOI PHONES AND SERVICES</h1>
                    <br/>
                    <p>Here we deal on all kinds of phone and phone accessories</p>
<div><button><a href="www.google.com">OPEN HERE</a></button></div>
                </div>

            </div>

        </div>
        {/* <!--ABOUT SECTION--> */}
        <section className="About">
            <div className="about-text">
<h3>Meet The Owner</h3>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum a possimus deleniti hic asperiores vero, in tempora porro commodi id eos expedita praesentium sed ipsam.</p>
<h1>LIST AVAILABLE FOR SALE</h1>
<ol>
    <li>SHOES</li>
      <li>BAGS</li>
        <li>CLOTHES</li>
          <li>TOILETRIES</li>
</ol>
<button>Know More</button>
            </div>
            <div className="img">
                <img src=${pix} alt="pix"/>
            </div>
        </section>
        <section id="testimonials">
<h4>TESTIMONIALS</h4>
<h2>What our students say</h2>
<div className="testimonials-container">
    <div className="card">
<img src="../../Pictures/ronaldo.png"/>
<h3>Jahswill Akpaloke</h3>
<p>This academy completely changed my career. I learnt web development from the scratch to finish and got my first job</p>
    </div>

 <div className="card">
<img src="../../Pictures/ronaldo.png"/>
<h3>michael ukwuoma</h3>
<p>This academy completely changed my career. I learnt web development from the scratch to finish and got my first job</p>
    </div>  
     <div className="card">
<img src="../../Pictures/ronaldo.png"/>
<h3>ikoku ezinne</h3>
<p>This academy completely changed my career. I learnt web development from the scratch to finish and got my first job</p>
    </div>
    </div>
        </section>
        
    {/* <!--CALL TO ACTION--> */}
    <section className="cta">
        <h1>ENROLL FOR OUR ONLINE JOBS <br/> FROM THE COMFORT OF YOUR HOME</h1>
        <a href="" className="hero-btn">CONTACT US</a>
    </section>
    {/* <!--FOOTER--> */}
    <footer className="footer">
        <div className="footer-container">
            {/* <!--ABOUT--> */}
            <div className="footer-box">
                <h2> OUR DIGITAL SKILLS ACADEMY</h2>
                <p>Empowering students with practical digital skills for a better future</p>

            </div>
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
        {/* <!-- COPYRIGHT --> */}
         <div className="copyright">
            <p>&copy; 2026 our digital skills academy. all rights reserved
            </p>
         
         </div>
    </footer>

    
    </div>
  )
}

export default App
