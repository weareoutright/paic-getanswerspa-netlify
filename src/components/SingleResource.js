import React from "react";
import useWindowSize from "../helperFuncs/useWindowSize";

const SingleResource = ({ resource, topic }) => {
  const { width } = useWindowSize();

  if (width > 600) {
    return (
      <form
        className="SingleResourceForm"
        action={resource.link}
        method="get"
        target="_blank"
        rel="noreferrer"
      >
        <button className="SingleResource">
          <span className="resource-link">
            {topic === "Flu/Influenza" ? "Flu" : topic}
          </span>
          <br />
          <span className="resource-title">{resource.title}</span>
        </button>
      </form>
    );
  } else {
    return (
      <form
        className="SingleResourceFormMobile"
        action={resource.link}
        method="get"
        target="_blank"
        rel="noreferrer"
      >
        <button className="SingleResource">
          <span className="resource-link">
            {topic === "Flu/Influenza" ? "Flu" : topic}
          </span>
          <br />
          <span className="resource-title">{resource.title}</span>
        </button>
      </form>
    );
  }
};

export default SingleResource;
