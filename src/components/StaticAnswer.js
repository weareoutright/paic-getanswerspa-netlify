import React from "react";

const StaticAnswer = ({ children, answer }) => {
  return (
    <div className="StaticAnswer">
      {children ? children : <p className="faq-answer">{answer}</p>}
    </div>
  );
};

export default StaticAnswer;
