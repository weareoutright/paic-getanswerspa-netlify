import React, { useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { getSvg } from "../images/svgFiles";

const AccordionComponent = ({ content, showQuestions }) => {
  const [answerArrow, setAnswerArrow] = useState("arrow-back");

  return (
    <>
      <Accordion allowZeroExpanded>
        <AccordionItem
          key={content.id}
          className={
            showQuestions === true ? "faq-q-and-a" : "faq-q-and-a-hidden"
          }
        >
          <AccordionItemHeading
            onClick={() => {
              if (answerArrow === "arrow-back") setAnswerArrow("arrow-forward");

              if (answerArrow === "arrow-forward") setAnswerArrow("arrow-back");
            }}
          >
            <AccordionItemButton
              className={
                showQuestions === true ? "faq-question" : "faq-question-hidden"
              }
            >
              {content.question}
              <span>{getSvg(answerArrow)}</span>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel
            className={
              showQuestions === true ? "faq-answer" : "faq-answer-hidden"
            }
          >
            {content.answer}
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default AccordionComponent;
