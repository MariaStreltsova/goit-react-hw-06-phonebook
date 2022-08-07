export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = state => {
  const allContacts = getItems(state);
  const filter = getFilter(state);
  if (filter !== '') {
    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(toString(filter).toLowerCase())
    );
  }
};