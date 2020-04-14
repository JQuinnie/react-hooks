/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useRef, useReducer } from 'react';

import Footer from '../footer.component';

const RefComponent = () => {
  const [stateNumber, setStateNumber] = useState(0);
  const numRef = useRef(0);

  function incrementAndDelayLogging() {
    setStateNumber(stateNumber + 1);
    numRef.current++;
    setTimeout(() => alert(`state: ${stateNumber} | ref: ${numRef.current}`), 1000);
  }

  return (
    <div>
      <h1 className="text-4xl text-center">useRef Example</h1>
      <button onClick={incrementAndDelayLogging}>delay logging</button>
      <h4>state: {stateNumber}</h4>
      <h4>ref: {numRef.current}</h4>
    </div>
  );
};

// fancy logic to make sure the number is between 0 and 255, ternaries evaluate by first :
const limitRGB = num => (num < 0 ? 0 : num > 255 ? 255 : num);
const step = 50;

const reducer = (state, action) => {
  // make a new state based on the current state and action
  // (state, action) => newState
  switch (action.type) {
    case 'INCREMENT_R':
      return Object.assign({}, state, { r: limitRGB(state.r + step) });
    case 'DECREMENT_R':
      return Object.assign({}, state, { r: limitRGB(state.r - step) });
    case 'INCREMENT_G':
      return Object.assign({}, state, { g: limitRGB(state.g + step) });
    case 'DECREMENT_G':
      return Object.assign({}, state, { g: limitRGB(state.g - step) });
    case 'INCREMENT_B':
      return Object.assign({}, state, { b: limitRGB(state.b + step) });
    case 'DECREMENT_B':
      return Object.assign({}, state, { b: limitRGB(state.b - step) });
    default:
      return state;
  }
};

const ReducerComponent = () => {
  // returns current state paired with a dispatch method
  // const [state, dispatch] = useReducer(reducer, initialState)
  const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 0, g: 0, b: 0 });

  return (
    <div>
      <h1 className="text-4xl text-center">useReducer Example:</h1>
      <h2 style={{ color: `rgb(${r}, ${g}, ${b})` }}>See this Header change colors!</h2>
      <div>
        <span>r:</span>
        <button onClick={() => dispatch({ type: 'INCREMENT_R' })}>➕</button>
        <button onClick={() => dispatch({ type: 'DECREMENT_R' })}>➖</button>
      </div>
      <div>
        <span>g:</span>
        <button onClick={() => dispatch({ type: 'INCREMENT_G' })}>➕</button>
        <button onClick={() => dispatch({ type: 'DECREMENT_G' })}>➖</button>
      </div>
      <div>
        <span>b:</span>
        <button onClick={() => dispatch({ type: 'INCREMENT_B' })}>➕</button>
        <button onClick={() => dispatch({ type: 'DECREMENT_B' })}>➖</button>
      </div>
    </div>
  );
};

const HooksExamplesAdvance = () => (
  <div className="hooks-examples-advance">
    <RefComponent />
    <hr />
    <ReducerComponent />
    <hr/>
    <Footer />
  </div>
);

export default HooksExamplesAdvance;
