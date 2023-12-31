import React from "react";
import SingleFAQ from "./SingleFAQ.js";
import FAQImage from "../images/upside-down-guy.png";
import { TOPICS } from "../constants/faqInfo";

const FAQs = () => {
  return (
    <div className="FAQs" id="faqs">
      <div className="faq-header-and-image">
        <img className="faq-image" alt="faq" src={FAQImage} />
      </div>
      <div className="faq-h2-and-content">
        <h2>FAQs</h2>
        <div className="faq-content">
          {TOPICS.map((topic) => {
            return <SingleFAQ key={`${topic.title}-key`} topic={topic} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
