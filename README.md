# React Hooks with Projects and Examples

### What are React Hooks?

React Hooks are functions that let us hook into the React state and lifecycle features from function components. Hooks allow us to easily manipulate the state of our functional component without the need to convert them into class components.

### Types of Built-In Hooks

- **useState**

Returns a stateful value and a function to update it. It keeps a bit of state in a hook which is being fed in anew every render so it always has the latest state.

- **useEffect**

Let's you perform side effects in function components, replaces lifecycle methods, such as _componentDidMount_, _componentDidUpdate_, _componentWillUnmount_.

You can do things like fire AJAX requests, integrate with third party libraries (like a jQuery plugin), fire off some telemetry, or anything else that need to happen on the side for your component.

- **useContext**

Accepts a context object (the value returned from `React.createContext`) and returns the current context value, as given by the nearest context provider for the given context. Solves the problem of prop drilling (passing parent to child, parent to child, as well as covering things Redux would normally cover, which is like application-level state).

Context allows you to create a wormhole where stuff goes in and a wormhole in a child component where that same data comes out and the stuff in the middle doesn't know it's there. Now that data is data is available anywhere inside of the `UserContext.Provider`.

### The DON'Ts of Hooks

- Don't call Hooks inside loops, conditions, or nested functions - Only call Hooks at the top level
- Don't call Hooks from regular JavaScript functions - Only call Hooks from React function components

### Advance Hooks

- **useRef**

Function that returns a mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component. Useful for holding on to DOM elements frequently, holding on to timeouts and intervals (`setInterval` and `setTimeout`) or any bit of statefulness that *could* change but you don't want it to cause a re-render when it does.

Refs exist outside of the re-render cycle. Refs are variables you're setting to the side, when your component re-runs it skips over that ref until you call it somwhere with `.current`.

- **useReducer**

Accepts a reducer function with the application initial state, returns the current application state, then dispatches a function. Reducers take arguments and reduce them down until they are more pallatable...function that you can run that takes in an old state, some sort of action, and returns to you a new state. It is almost identical to `useState`, except `useReducer` lets you **define exactly how to update it's state value** by passing it a function.

Instead of having a bunch of functions to update various properties, we can have one reducer that handles all the updates based on an action type. When we call `dispatch`, we pass in an object that tells us what happened, and then our reducer takes that information and processes it to create a new state.

### Note

Using `useReducer` and `useContext` together would get you a pretty great approximation of Redux-like features.
