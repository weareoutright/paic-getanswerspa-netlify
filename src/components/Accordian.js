import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Accordian = ({ topic }) => {
  return (
    <Accordion allowZeroExpanded>
      {topic.content.map((content) => (
        <AccordionItem key={content.id}>
          <AccordionItemHeading>
            <AccordionItemButton>{content.question}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>{content.answer}</AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Accordian;
