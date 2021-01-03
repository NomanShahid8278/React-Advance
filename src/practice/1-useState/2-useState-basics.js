import React, { useState } from "react";
/* useState is a function
     First parameter is the value
     Second parameter is the function, with which we change its state*/

const UseStateBasics = () => {
  const [title, setTitle] = useState("useState basic example");
  const changeTitle = () => {
    if (title === "useState basic example") {
      setTitle("useState first example");
    } else {
      setTitle("useState basic example");
    }
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={changeTitle}>
        Toggle Title
      </button>
      <br></br>
      <br></br>
    </React.Fragment>
  );
};

export default UseStateBasics;
