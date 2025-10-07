import React from "react";

const Contact = ({ data: { name, number }, onDelete }) => {
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={onDelete}>Delete</button>
    </>
  );
};

export default Contact;
