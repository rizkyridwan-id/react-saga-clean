import { put, call, takeLeading } from 'redux-saga/effects';
import * as PromiseMocker from '../../../../helper/promise-mocker';
import { CounterAction } from './counter-reducer';
import { PayloadAction } from '@reduxjs/toolkit';

export const CounterSagaType = {
  INCREMENT_ASYNC: 'counter/incrementAsync',
};

function* incrementAsync(action: PayloadAction<number>) {
  console.log('called');
  yield put(CounterAction.toggleLoading(true));
  yield call(PromiseMocker.delay, 1000);
  yield put(CounterAction.increment(action.payload));
  yield put(CounterAction.toggleLoading(false));
}

// WATCHER
export function* watchCounterSaga() {
  yield takeLeading(CounterSagaType.INCREMENT_ASYNC, incrementAsync);
}
// SAGA ACTION
export const CounterSaga = {
  incrementAsync: (payload: number) => ({
    type: CounterSagaType.INCREMENT_ASYNC,
    payload,
  }),
};
