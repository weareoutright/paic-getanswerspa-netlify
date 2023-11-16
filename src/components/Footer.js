import React from "react";
import { PAIC_COPYRIGHT, PAIC_INFO } from "../constants/paicInfo";

const Footer = () => {
  return (
    <section className="Footer" id="contact">
      <div className="footer-content">
        <div className="contact-info">
          <p className="site-name">{PAIC_INFO.siteName}</p>
          <p className="contact">Contact: {PAIC_INFO.contact}</p>
        </div>
        <div className="mission-statement">
          Brought to you by the{" "}
          <a
            href="https://www.immunizepa.org/"
            target="_blank"
            rel="noreferrer"
          >
            Pennsylvania Immunization Coalition
          </a>
          . The PAIC encourages all Pennsylvania residents to receive all
          recommended, age-appropriate immunizations. Our mission is to promote
          timely and effective immunizations for all Pennsylvania residents
          across their life span.
        </div>
        <div className="organizational-info">
          <div className="branding-images">
            <img
              alt="PAIC logo"
              src={PAIC_INFO.logo}
              className="logo img-fluid"
            />
            <img
              alt="Chapter info"
              src={PAIC_INFO.chapter}
              className="chapter img-fluid"
            />
          </div>
          <PAIC_COPYRIGHT />
        </div>
      </div>
    </section>
  );
};

export default Footer;
