import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: {},
  value: 1,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = contactsSlice.actions;

export default contactsSlice.reducer;
