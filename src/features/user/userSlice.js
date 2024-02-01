import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

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
        toast.success("You've logged in successfully");
      }
      if (
        action.payload.login === FAKE_GUEST.login &&
        action.payload.password === FAKE_GUEST.password
      ) {
        state.user = FAKE_GUEST;
        state.isAuthenticated = true;
        toast.success("You've logged in successfully");
      }
    },
    logoutUser(state) {
      state.user = {};
      state.isAuthenticated = false;
      toast.success("Logged out successfully");
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
