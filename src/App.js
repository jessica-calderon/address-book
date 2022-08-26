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
  <div class="col-sm-4">
    <div class="card m-3">
      <div class="card-body">
    <div class= "form-group" className="App">
      <form onSubmit={addContact}>
        <div>
          <label>Contact Name:</label>
          <input class="ml-2 mb-1 p-2"
          placeholder="Enter your name"
            value={contact.name}
            onChange={(e) =>
              setContact((contact) => ({ ...contact, name: e.target.value }))
            }
          />
        </div>
        <div>
          <label>Contact Email:</label>
          <input
          class="ml-2 mb-1 p-2"
          placeholder="Enter your email"
            value={contact.email}
            onChange={(e) =>
              setContact((contact) => ({ ...contact, email: e.target.value }))
            }
          />
        </div>
        <div>
          <label class="mr-2">Contact Phone:</label>
          <input class="ml-2 p-2"
          placeholder="Enter your number"
            value={contact.phone}
            onChange={(e) =>
              setContact((contact) => ({ ...contact, phone: e.target.value }))
            }
          />
        </div>
        <div class="row">
        <button class="btn btn-block btn-success mt-2" type="submit">Add Contact</button>
        </div>
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
            <button type="button" class="btn btn-danger" onClick={() => deleteContact(index)}>
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
}