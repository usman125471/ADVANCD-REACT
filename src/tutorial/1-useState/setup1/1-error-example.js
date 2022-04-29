import React from "react";

const ErrorExample = () => {
  let title = "Random Title";
  const clickHandler = () => {
    title = "Title Changed";
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>useState error example</h2>
      <h1>{title}</h1>
      <button className="btn" type="button" onClick={clickHandler}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
