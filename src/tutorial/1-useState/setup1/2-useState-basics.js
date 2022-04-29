import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Random Title");
  const handler = () => {
    if (text === "Random Title") {
      setText("New Title");
    } else {
      setText("Random Title");
    }
  };

  return (
    <React.Fragment>
      <h2>useState basic example</h2>;<h1>{text}</h1>
      <button className="btn" type="button" onClick={handler}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
