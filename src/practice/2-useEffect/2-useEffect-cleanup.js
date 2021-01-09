import React, { useState, useEffect } from "react";

// useEffect alse return a function which will be executed after useEffect is done, this is called cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return ()=>{
      console.log('Cleanup...')
    }
  });
  return (
    <>
      <h2>useEffect cleanup</h2>
      <h3>{size} PX</h3>
    </>
  );
};

export default UseEffectCleanup;
