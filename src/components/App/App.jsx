import { useState } from "react";
import "./App.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import data from "/src/contacts.json";

function App() {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(data);
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const addContact = (newContact) => {
    setContacts((prevuesContacts) => {
      return [...prevuesContacts, newContact];
    });
  };
  const deleteContact = (contactId) => {
    setContacts((prevuesContacts) => {
      return prevuesContacts.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <div className="mainContainer">
      <h1 className="headerText">Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filterContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
