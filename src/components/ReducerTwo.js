import { React, useReducer } from "react";

const initialState = {
  firstCount: 0,
  secondCount: 100,
};
const Reducer = (state, action) => {
  switch (action.type) {
    case "incrementOne":
      return { ...state, firstCount: state.firstCount + action.value };
    case "decrementOne":
      return { ...state, firstCount: state.firstCount - action.value };
    case "resetOne":
      return { ...state, firstCount: initialState.firstCount };
    case "incrementTwo":
      return { ...state, secondCount: state.secondCount + action.value};
    case "decrementTwo":
      return { ...state, secondCount: state.secondCount - action.value};
    case "resetTwo":
      return { ...state, secondCount: initialState.secondCount };
    default:
      return state;
  }
};

function ReducerTwo() {
  const [count, dispatch] = useReducer(Reducer, initialState);
  return (
    <div>
      <h1>Count Three : {count.firstCount}</h1>
      <button onClick={() => dispatch({ type: "incrementOne" , value : 1})}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrementOne" , value : 1 })}>
        Decrement
      </button>
      <button className="reset" onClick={() => dispatch({ type: "resetOne" })}>
        Reset
      </button>
      <h1>Count Four : {count.secondCount}</h1>
      <button onClick={() => dispatch({ type: "incrementTwo" , value : 5})}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrementTwo" , value : 5 })}>
        Decrement
      </button>
      <button className="reset" onClick={() => dispatch({ type: "resetTwo" })}>
        Reset
      </button>
    </div>
  );
}

export default ReducerTwo;
