import { combineReducers } from '@reduxjs/toolkit';
import CounterReducer from '../../pages/counter/redux/counter-reducer';

export const rootReducer = combineReducers({
  counter: CounterReducer,
});
