import React from "react";
import './project.css'
const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, image, name, age } = person;
        return (
          <article className="person" key={id}>
            <img src={image} />
            <h2>{name}</h2>
            <h3>{age} years</h3>
          </article>
        );
      })}
    </>
  );
};
export default List;
