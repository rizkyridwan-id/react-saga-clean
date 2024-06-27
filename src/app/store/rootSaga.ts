import { all } from 'redux-saga/effects';
import { watchGuestSaga } from '@/pages/guest/model/guestSaga';
import { watchCounterSaga } from '@/pages/counter';

export default function* rootSaga() {
  yield all([
    watchCounterSaga(),
    watchGuestSaga(),
    // register saga here...
  ]);
}
