import React from "react";

const ErrorExample = () => {
  // Below way we are not able to change the title onClick as we are not re-rendering component
  let title = "useState error example";
  const changeTitle = () => {
    title = "hello world";
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={changeTitle}>
        Change Title
      </button>
      <br></br>
      <br></br>
    </React.Fragment>
  );
};

export default ErrorExample;
