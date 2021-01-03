import React, { useState } from "react";
import { data } from "../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    let newPerson = people.filter((person) => person.id !== id);
    setPeople(newPerson);
  };
  return (
    <>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button
        className="btn"
        onClick={() => {
          if (people.length === 0) {
            setPeople(data);
          } else {
            setPeople([]);
          }
        }}
      >
        Toggle People
      </button>
      <br></br>
      <br></br>
    </>
  );
};

export default UseStateArray;
