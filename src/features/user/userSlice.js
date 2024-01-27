import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isAuthenticated: false,
};

const FAKE_ADMIN = {
  login: "admin",
  password: "1234",
  role: "admin",
};

const FAKE_GUEST = {
  login: "guest",
  password: "4321",
  role: "guest",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, action) {
      if (
        action.payload.login === FAKE_ADMIN.login &&
        action.payload.password === FAKE_ADMIN.password
      ) {
        state.user = FAKE_ADMIN;
        state.isAuthenticated = true;
      }
      if (
        action.payload.login === FAKE_GUEST.login &&
        action.payload.password === FAKE_GUEST.password
      ) {
        state.user = FAKE_GUEST;
        state.isAuthenticated = true;
      }
      state.username = action.payload.username;
    },
    logoutUser(state) {
      state.user = {};
      state.isAuthenticated = false;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
