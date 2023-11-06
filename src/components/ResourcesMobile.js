import React from "react";
import { DISPLAYED_RESOURCES } from "../constants/resourcesInfo";
import MainResourceTopic from "./MainResourceTopic";
import resourceImgMobile from "../images/adult-hugging-child-mobile.svg";

const ResourcesMobile = () => {
  return (
    <section className="Resources ResourcesMobile" id="resources">
      <h2>Resources</h2>
      {DISPLAYED_RESOURCES.map((resource) => {
        return (
          <MainResourceTopic key={resource.title} mainResource={resource} />
        );
      })}
      <img
        className="footer-img-overlap"
        alt="adult hugging child"
        src={resourceImgMobile}
      />
    </section>
  );
};

export default ResourcesMobile;
