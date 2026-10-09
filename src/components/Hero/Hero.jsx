import React from 'react'
import "./Hero.css"
import {Link} from 'react-router-dom'
const hero = () => {
  return (
    <div>
    
              {/* <!--HERO SECTION--> */}
        <div className="hero">
            <div className="overlay">
                <div className="text">
                    <h1>WELCOME TO JBOI PHONES AND SERVICES</h1>
                    <p>Here we deal on all kinds of phone and phone accessories</p>
<div>
  <button><Link  to='/Login'> OPEN HERE </Link> </button>
</div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default hero
