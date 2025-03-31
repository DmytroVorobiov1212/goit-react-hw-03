import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import userContacts from './assets/contacts.json';
import { useState, useEffect } from 'react';
import './App.css';
import Title from './components/Title/Title';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return userContacts;
  });

  const [search, setSearch] = useState('');

  const addNewContact = newContact => {
    setContacts(prevContact => {
      return [...prevContact, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContact => {
      return prevContact.filter(contact => contact.id !== contactId);
    });
  };

  const visibleContact = contacts.filter(contact =>
    contact.name?.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Title />
      <ContactForm onAdd={addNewContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={visibleContact} onDelete={deleteContact} />
    </>
  );
};

export default App;
