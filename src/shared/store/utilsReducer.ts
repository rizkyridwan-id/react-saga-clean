import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UtilsState {
  toast: {
    message: string | null;
    type: 'success' | 'error' | null;
  };
}

interface ShowToast {
  message: string;
  type: 'success' | 'error' | null;
}

const initialState: UtilsState = {
  toast: {
    message: null,
    type: null,
  },
};

const utilsSlice = createSlice({
  name: 'utils',
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<ShowToast>) => {
      state.toast = action.payload;
    },
    clearToast: (state) => {
      state.toast = initialState.toast;
    },
  },
});

export const { showToast, clearToast } = utilsSlice.actions;
export default utilsSlice.reducer;
