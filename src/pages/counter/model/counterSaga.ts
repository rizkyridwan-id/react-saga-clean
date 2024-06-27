import { put, call, takeLeading } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { PromiseMocker } from '@/shared/lib';
import { CounterAction } from '..';

export const CounterSagaType = {
  INCREMENT_ASYNC: 'counter/incrementAsync',
};

function* incrementAsync(action: PayloadAction<number>) {
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
