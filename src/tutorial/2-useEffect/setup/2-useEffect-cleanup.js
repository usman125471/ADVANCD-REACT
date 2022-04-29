import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const inerSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", inerSize);
  }, []);
  
  return (
    <>
      <h2>useEffect cleanup</h2>
      <h1>Window</h1>
      <h3>{size} PX</h3>
    </>
  );
};

export default UseEffectCleanup;
