import * as React from "react";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import FAQs from "../components/FAQs";
import Quote from "../components/Quote";
import Resources from "../components/Resources";
import Footer from "../components/Footer";

// mobile components
import HeroMobile from "../components/HeroMobile";
import FAQsMobile from "../components/FAQsMobile";
import ResourcesMobile from "../components/ResourcesMobile";

import Helmet from "react-helmet";

import useWindowSize from "../helperFuncs/useWindowSize";

import "../components/css/styles.scss";

const IndexPage = () => {
  const { width } = useWindowSize();

  if (width > 600) {
    return (
      <>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/font-proxima-nova@1.0.1/style.min.css"
            rel="stylesheet"
          ></link>
        </Helmet>

        <Nav />
        <Hero />
        <FAQs />
        <Quote />
        <Resources />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/font-proxima-nova@1.0.1/style.min.css"
            rel="stylesheet"
          ></link>
        </Helmet>

        <HeroMobile />
        <FAQsMobile />
        <Quote />
        <ResourcesMobile />
        <Footer />
      </>
    );
  }
};

export const Head = () => <title>Get Answers PA</title>;

export default IndexPage;
