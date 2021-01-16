import React from "react";
import ErrorExample from "./practice/1-useState/1-error-example";
import UseStateBasics from "./practice/1-useState/2-useState-basics";
import UseStateArray from "./practice/1-useState/3-useState-array";
import UseStateObject from "./practice/1-useState/4-useState-object";
import UseStateCounter from "./practice/1-useState/5-useState-counter";
import UseEffectBasics from "./practice/2-useEffect/1-useEffect-basics";
import UseEffectCleanup from "./practice/2-useEffect/2-useEffect-cleanup";
import UseEffectFetchData from "./practice/2-useEffect/3-useEffect-fetch-data";
import MultipleReturns from "./practice/3-conditional-rendering/1-multiple-returns";
import ShortCircuit from "./practice/3-conditional-rendering/2-short-circuit";
import ShowHide from "./practice/3-conditional-rendering/3-show-hide";
import ControlledInputs from "./practice/4-forms/1-controlled-inputs";
import MultipleInputs from "./practice/4-forms/2-multiple-inputs";
import UseRefBasics from "./practice/5-useRef/1-useRef-basics";
function App() {
  return (
    <div className="container">
      <ErrorExample />
      <UseStateBasics />
      <UseStateArray />
      <UseStateObject />
      <UseStateCounter />
      <UseEffectBasics />
      <UseEffectCleanup />
      <UseEffectFetchData />
      <MultipleReturns />
      <ShortCircuit />
      <ShowHide />
      <ControlledInputs />
      <MultipleInputs />
      <UseRefBasics />
    </div>
  );
}

export default App;
