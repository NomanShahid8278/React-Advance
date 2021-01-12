import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// Controlled input means you have value at input which will be pointing at value in state
const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const handleSumit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      setPeople(() => {
        const person = {
          id: new Date().getTime().toString(),
          firstName,
          email,
        };
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    } else {
      console.log("No values in the form, Submit Fail!!!");
    }
  };
  return (
    <>
      <article>
        <h1>controlled inputs</h1>
        <form className="form" onSubmit={handleSumit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {people.map((peo) => {
          const { id, firstName, email } = peo;
          return (
            <>
              <div className="item" key={id}>
                <h1>{firstName}</h1>
                <p>{email}</p>
              </div>
            </>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
