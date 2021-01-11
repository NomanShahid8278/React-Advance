import React from "react";
import ErrorExample from "./practice/1-useState/1-error-example";
import UseStateBasics from "./practice/1-useState/2-useState-basics";
import UseStateArray from "./practice/1-useState/3-useState-array";
import UseStateObject from "./practice/1-useState/4-useState-object";
import UseStateCounter from "./practice/1-useState/5-useState-counter";
import Project from "./practice/1-useState/Project/Project";
import UseEffectBasics from "./practice/2-useEffect/1-useEffect-basics";
import UseEffectCleanup from "./practice/2-useEffect/2-useEffect-cleanup";
import UseEffectFetchData from "./practice/2-useEffect/3-useEffect-fetch-data";
import MultipleReturns from "./practice/3-conditional-rendering/1-multiple-returns";
import ShortCircuit from './practice/3-conditional-rendering/2-short-circuit'
import ShowHide from './practice/3-conditional-rendering/3-show-hide'
function App() {
  return (
    <div className="container">
      <ErrorExample />
      <UseStateBasics />
      <UseStateArray />
      <UseStateObject />
      <UseStateCounter />
      <Project />
      <UseEffectBasics />
      <UseEffectCleanup />
      <UseEffectFetchData />
      <MultipleReturns />
      <ShortCircuit/>
      <ShowHide/>
    </div>
  );
}

export default App;
