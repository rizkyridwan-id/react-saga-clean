import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
  loading: boolean;
}

const initialState: CounterState = {
  value: 0,
  loading: false,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
    toggleLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const CounterAction = counterSlice.actions;

export default counterSlice.reducer;
