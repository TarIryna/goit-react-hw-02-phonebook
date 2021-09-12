import React from 'react';
import s from './Phonebook.module.css';

const Contact = ({ name, id }) => (
  <li className={s.name} key={id} id={id}>
    {name}
  </li>
);

export default Contact;
