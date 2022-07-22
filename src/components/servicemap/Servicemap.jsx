import React from 'react';
import "./servicemap.scss";

const Servicemap = ({title, text}) => (
    <div className="enterprise__servicemap-container__feature">
        <div className="enterprise__servicemap-container__feature-title">
          <h1>{title}</h1>
        </div>

        <div className="enterprise__servicemap-container__feature-text">
          <p>{text}</p>
        </div>
    </div>
);

export default Servicemap