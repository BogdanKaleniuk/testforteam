import React from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    dispatch(
      addContact({
        id: Date.now(),
        name,
        number,
      })
    );
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" required />
      <input
        type="text"
        name="number"
        placeholder="Number"
        required
        pattern="[0-9]+"
      />
      <button>Add contact</button>
    </form>
  );
};

export default ContactForm;
