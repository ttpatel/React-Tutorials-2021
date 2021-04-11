import logo from './logo.svg';
import './App.css';
import React, { useReducer } from 'react'
import CounterOne from './component/CounterOne'
import ComponentA from './component/ComponentA'
import ComponentB from './component/ComponentB'
import ComponentC from './component/ComponentC'
export const CountContext = React.Context
const intialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return intialState
    default:
      return state
  }
}


function App() {
  const [count, dispatch] = useReducer(reducer, intialState)
  return (
    <CountContext.Provider value={{ countState: count, countDispacth: dispatch }}>

      <div className="App">
        {/* <CounterOne/> */}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}

export default App;
