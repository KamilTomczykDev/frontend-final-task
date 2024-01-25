import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../../services/supabase";

const initialState = {
  contacts: {},
  value: 1,
};

export const uploadContact = createAsyncThunk(
  "contacts/uploadContact",
  async (objectData) => {
    const { data, error } = await supabase
      .from("contacts")
      .insert([objectData])
      .select();

    if (error) throw new Error(error.message);
    return data;
  },
);

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(uploadContact.fulfilled, () => {
      console.log("LoadingFulfilled");
    });
  },
});

export const { increment } = contactsSlice.actions;

export default contactsSlice.reducer;
