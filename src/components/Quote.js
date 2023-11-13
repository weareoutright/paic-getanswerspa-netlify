import React, { useState } from "react";
import { QUOTES } from "../constants/quotesInfo";

const Quote = () => {
  return (
    <section className="Quote" id="interviews">
      <div
        className="carousel slide open-and-quote"
        id="carouselExampleIndicators"
      >
        <div className="open-quotation">,,</div>
        <div className="main-quote carousel-inner">
          <div
            className="carousel-item quote-carousel-item active"
            key={QUOTES[0].id}
          >
            <p className="quote-content">{QUOTES[0].content}</p>
            <p className="quote-author">
              <code>&#8212;</code> {QUOTES[0].author}
            </p>
            <small className="quote-author-info">{QUOTES[0].author_info}</small>
          </div>
          <div className="carousel-item quote-carousel-item" key={QUOTES[1].id}>
            <p className="quote-content">{QUOTES[1].content}</p>
            <p className="quote-author">
              <code>&#8212;</code> {QUOTES[1].author}
            </p>
            <small className="quote-author-info">{QUOTES[1].author_info}</small>
          </div>
          <div className="carousel-item quote-carousel-item" key={QUOTES[2].id}>
            <p className="quote-content">{QUOTES[2].content}</p>
            <p className="quote-author">
              <code>&#8212;</code> {QUOTES[2].author}
            </p>
            <small className="quote-author-info">{QUOTES[2].author_info}</small>
          </div>
        </div>
        <div className="carousel-indicators quote-carousel">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="close-quotation">,,</div>
      </div>
    </section>
  );
};

export default Quote;
