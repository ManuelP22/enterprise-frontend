import React from 'react'
import "./ourservices.scss";
import { Ourservice } from "../../components"

import Rectangle4 from "../../assets/Rectangle4.png"
import Rectangle4b from "../../assets/Rectangle4b.png"
import Portfolio from "../../assets/Portfolio.png"
import Rafiki from "../../assets/Rafiki.png"

const servicesData1 = [
  {
    title1: "Non-IT enterprises",
    text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat bibendum sit felis, sollicitudin et. Nulla aliquet integer hac ac morbi.",
    button: "Learn More →",
  }
]

const servicesData2 = [
  {
    title2: "Software product companies",
    text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat bibendum sit felis, sollicitudin et. Nulla aliquet integer hac ac morbi.",
    button: "Learn More →"
  }
]

export const Ourservices = () => {
  return (
    <div className="enterprise__ourservices section__padding" id="ourservices">
      <div className="enterprise__ourservices-heading">
        <h1 className="color__text">Our Services</h1>
      </div>

        <div className="enterprise__ourservices-container">
          <div className="enterprise__ourservices-container__rectangle4-service">
              {servicesData1.map((item, index) =>(
                <Ourservice title1={item.title1} text1={item.text1} button={item.button} key={item.title1 + index}/>
              ))}             
              <img src={Rectangle4} alt="rectangle4"/>
          </div>

          <div className="enterprise__ourservices__portfolio-img">
            <img src={Portfolio} alt="portfolio"/>
          </div>

          <div className="enterprise__ourservices-container__rectangle4b-service">
             {servicesData2.map((item, index) =>(
                <Ourservice title2={item.title2} text2={item.text2} button={item.button} key={item.title2 + index}/>
              ))}
              <img src={Rectangle4b} alt="rectangle4b"/>
          </div>
          
          <div className="enterprise__ourservices__rakifi-img">
            <img src={Rafiki} alt="rafiki"/>
          </div>

          <div className="enterprise__ourservices-container__rectangle4-service">
              {servicesData1.map((item, index) =>(
                <Ourservice title1={item.title1} text1={item.text1} button={item.button} key={item.title + index}/>
              ))}
              <img src={Rectangle4} alt="rectangle4"/>
          </div>

          <div className="enterprise__ourservices__portfolio-img">
            <img src={Portfolio} alt="portfolio"/>
          </div>

        </div>
    </div>
  )
}

export default Ourservices
