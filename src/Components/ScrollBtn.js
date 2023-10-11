import React from 'react';
import '../Styles/ScrollBtn.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ScrollButton = () => {

const phoneNumber = '+12892643058'; 
  const handleButtonClick = () => {
    window.scrollTo(0, 0);
    const whatsappURL = `whatsapp://send?phone=${phoneNumber}`;
      window.location.href = whatsappURL;
  };



  
//   const handleClick = () => {
      
//   };

  return (
    <button className="scroll-button" type="button" onClick={handleButtonClick}>
    <FontAwesomeIcon icon={faWhatsapp} size="lg" />
    </button>

  );
};

export default ScrollButton;
