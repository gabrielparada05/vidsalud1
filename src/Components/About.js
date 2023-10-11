import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>Sobre nosotros</span>
        </h3>
        <p className="about-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis metus ac massa 
        molestie posuere. Praesent efficitur faucibus tempus. Quisque vel tempus sem. Quisque hendrerit orci erat, 
        vitae facilisis ipsum lacinia id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Morbi congue nulla tellus, ultricies tincidunt leo aliquet bibendum. Cras et congue elit, et interdum nisi
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Choose a Specialist"
          description="Find your perfect specialist and book with ease at Health Plus. Expert doctors prioritize your health, offering tailored care."
        />

        <SolutionStep
          title="Make a Schedule"
          description="Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being with personalized care."
        />

        <SolutionStep
          title="Get Your Solutions"
          description="Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."
        />
      </div>
    </div>
  );
}

export default About;
