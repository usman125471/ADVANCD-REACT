import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value >= 1) {
      document.title = `New Message(${value})`;
    }
    console.log("hero");
  });

  return (
    <>
      <h2>useEffect Basics</h2>
      <h1>{value}</h1>
      <button className="btn" type="button" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasics;
