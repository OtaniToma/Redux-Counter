import React from 'react';
import './App.css';
import { increment, decrement } from './actions';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <h1>カウンター {counter}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </div>
  );
}

export default App;
