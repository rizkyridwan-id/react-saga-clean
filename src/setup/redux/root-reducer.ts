import { combineReducers } from '@reduxjs/toolkit';
import CounterReducer from '../../app/pages/counter/redux/counter-reducer';

export default combineReducers({
  counter: CounterReducer,
  // register reducer here...
});
