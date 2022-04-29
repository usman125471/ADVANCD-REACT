import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };
  const increaseLater = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 3000);
  };

  return (
    <>
      <section style={{ margin: "5rem" }}>
        <h1>Regular Counter</h1>;<h1>{value}</h1>
        <button
          className="btn"
          type="buttton"
          onClick={() => setValue(value - 1)}
        >
          Decrease
        </button>
        <button className="btn" type="buttton" onClick={reset}>
          Reset
        </button>
        <button
          className="btn"
          type="buttton"
          onClick={() => setValue(value + 1)}
        >
          Increase
        </button>
      </section>
      <section>
        <h1>Complex Counter</h1>;<h1>{value}</h1>
        <button className="btn" type="buttton" onClick={() => increaseLater()}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
