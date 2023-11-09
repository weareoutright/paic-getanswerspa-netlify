import { AnchorLink } from "gatsby-plugin-anchor-links";
import React, { useState, useEffect } from "react";
import { elementsOverlap } from "../helperFuncs/elementsOverlap";
import { document, window } from "browser-monads-ts";
import { NAV_LINKS } from "../constants/navLinks";

import paicLogo from "../images/paic-logo.svg";
import paaapLogo from "../images/PAAAP_1.svg";
import { PAIC_COPYRIGHT } from "../constants/paicInfo";

const NavMobileTheSecond = () => {
  const [currentElement, setCurrentElement] = useState("");
  const [offset, setOffset] = useState(0);

  const [navBackground, setNavBackground] = useState("NavMobile");

  const nav = document.getElementsByClassName("NavMobile");
  const homeArea = document.getElementsByClassName("Hero");
  const faqArea = document.getElementsByClassName("FAQs");
  const quoteArea = document.getElementsByClassName("Quote");
  const resourcesArea = document.getElementsByClassName("Resources");
  const contactArea = document.getElementsByClassName(
    "trigger-contact-highlight"
  );

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.onscroll = () => {
        setOffset(window.scrollY);
      };
    }
  }, []);

  useEffect(() => {
    if (elementsOverlap(nav, homeArea)) {
      setCurrentElement("Home");
      setNavBackground("NavMobile nav-dark-teal");
    }
    if (elementsOverlap(nav, faqArea)) {
      setCurrentElement("FAQs");
      setNavBackground("NavMobile nav-purple");
    }
    if (elementsOverlap(nav, quoteArea)) {
      setCurrentElement("Interviews");
      setNavBackground("NavMobile nav-pink");
    }
    if (elementsOverlap(nav, resourcesArea)) {
      setCurrentElement("Resources");
      setNavBackground("NavMobile nav-peach");
    }
    if (elementsOverlap(nav, contactArea)) {
      setCurrentElement("Contact");
      setNavBackground("NavMobile nav-peach");
    }
  }, [offset]);

  return (
    <div className={navBackground} id="nav">
      <div className="nav-container">
        {NAV_LINKS.map((link) => {
          return (
            <div className="nav-link-container">
              <AnchorLink
                data-mdb-smooth-scroll="smooth-scroll"
                key={link.title}
                to={link.url}
                aria-current="page"
                className={
                  link.title === currentElement
                    ? `active nav-link ${link.className}`
                    : `nav-link ${link.className}`
                }
                onAnchorLinkClick={() => setCurrentElement(link.title)}
              >
                {link.title}
              </AnchorLink>
            </div>
          );
        })}
      </div>
      <div className="nav-footer">
        <div className="footer-nav-images">
          <img src={paicLogo} alt="PAIC logo" />
          <img src={paaapLogo} alt="PAIC logo" />
        </div>
        <PAIC_COPYRIGHT />
      </div>
    </div>
  );
};

export default NavMobileTheSecond;
