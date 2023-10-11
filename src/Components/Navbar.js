import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import vidLogo from '../Assets/vid_logo.jpg'

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };


  const phoneNumber = '+12892643058'; 
  
  const handleClick = () => {
      const whatsappURL = `whatsapp://send?phone=${phoneNumber}`;
      window.location.href = whatsappURL;
  };

  // const handleChatBtnClick = () => {
  //   if (!isButtonDisabled) {
  //     toast.info("Experiencing high traffic, Please wait a moment.", {
  //       position: toast.POSITION.TOP_CENTER,
  //       onOpen: () => setIsButtonDisabled(true),
  //       onClose: () => setIsButtonDisabled(false),
  //     });
  //   }
  // };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          {/* Health <span className="navbar-sign">+</span> */}
          <div>
          <img src={vidLogo} alt='logo_vid_salud'/> 
          </div>
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <a href="#services" className="navbar-links">
            Servicios
          </a>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            Quienes Somos 
          </a>
        </li>
        <li>
          <a href="#reviews" className="navbar-links">
            Comentarios
          </a>
        </li>
        <li>
          <a href="#doctors" className="navbar-links">
            Staff 
          </a>
        </li>
      </ul>

      <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faWhatsapp} /> Live Chat
      </button>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Servicios
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
             Nosotros
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#reviews">
              Comentarios
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#doctors">
              Staff
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#contact">
              Contactanos 
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
