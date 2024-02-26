import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // currentUser: localStorage.getItem("user")
  // ? JSON.parse(localStorage.getItem("user"))
  // : [], // Let Suppose Database
  currentUser: null,
  loading: false,
  error: false,
};

export const userSlice = createSlice({
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

export const { logingStart, logingSuccess, logingFailure, logout} = userSlice.actions
export default userSlice.reducer
