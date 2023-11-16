import React from "react";
import logo from "../images/paic-logo.svg";
import chapter from "../images/PAAAP_1.svg";

export const PAIC_INFO = {
  siteName: "GETANSWERSPA.ORG",
  contact: "immunization@paaap.org",
  logo: logo,
  chapter: chapter,
  orgName: "Pennsylvania Immunization Coalition",
};

export const PAIC_COPYRIGHT = () => {
  return (
    <div className="copyright">
      © {new Date().getFullYear()} |{" "}
      <a href="https://www.immunizepa.org/" target="_blank" rel="noreferrer">
        {PAIC_INFO.orgName}
      </a>
    </div>
  );
};
