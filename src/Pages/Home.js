import React from 'react';
import { NavLink as Link } from "react-router-dom";
import { increment, decrement, plusten } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

function Home() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
    <h1>Home</h1>
    <p>カウンター：{counter}</p>
    <button onClick={() => dispatch(increment())}>+1</button>
    <button onClick={() => dispatch(decrement())}>-1</button>
    <button onClick={() => dispatch(plusten())}>+10</button>
    <br />
    <br />
    <Link to='./about'>About</Link>
    </>
  )
}

export default Home;