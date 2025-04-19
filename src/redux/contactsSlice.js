import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
});
export default contactsSlice.reducer;