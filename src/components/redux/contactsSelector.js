// export const getFiltered = store => store.filtered;

// export const getContacts = store => {
//   return store.contacts.filter(({ name }) =>
//     name.toLowerCase().includes(store.filtered.toLowerCase())
//   );
// };

import { createSelector } from 'reselect';

const getContacts = state => state.contacts;
const getFilter = state => state.filtered;

export const getFiltered = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
