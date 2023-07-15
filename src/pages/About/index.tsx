import React from "react";
import "./about.css"

//custom files
import AboutHero from "./components/AboutHero";
import Description from "./components/Description";
import Team from "./components/Team";
import Partners from "./components/Partners";
import BannerInfo from "./components/BannerInfo";


const About = () => {
  return (
    <div>
      <AboutHero />
      <Description/>
      <Team/>
      <BannerInfo/>
      <Partners/>
    </div>
  );
};

export default About;
