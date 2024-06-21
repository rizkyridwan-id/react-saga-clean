import { all } from 'redux-saga/effects';
import { watchCounterSaga } from '../../app/pages/counter/redux/counter-saga';
import { watchGuestSaga } from '@/app/pages/guest-show/redux/guest-saga';

export default function* rootSaga() {
  yield all([
    watchCounterSaga(),
    watchGuestSaga(),
    // register saga here...
  ]);
}
