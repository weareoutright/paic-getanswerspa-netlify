import React from "react";
import { DISPLAYED_RESOURCES } from "../constants/resourcesInfo";
import MainResourceTopic from "./MainResourceTopic";
import resourceImg from "../images/adult-hugging-child.png";

const Resources = () => {
  return (
    <section className="Resources" id="resources">
      <h2>Resources</h2>
      {DISPLAYED_RESOURCES.map((resource) => {
        return (
          <MainResourceTopic key={resource.title} mainResource={resource} />
        );
      })}
      <div className="trigger-contact-highlight"></div>
      <div className="resources-img">
        <img
          className="footer-img-overlap"
          alt="adult hugging child"
          src={resourceImg}
        />
      </div>
    </section>
  );
};

export default Resources;
