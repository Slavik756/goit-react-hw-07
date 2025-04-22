import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "./filtersSlice";

export const selectContact = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.loading;
export const selectIsError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContact, selectFilter],
  (contacts, filterName) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
  }
);

const contactsSlice = createSlice({
    name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

extraReducers: (builder) => {
    builder
    .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
    })
.addCase(fetchContacts.fulfilled, (state, action) => {
  state.loading = false;
  state.items = action.payload;
})
.addCase(fetchContacts.rejected, (state) => {
  state.loading = false;
  state.error = true;
})
.addCase(addContact.pending, (state) => {
  state.loading = true;
})
.addCase(addContact.fulfilled, (state, action) => {
  state.loading = false;
  state.items.push(action.payload);
})
.addCase(addContact.rejected, (state) => {
  state.loading = false;
  state.error = true;
})

.addCase(deleteContact.pending, (state) => {
  state.loading = true;
})
.addCase(deleteContact.fulfilled, (state, action) => {
  state.loading = false;
  state.items = state.items.filter(
    (contact) => contact.id !== action.payload
  );
})
.addCase(deleteContact.rejected, (state) => {
  state.loading = false;
  state.error = true;
});
}

});
export default contactsSlice.reducer;