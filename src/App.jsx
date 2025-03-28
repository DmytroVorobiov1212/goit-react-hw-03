import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import userContacts from './assets/contacts.json';
import { useState } from 'react';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState(userContacts);
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

  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm onAdd={addNewContact} />
      <SearchBox value={search} onSearch={setSearch} />

      <ContactList contacts={visibleContact} onDelete={deleteContact} />
    </>
  );
};

export default App;
