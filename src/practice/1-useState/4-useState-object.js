import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Nomi",
    age: "22",
    ninja: "black",
  });
  const changeName = () => {
    setPerson({ ...person, name: "Noman Shahid" });
  };
  return (
    <>
      <h2>useState object example</h2>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <h3>Ninja: {person.ninja}</h3>
      <button className="btn" onClick={changeName}>
        Change Name
      </button>
      <br></br>
      <br></br>
    </>
  );
};

export default UseStateObject;
