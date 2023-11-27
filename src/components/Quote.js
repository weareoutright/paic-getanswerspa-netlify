import React from "react";
import { QUOTES } from "../constants/quotesInfo";
import useTimeout from "../helperFuncs/useTimeout";
import { document } from "browser-monads-ts";

const Quote = () => {
  const quote0Btn = document.getElementById("quote0Btn");
  const quote1Btn = document.getElementById("quote1Btn");
  const quote2Btn = document.getElementById("quote2Btn");
  const quote3Btn = document.getElementById("quote3Btn");

  useTimeout(() => {
    quote0Btn.click();
  }, 7000);

  useTimeout(() => {
    quote1Btn.click();
  }, 14000);

  useTimeout(() => {
    quote2Btn.click();
  }, 21000);

  useTimeout(() => {
    quote3Btn.click();
  }, 28000);

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
          <div className="carousel-item quote-carousel-item" key={QUOTES[3].id}>
            <p className="quote-content">{QUOTES[3].content}</p>
            <p className="quote-author">
              <code>&#8212;</code> {QUOTES[3].author}
            </p>
            <small className="quote-author-info">{QUOTES[3].author_info}</small>
          </div>
        </div>
        <div className="carousel-indicators quote-carousel">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="quote0Btn active"
            aria-current="true"
            aria-label="Slide 1"
            id="quote0Btn"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            aria-current="true"
            className="quote1Btn"
            id="quote1Btn"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            aria-current="true"
            id="quote2Btn"
            className="quote2Btn"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
            aria-current="true"
            id="quote3Btn"
            className="quote3Btn"
          />
        </div>
        <div className="close-quotation">,,</div>
      </div>
    </section>
  );
};

export default Quote;
