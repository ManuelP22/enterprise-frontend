import React from 'react';
import "./footer.scss";
import Rectangle7 from "../../assets/Rectangle7.png"

const Footer = () => {
  return (
    <div className="enterprise__footer section__padding">
        <div className="enterprise__footer-container">
          <div className="enterprise__footer-container-inner">
            <img src={Rectangle7} alt="rectangle" />
            <p>Company Name</p>
          </div>
          <div className="enterprise__footer-container-p">
            <p>Company, 2022 © All Rights Reserved</p>
          </div>
        </div>
    </div>
  )
}

export default Footer