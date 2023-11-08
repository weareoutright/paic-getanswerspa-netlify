import React, { useState, useEffect } from "react";
import { getSvg } from "../images/svgFiles";
import AccordionComponent from "./Accordion";

const SingleFAQ = ({ topic }) => {
  const [showQuestions, setShowQuestions] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [topicArrow, setTopicArrow] = useState("open-button");

  useEffect(() => {}, [showQuestions, showAnswers, topicArrow]);

  return (
    <>
      <div
        className="faq-content-header"
        onClick={() => {
          if (showAnswers) setShowAnswers(false);
          setTopicArrow(
            topicArrow === "open-button" ? "close-button" : "open-button"
          );
          setShowQuestions(!showQuestions);
        }}
      >
        <h4>
          <span className="faq-topic-header">{topic.title}</span>
          <button
            onClick={() => {
              if (showAnswers) setShowAnswers(false);
              setTopicArrow(
                topicArrow === "open-button" ? "close-button" : "open-button"
              );
              setShowQuestions(!showQuestions);
            }}
          >
            <span>{getSvg(topicArrow)}</span>
          </button>
        </h4>
      </div>
      <div key={topic.title} className="faq-topic">
        {topic.content.map((content) => {
          return (
            <AccordionComponent
              key={content.id}
              content={content}
              showQuestions={showQuestions}
            />
          );
        })}
      </div>
    </>
  );
};

export default SingleFAQ;
