import React from 'react';
import './App.css';
import { increment, decrement, plusten } from './actions';
import { useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Switch,
  } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
