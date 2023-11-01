import React from "react";

const StaticAnswer = ({ children, answer }) => {
  return (
    <div className="StaticAnswer">{children ? children : <p>{answer}</p>}</div>
  );
};

export default StaticAnswer;
