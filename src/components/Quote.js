import React from "react";
// import { QUOTES } from "../constants/quotes";

const QUOTE = {
  content:
    "For COVID I say, I got it and I was fine with it. We’ve had a good experience when I personalize it with me and my family, This vaccine is really safe.",
  author: "Dr. Robert Huffard, MD",
  author_info: "Pediatrics specialist in State College, PA",
};

const Quote = () => {
  return (
    <section className="Quote" id="interviews">
      <div className="open-and-quote">
        <div className="open-quotation">,,</div>
        <div className="main-quote">
          <p className="quote-content">{QUOTE.content}</p>
          <p className="quote-author">
            <code>&#8212;</code> {QUOTE.author}
          </p>
          <small className="quote-author-info">{QUOTE.author_info}</small>
          <div className="quote-carousel">
            <button name="quote1" className="active"></button>
            <button name="quote2" className=""></button>
            <button name="quote3" className=""></button>
          </div>
        </div>
        <div className="close-quotation">,,</div>
      </div>
    </section>
  );
};

export default Quote;
