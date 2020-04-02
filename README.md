# React Hooks with Projects and Examples

### What are React Hooks?

React Hooks are functions that let us hook into the React state and lifecycle features from function components. Hooks allow us to easily manipulate the state of our functional component without the need to convert them into class components.

### Types of Built-In Hooks

- **useState**

Returns a stateful value and a function to update it.

- **useEffect**

Let's you perform side effects in function components, replaces lifecycle methods, such as _componentDidMount_, _componentDidUpdate_, _componentWillUnmount_.

- **useContext**

Accepts a context object (the value returned from `React.createContext`) and returns the current context value, as given by the nearest context provider for the given context. Solves the problem of prop drilling (passing parent to child, parent to child, as well as covering things Redux would normally cover, which is like application-level state).

### The DON'Ts of Hooks

- Don't call Hooks inside loops, conditions, or nested functions - Only call Hooks at the top level
- Don't call Hooks from regular JavaScript functions - Only call Hooks from React function components

### Advance Hooks

- **useRef**

Function that returns a mutable ref object whose `.current` property is initialized ot the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component. Useful for holding on to DOM elements frequently, holding on to timeouts and intervals.
