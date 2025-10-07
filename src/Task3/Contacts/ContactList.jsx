import React from "react";
import Contact from "./Contact";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice.js";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter);

  const visibleContacts = Array.isArray(contacts)
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];
  return (
    <ul>
      {visibleContacts.map((contact) => (
        <li key={contact.id} className="contactsList">
          <Contact
            data={contact}
            onDelete={() => dispatch(deleteContact(contact.id))}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
