import React from 'react';
import Contact from './Contact';
import s from './Phonebook.module.css';

const Phonebook = ({ contacts, onClick }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <Contact id={id} name={name} number={number} onClick={onClick} />
      ))}
    </ul>
  );
};
export default Phonebook;
