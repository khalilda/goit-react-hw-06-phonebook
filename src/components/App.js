import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppStyle from './AppStyle.module.css';
import { FilterContact } from './FilterContact/FilterContact';
import { ListContact } from './ListContact/ListContact';
import { FormContact } from './FormContact/FormContactOld';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = event => {
    const loweredCase = event.name.toLowerCase().trim();

    const exists = contacts.some(
      contact => contact.name.toLowerCase().trim() === loweredCase
    );

    if (exists) {
      alert(`${event.name} is already in contacts!`);
    } else {
      setContacts(prevState => [...prevState, event]);
    }
  };

  const addFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  const removeContacts = id => {
    const filtered = contacts.filter(contact => contact.id !== id);
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <div className={AppStyle.container}>
      <h1 className={AppStyle.primeryTitle}>Phonebook</h1>
      <FormContact onSubmit={addContact} />
      <ToastContainer />
      <h2 className={AppStyle.secondaryTitle}>Contacts </h2>
      <FilterContact value={filter} onChange={addFilter} />
      <ListContact
        contacts={filteredContacts}
        onRemoveContact={removeContacts}
      />
    </div>
  );
};
