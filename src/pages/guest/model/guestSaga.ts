import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  CreateGuestDto,
  Guest,
  GuestAction,
  createGuest,
  deleteGuest,
  getGuest,
  getGuestById,
  updateGuest,
} from '..';
import { PayloadAction } from '@reduxjs/toolkit';
import { navigateTo } from '@/app/store/rootMiddleware';
import { TypeCheck } from '@/shared/lib';
import { showToast } from '@/shared/store/utilsReducer';
import { RootState } from '@/app/store';

function* getGuestSaga() {
  try {
    const response: Guest[] = yield call(getGuest);

    yield put(GuestAction.getGuestSuccess(response));
  } catch (e) {
    console.error('getGuestSaga', e);
    if (TypeCheck.isError(e)) {
      yield put(GuestAction.getGuestFailure(e.message));
      yield put(showToast({ type: 'error', message: e.message }));
    }
  }
}

function* getGuestByIdSaga({ payload }: PayloadAction<string>) {
  try {
    const guests: Guest[] = yield select(
      (state: RootState) => state.guest.data
    );

    let guestFound = guests.find((it) => it.id === payload);
    if (!guestFound) {
      const response: Guest | string = yield call(getGuestById, payload);
      if (typeof response === 'string') throw new Error(response);

      guestFound = response;
    }

    yield put(GuestAction.getGuestByIdSuccess(guestFound));
  } catch (e) {
    console.error('getGuestByIdSaga', e);
    if (TypeCheck.isError(e)) {
      yield put(GuestAction.getGuestByIdFailure(e.message));
      yield put(showToast({ type: 'error', message: e.message }));
    }
  }
}

function* deleteGuestSaga(action: PayloadAction<string>) {
  try {
    yield call(deleteGuest, action.payload);

    yield put(GuestAction.deleteGuestSuccess(action.payload));
    yield put(
      showToast({ type: 'success', message: 'Guest deleted successfully.' })
    );
  } catch (e) {
    console.error('deleteGuest:', e);
    if (TypeCheck.isError(e)) {
      yield put(GuestAction.deleteGuestFailure(e.message));
      yield put(showToast({ type: 'error', message: e.message }));
    }
  }
}

function* createGuestSaga(action: PayloadAction<CreateGuestDto>) {
  try {
    const guest: Guest = yield call(createGuest, action.payload);

    yield put(GuestAction.createGuestSuccess(guest));
    yield put(navigateTo('/admin/guests'));
  } catch (e) {
    console.error('createGuest:', e);
    if (TypeCheck.isError(e)) {
      yield put(GuestAction.createGuestFailure(e.message));
      yield put(showToast({ type: 'error', message: e.message }));
    }
  }
}

function* updateGuestSaga({
  payload,
}: PayloadAction<{ id: string; data: CreateGuestDto }>) {
  try {
    const guest: Guest = yield call(updateGuest, payload.id, payload.data);

    yield put(GuestAction.updateGuestSuccess(guest));
    yield put(navigateTo('/admin/guests'));
  } catch (e) {
    console.error('updateGuestSaga:', e);
    if (TypeCheck.isError(e)) {
      yield put(GuestAction.updateGuestFailure(e.message));
      yield put(showToast({ type: 'error', message: e.message }));
    }
  }
}

export function* watchGuestSaga() {
  yield takeLatest(GuestAction.getGuestRequest.type, getGuestSaga);
  yield takeLatest(GuestAction.createGuestRequest.type, createGuestSaga);
  yield takeLatest(GuestAction.deleteGuestRequest.type, deleteGuestSaga);
  yield takeLatest(GuestAction.getGuestByIdRequest.type, getGuestByIdSaga);
  yield takeLatest(GuestAction.updateGuestRequest.type, updateGuestSaga);
}
