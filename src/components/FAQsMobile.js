import React from "react";
import SingleFAQ from "./SingleFAQ.js";
import FAQImageMobile from "../images/upside-down-guy.png";
import { TOPICS } from "../constants/faqInfo";

const FAQsMobile = () => {
  return (
    <div className="FAQs FAQsMobile" id="faqs">
      <img className="faq-image" alt="faq" src={FAQImageMobile} />
      <div className="faq-content">
        <h2>FAQs</h2>
        {TOPICS.map((topic) => {
          return <SingleFAQ key={`${topic.title}-key`} topic={topic} />;
        })}
      </div>
    </div>
  );
};

export default FAQsMobile;
