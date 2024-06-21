import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Guest } from '../model/guest-model';

export interface GuestState {
  formValue: Guest | null;
  data: Guest[];
}

const initialState: GuestState = {
  formValue: null,
  data: [],
};

export const guestSlice = createSlice({
  name: 'guest',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Guest[]>) => {
      state.data = action.payload;
    },
    addData: (state, action: PayloadAction<Guest>) => {
      state.data = [...state.data, action.payload];
    },
  },
});

export const GuestAction = guestSlice.actions;
export default guestSlice.reducer;
