import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
// You can have multiple useEffect in components
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  // useEffect Second Parameter is the list of dependencies
  useEffect(() => {
    document.title = `New Messages (${value})`;
  }, [value]);
  return (
    <>
      <h2>{value}</h2>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
