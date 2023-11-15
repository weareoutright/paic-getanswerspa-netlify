import React, { useState } from "react";
import { getSvg } from "../images/svgFiles";
import heroImgMobile from "../images/hero-image.png";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const HeroMobile = () => {
  const [buttonDown, setButtonDown] = useState(false);

  const grabAttention = () => {
    setButtonDown(!buttonDown);
  };

  setTimeout(grabAttention, 1500);

  return (
    <main className="Hero HeroMobile" id="home">
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

          <img className="hero-image" src={heroImgMobile} alt="placeholder" />

          <button className={buttonDown ? "attention-getter" : ""}>
            <AnchorLink to="#faqs">
              Start Here <span>{getSvg("arrow-downward-alt")}</span>
            </AnchorLink>
          </button>
        </div>
      </div>
    </main>
  );
};

export default HeroMobile;
