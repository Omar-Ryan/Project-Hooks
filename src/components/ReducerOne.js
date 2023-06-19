import { React, useReducer } from "react";

const initialState = 0;
const Reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const ReducerOne = () => {
  const [count, dispatch] = useReducer(Reducer, initialState);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> dispatch("increment")} >Increment</button>
      <button onClick={()=> dispatch("decrement")} >Decrement</button>
      <button onClick={()=> dispatch("reset")} >Reset</button>
    </div>
  );
};

export default ReducerOne;
