import { combineReducers } from '@reduxjs/toolkit';
import CounterReducer from '@/app/pages/counter/redux/counter-reducer';
import guestReducer from '@/app/pages/guest-show/redux/guest-reducer';

export default combineReducers({
  counter: CounterReducer,
  guest: guestReducer,
  // register reducer here...
});
