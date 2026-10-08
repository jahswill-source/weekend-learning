import React from 'react'
import pix from "../../assets/bruno.png";
import "./Testimonials.css"
const Testimonials = () => {
  return (
    <div>
        {/* TESTIMONIALS */}
          <section id="testimonials">
<h4>TESTIMONIALS</h4>
<h2>What our students say</h2>
<div className="testimonials-container">
    <div className="card">
<img src={pix}/>
<h3>Jahswill Akpaloke</h3>
<p>This academy completely changed my career. I learnt web development from the scratch to finish and got my first job</p>
    </div>

 <div className="card">
<img src={pix}/>
<h3>michael ukwuoma</h3>
<p>This academy completely changed my career. I learnt web development from the scratch to finish and got my first job</p>
    </div>  
     <div className="card">
<img src={pix}/>
<h3>ikoku ezinne</h3>
<p>This academy completely changed my career. I learnt web development from the scratch to finish and got my first job</p>
    </div>
    </div>
        </section>
    </div>
  )
}

export default Testimonials
