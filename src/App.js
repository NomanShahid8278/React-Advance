import React from "react";
import ErrorExample from "./practice/1-useState/1-error-example";
import UseStateBasics from "./practice/1-useState/2-useState-basics";
import UseStateArray from "./practice/1-useState/3-useState-array";
import UseStateObject from "./practice/1-useState/4-useState-object";
import UseStateCounter from "./practice/1-useState/5-useState-counter";
import Project from './practice/1-useState/Project/Project'
function App() {
  return (
    <div className="container">
      <ErrorExample />
      <UseStateBasics />
      <UseStateArray />
      <UseStateObject />
      <UseStateCounter />
      <Project/>
    </div>
  );
}

export default App;
