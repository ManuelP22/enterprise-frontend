import React, { useState } from 'react';
import "./navbar.css";

import logo from "../../assets/logo.png";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#about">About</a></p>
  <p><a href="#ourservices">Our Services</a></p>
  <p><a href="#servicemap">Service Map</a></p>
  <p><a href="#cta">Contact Us</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="enterprise__navbar">
      <div className="enterprise__navbar-links_logo">
        <img src={logo} alt='logo'/>
      </div>
    <div className="vimcash__navbar-links">
        <div className="enterprise__navbar-links_container">
          <Menu />
      </div>
    </div>

    <div className="enterprise__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
    </div>

    <div className="enterprise__navbar-menu">
      {toggleMenu
        ? <RiCloseLine color="#FFC1DC" size={27} onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color="#FFC1DC" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="enterprise__navbar-menu_container scale-up-center">
            <div className="enterprise__navbar-menu-container-links">
                <Menu />
              </div>
              <div className="enterprise__navbar-container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          )}
        </div>
    </div>
  )
}

export default Navbar