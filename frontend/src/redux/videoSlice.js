import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

export const videoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logingStart: (state) => {
      state.loading = true;
    },
    logingSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    logingFailure: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export const { logingStart, logingSuccess, logingFailure, logout} = videoSlice.actions
export default videoSlice.reducer
