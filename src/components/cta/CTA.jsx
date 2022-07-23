import React from 'react'
import "./cta.scss"
import Rectangle5 from "../../assets/Rectangle5.png"
import Circle1 from "../../assets/Circle1.png"
import Circle2 from "../../assets/Circle2.png"


const CTA = () => {
  return (
    <div className="enterprise__cta section__padding" id="cta">
      <div className="enterprise__cta__header">
        <h3>View All Services</h3>
      </div>
      <div className="enterprise__cta-container">
        <h1>Contact Us</h1>

        <div className="enterprise__cta-container-img">
          <img src={Rectangle5} alt="rectangle"/>
        </div>

        <div className="enterprise__cta-container-circle1">
          <img src={Circle1} alt="circle"/>
        </div>

        <div className="enterprise__cta-container-circle2">
          <img  src={Circle2} alt="circle"/>
        </div>

        <div className="enterprise__cta-container-circle3">
          <img src={Circle1} alt="circle"/>
        </div>

        <div className="enterprise__cta-container-circle4">
          <img  src={Circle2} alt="circle"/>
        </div>

        <div className="enterprise__cta-container__form-input1">
            <input 
            type="text" 
            name="name"
            placeholder="Full Name"
            />
        </div>

        <div className="enterprise__cta-container__form-input2">
            <input 
            type="email" 
            name="name"
            placeholder="Email Address"
            />
        </div>

        <div className="enterprise__cta-container__form-input3">
            <input 
            type="number" 
            name="name"
            placeholder="Phone Number"
            />
        </div>

        <div className="enterprise__cta-container__form-input__message">
            <textarea 
            type="text" 
            name="message"
            placeholder="Have anything to say?"
            />
        </div>
      </div>
    </div>
  )
}

export default CTA