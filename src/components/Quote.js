import React, { useState } from "react";
// import { QUOTES } from "../constants/quotes";

const QUOTES = [
  {
    id: 0,
    content:
      "0 For COVID I say, I got it and I was fine with it. We’ve had a good experience when I personalize it with me and my family, This vaccine is really safe.",
    author: "Dr. Robert Huffard, MD",
    author_info: "Pediatrics specialist in State College, PA",
  },
  {
    id: 1,
    content:
      "1 For COVID I say, I got it and I was fine with it. We’ve had a good experience when I personalize it with me and my family, This vaccine is really safe.",
    author: "Dr. Robert Huffard, MD",
    author_info: "Pediatrics specialist in State College, PA",
  },
  {
    id: 2,
    content:
      "2 For COVID I say, I got it and I was fine with it. We’ve had a good experience when I personalize it with me and my family, This vaccine is really safe.",
    author: "Dr. Robert Huffard, MD",
    author_info: "Pediatrics specialist in State College, PA",
  },
];

const Quote = () => {
  const [currentQuoteId, setCurrentQuoteId] = useState(0);
  const [activeCarouselBtn, setActiveCarouselBtn] = useState("active");

  return (
    <section className="Quote" id="interviews">
      <div className="open-and-quote">
        <div className="open-quotation">,,</div>
        <div className="main-quote">
          {QUOTES.map((quote) => {
            return (
              <div className="quote-carousel-item" key={quote.id}>
                <p className="quote-content">{quote.content}</p>
                <p className="quote-author">
                  <code>&#8212;</code> {quote.author}
                </p>
                <small className="quote-author-info">{quote.author_info}</small>
              </div>
            );
          })}
        </div>
        <div className="quote-carousel">
          {QUOTES.map((quote) => {
            return (
              <label>
                <input type="radio" name="slider"></input>
                <span></span>
              </label>
            );
          })}
        </div>
        <div className="close-quotation">,,</div>
      </div>
    </section>
  );
};

export default Quote;
