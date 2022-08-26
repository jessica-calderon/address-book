import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [contact, setContact] = useState({
    name: "",
    address: "",
    phone: ""
  });
  const [contacts, setContacts] = useState([]);

  const addContact = (e) => {
    e.preventDefault();
    const { name, email, phone } = contact;
    const formValid =
      name &&
      email &&
      /^[(]{0,1}[0-9]{3}[)]{0,1}[-s.]{0,1}[0-9]{3}[-s.]{0,1}[0-9]{4}$/.test(
        phone
      );
    if (!formValid) {
      return;
    }
    setContacts((contacts) => [
      ...contacts,
      { id: uuidv4(), name, email, phone }
    ]);
  };

  const deleteContact = (index) => {
    setContacts((contacts) => contacts.filter((_, i) => i !== index));
  };

  return (
    <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
    <div className="App">
      <form onSubmit={addContact}>
        <div>
          <label>name</label>
          <input
          placeholder="Enter your name"
            value={contact.name}
            onChange={(e) =>
              setContact((contact) => ({ ...contact, name: e.target.value }))
            }
          />
        </div>
        <div>
          <label>email</label>
          <input
          placeholder="Enter your email"
            value={contact.email}
            onChange={(e) =>
              setContact((contact) => ({ ...contact, email: e.target.value }))
            }
          />
        </div>
        <div>
          <label>phone</label>
          <input
          placeholder="Enter your number"
            value={contact.phone}
            onChange={(e) =>
              setContact((contact) => ({ ...contact, phone: e.target.value }))
            }
          />
        </div>
        <button type="submit">add</button>
      </form>
      </div>
      </div>
      </div>
      </div>
      {contacts.map((contact, index) => {
        return (
          <div key={contact.id}>
            <p>name : {contact.name}</p>
            <p>email : {contact.email}</p>
            <p>phone : {contact.phone}</p>
            <button type="button" onClick={() => deleteContact(index)}>
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
}