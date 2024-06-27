import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { CreateGuestDto, Guest } from '..';

export interface GuestState {
  data: Guest[];
  selectedGuest: Guest | null;
  loading: boolean;
  rowLoading: string | null;
  error: string | null;
}

const initialState: GuestState = {
  data: [],
  selectedGuest: null,
  loading: false,
  rowLoading: null,
  error: null,
};

const guestSlice = createSlice({
  name: 'guest',
  initialState,
  reducers: {
    getGuestRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getGuestSuccess: (state, action: PayloadAction<Guest[]>) => {
      state.loading = false;
      state.data = action.payload;
    },
    getGuestFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    getGuestByIdRequest: (state, _action: PayloadAction<string>) => {
      state.loading = true;
      state.selectedGuest = null;
      state.error = null;
    },
    getGuestByIdSuccess: (state, action: PayloadAction<Guest>) => {
      state.loading = false;
      state.selectedGuest = action.payload;
    },
    getGuestByIdFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    createGuestRequest: (state, _action: PayloadAction<CreateGuestDto>) => {
      state.rowLoading = 'button';
      state.error = null;
    },
    createGuestSuccess: (state, action: PayloadAction<Guest>) => {
      state.rowLoading = null;
      state.data.push(action.payload);
    },
    createGuestFailure: (state, action: PayloadAction<string>) => {
      state.rowLoading = null;
      state.error = action.payload;
    },
    updateGuestRequest: (
      state,
      _action: PayloadAction<{ id: string; data: CreateGuestDto }>
    ) => {
      state.rowLoading = 'button';
      state.error = null;
    },
    updateGuestSuccess: (state, action: PayloadAction<Guest>) => {
      const index = state.data.findIndex((it) => it.id === action.payload.id);
      state.rowLoading = null;
      state.data[index] = action.payload;
    },
    updateGuestFailure: (state, action: PayloadAction<string>) => {
      state.rowLoading = null;
      state.error = action.payload;
    },
    deleteGuestRequest: (state, action: PayloadAction<string>) => {
      state.rowLoading = action.payload;
      state.error = null;
    },
    deleteGuestSuccess: (state, action: PayloadAction<string>) => {
      const index = state.data.findIndex((it) => it.id === action.payload);
      state.data.splice(index, 1);
      state.rowLoading = null;
    },
    deleteGuestFailure: (state, action: PayloadAction<string>) => {
      state.rowLoading = null;
      state.error = action.payload;
    },
    setRowLoading: (state, action: PayloadAction<string | null>) => {
      state.rowLoading = action.payload;
    },
  },
});

export const GuestAction = guestSlice.actions;
export default guestSlice.reducer;
