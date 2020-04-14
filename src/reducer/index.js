import { combineReducers } from 'redux';
import counterReducer from './counter';

const Reducers = combineReducers({
  counter: counterReducer,
});

export default Reducers;