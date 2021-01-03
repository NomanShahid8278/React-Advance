import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const resetCounter = () => {
    setValue(0);
  };
  const complexCounter = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>useState counter example</h2>
        <h3>regular counter</h3>
        <h2>{value}</h2>
        <button
          className="btn"
          onClick={() => {
            setValue(value - 1);
          }}
        >
          Decrease
        </button>
        <button className="btn" onClick={resetCounter}>
          Reset
        </button>
        <button
          className="btn"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          Increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h3>complex counter</h3>
        <h2>{value}</h2>
        <button className="btn" onClick={complexCounter}>
          Increment
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
