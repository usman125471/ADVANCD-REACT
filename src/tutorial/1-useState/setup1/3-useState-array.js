import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeId = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <React.Fragment>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              className="btn"
              type="button"
              onClick={() => {
                removeId(id);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button className="btn" type="button" onClick={() => setPeople([])}>
        Clear
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
