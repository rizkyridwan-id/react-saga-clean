import { all } from 'redux-saga/effects';
import { watchCounterSaga } from '../../app/pages/counter/redux/counter-saga';

export default function* rootSaga() {
  yield all([
    watchCounterSaga(),
    // register saga here...
  ]);
}
