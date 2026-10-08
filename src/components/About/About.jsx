import React from 'react'
import "./About.css"
import pixes from "../../assets/bruno.png"
const About = () => {
  return (
    <div>
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
                <img src={pixes} alt="pix"/>
            </div>
        </section>
         
    </div>
  )
}

export default About
