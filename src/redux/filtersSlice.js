import { createSlice } from "@reduxjs/toolkit";

export const selectFilter = (state) => state.filters.name;

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload.toLowerCase();
    },
  },
});
export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;