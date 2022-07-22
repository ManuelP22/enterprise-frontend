import React from 'react';
import "./servicemaps.scss";
import { Servicemap } from '../../components';
import Rectanglemap from "../../assets/Rectanglemap.png"

const Itconsulting = [
  {
  title: "IT consulting",
  text:"•Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam.\n•Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam."
  }
]
const Softdevelopment = [
  {
  title: "Software Development",
  text:"•Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam.\n•Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam."
  }
]

const TestingQa = [
  {
  title: "Testing and QA",
  text:"•Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam.\n•Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam."
  }
]

const Servicemaps = () => {
  return (
    <div className="enterprise__servicemaps section__padding" id="servicemap">
      <div className="enterprise__servicemaps-header">
        <h1 className="color__text">Service Map</h1>
      </div>
      <div className="enterprise__servicemaps-container">

      <div className="enterprise__servicemaps-container-rectanglemap">
          {Itconsulting.map((item, index) => (
            <Servicemap title={item.title} text={item.text} key={item.title + index}/>
          ))}
          <img src={Rectanglemap} alt="rectangle"/>
        </div>

        <div className="enterprise__servicemaps-container-rectanglemap">
          {Softdevelopment.map((item, index) => (
            <Servicemap title={item.title} text={item.text} key={item.title + index}/>
          ))}
          <img src={Rectanglemap} alt="rectangle"/>
        </div>

        <div className="enterprise__servicemaps-container-rectanglemap">
          {TestingQa.map((item, index) => (
            <Servicemap title={item.title} text={item.text} key={item.title + index}/>
          ))}
          <img src={Rectanglemap} alt="rectangle"/>
        </div>

      </div>
    </div>
  )
}

export default Servicemaps