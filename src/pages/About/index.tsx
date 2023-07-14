import React from "react";
import "./about.css"

//custom files
import AboutHero from "./components/AboutHero";
import Description from "./components/Description";


const About = () => {
  return (
    <div>
      <AboutHero />
      <Description/>
    </div>
  );
};

export default About;
