import { combineReducers } from '@reduxjs/toolkit';
import utilsReducer from '@/shared/store/utilsReducer';
import { guestReducer } from '@/pages/guest';
import { counterReducer } from '@/pages/counter';

export default combineReducers({
  counter: counterReducer,
  guest: guestReducer,
  utils: utilsReducer,
  // register reducer here...
});
