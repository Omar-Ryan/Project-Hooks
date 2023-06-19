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
  const [countOne, dispatchOne] = useReducer(Reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(Reducer, initialState);
  return (
    <div>
      <h1>Count One : {countOne}</h1>
      <button onClick={() => dispatchOne("increment")}>Increment</button>
      <button onClick={() => dispatchOne("decrement")}>Decrement</button>
      <button className="reset" onClick={() => dispatchOne("reset")}>Reset</button>
      <h1>Count Two : {countTwo}</h1>
      <button onClick={() => dispatchTwo("increment")}>Increment</button>
      <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
      <button className="reset" onClick={() => dispatchTwo("reset")}>Reset</button>
    </div>
  );
};

export default ReducerOne;
