import { axiosMockapi } from '@/setup/axios/axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { Guest } from '../model/guest-model';
import { AxiosResponse } from 'axios';
import { GuestAction } from './guest-reducer';

export const GuestSagaType = {
  GET_DATA: 'guest/getData',
};

function* getData() {
  try {
    const target = 'Guests';
    const response: AxiosResponse<Guest[]> = yield call(
      axiosMockapi.get<Guest[]>,
      target
    );

    yield put(GuestAction.setData(response.data));
  } catch (e) {
    yield put(GuestAction.setData([]));
  }
}

export function* watchGuestSaga() {
  yield takeLatest(GuestSagaType.GET_DATA, getData);
}

export const GuestSaga = {
  getData: () => ({
    type: GuestSagaType.GET_DATA,
  }),
};
