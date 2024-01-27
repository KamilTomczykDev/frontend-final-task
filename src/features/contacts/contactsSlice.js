import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { uploadContact as uploadContactApi } from "../../services/apiContacts";
import { getContacts as getContactsApi } from "../../services/apiContacts";

const initialState = {
  contacts: [],
  status: "idle",
};

export const uploadContact = createAsyncThunk(
  "contacts/uploadContact",
  async (objectData) => uploadContactApi(objectData),
);

export const getContacts = createAsyncThunk("contacts/getContacts", async () =>
  getContactsApi(),
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
    builder.addCase(getContacts.fulfilled, (state, action) => {
      state.contacts = action.payload;
    });
  },
});

export const { increment } = contactsSlice.actions;

export default contactsSlice.reducer;
