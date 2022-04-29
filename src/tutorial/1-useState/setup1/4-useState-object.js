import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "usman",
    age: 18,
    message: "Random Message",
  });

  const [name, setname] = useState("usman");
  const [age, setage] = useState(20);
  const [message, setmessage] = useState("Random Message");

  const newMsg = () => {
    setmessage("New Message");
    // setPerson({ ...person, message: "New Message" });
  };
  return (
    <>
      <h2>useState object example</h2>;<h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>{message}</h3>
      <button className="btn" type="button" onClick={() => newMsg()}>
        Message
      </button>
    </>
  );
};

export default UseStateObject;
