export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = state => {
  const allContacts = getItems(state);
  const filter = getFilter(state);
  const filteredContacts = allContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return filteredContacts;
};
