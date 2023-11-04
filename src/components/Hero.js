import React, { useState } from "react";
import { getSvg } from "../images/svgFiles";
import heroImg from "../images/hero-image.png";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Hero = () => {
  const [buttonDown, setButtonDown] = useState(false);

  const grabAttention = () => {
    setButtonDown(!buttonDown);
  };

  setTimeout(grabAttention, 1500);

  return (
    <main className="Hero" id="home">
      <div className="hero-main-content row container">
        <div className="col-sm-10">
          <h1>
            We get it,
            <br />
            Vaccines
            <br />
            Can Be
            <br />
            Confusing.
          </h1>
          <h2>Pennsylvania Doctors have answers.</h2>
          <button className={buttonDown ? "attention-getter" : ""}>
            <AnchorLink to="#faqs">
              Start Here <span>{getSvg("arrow-downward-alt")}</span>
            </AnchorLink>
          </button>
        </div>
      </div>
      <div className="hero-image col-sm-6">
        <img src={heroImg} alt="placeholder" className="img-fluid" />
      </div>
    </main>
  );
};

export default Hero;
