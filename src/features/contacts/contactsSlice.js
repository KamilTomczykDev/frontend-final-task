import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../../services/supabase";

const initialState = {
  contacts: {},
  status: "idle",
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(uploadContact.fulfilled, (state) => {
      state.status = "succeeded";
      console.log(state.status);
    });
    builder.addCase(uploadContact.pending, (state) => {
      state.status = "loading";
      console.log(state.status);
    });
  },
});

export const { increment } = contactsSlice.actions;

export default contactsSlice.reducer;
