import React from 'react';
import "./header.scss";
import bro from "../../assets/bro.png";
import hElipse from "../../assets/hElipse.png";

const Header = () => {
  return (
      <div className="enterprise__header section padding" id="home">
          <div className="enterprise__header-content">
            <h1 className="gradient__text">Providing Industry Leading Solutions for</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu. Viverra a morbi ut donec in. Ac diam, at sed cras nisi.</p>

            <div className="enterprise_header-content__button">
              <button type="button">Learn More --></button>
            </div>
          </div>

          <div className="enterprise__header-Eimage">
              <img src={hElipse} />
          </div>
          
          <div className="enterprise__header-image">
            <img src={bro} />
          </div>
      </div>
  )
}

export default Header