import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./contactsSlice"
import filterSliceReducer from "./filtersSlice"

export const store = configureStore({
    reducer: {
        contacts: contactsSlice,
        filters: filterSliceReducer,
    },
});