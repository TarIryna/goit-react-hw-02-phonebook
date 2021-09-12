import React from 'react';
import Contact from './Contact';
import s from './Phonebook.module.css';

const Phonebook = ({ contacts }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name }) => (
        <Contact id={id} name={name} />
      ))}
    </ul>
  );
};
export default Phonebook;
