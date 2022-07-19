import React from 'react';
import "./about.scss";
import Rectangle1 from "../../assets/Rectangle1.png"
import Rectangle2 from "../../assets/Rectangle2.png"

const About = () => {
  return (
    <div className="enterprise__about section__margin" id="about">
      <div className="enterprise__about-feature">
        <div className="enterprise__about-rectangle1">
          <img src={Rectangle1} alt="Rectangle1" />
        </div>

        <div className="enterprise__about-rectangle2">
          <img src={Rectangle2} alt="Rectangle2" />
        </div>
        <div className="enterprise__about-heading">
            <h1>About Company</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget duis mi nunc bibendum. Tellus elementum nec lorem eget dictumst. Risus in gravida eu, enim lorem. Sed consequat ut suspendisse eros. Nunc nunc accumsan, viverra enim. Mi.</p>
        </div>
      </div>
    </div>
  )
}

export default About