import React from 'react'
import "./ourservice.scss";


const Ourservice = ({title1, text1, title2, text2, button}) => (
    
    <div className="enterprise__features-container__feature">

      <div className="enterprise__features-container__feature-title1">
          <h1>{title1}</h1>
      </div>

      <div className="enterprise__features-container__feature-text1">
        <p>{text1}</p>
      </div>

      <div className="enterprise__features-container__feature-title2">
          <h1>{title2}</h1>
      </div>

      <div className="enterprise__features-container__feature-text2">
        <p>{text2}</p>
      </div>

      <div className="enterprise__features-container__feature-button">
        <button type="button">{button}</button>
      </div>
    </div>
);

export default Ourservice