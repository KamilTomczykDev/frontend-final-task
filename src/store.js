import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./features/contacts/contactsSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    user: userReducer,
  },
});
