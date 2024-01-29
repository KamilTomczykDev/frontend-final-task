import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { insertContact as insertContactApi } from "../../services/apiContacts";
import { getContacts as getContactsApi } from "../../services/apiContacts";
import { updateContact as updateContactApi } from "../../services/apiContacts";

const initialState = {
  contacts: [],
  isLoading: false,
};

export const insertContact = createAsyncThunk(
  "contacts/insertContact",
  async (objectData) => insertContactApi(objectData),
);

export const getContacts = createAsyncThunk("contacts/getContacts", async () =>
  getContactsApi(),
);

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async ({ id, newData }) => {
    updateContactApi(id, newData);
  },
);

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(insertContact.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(insertContact.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contacts = action.payload;
    });
    builder.addCase(getContacts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateContact.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateContact.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const { increment } = contactsSlice.actions;

export default contactsSlice.reducer;
