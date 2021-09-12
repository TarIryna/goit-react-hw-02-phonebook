import React from 'react';
import s from './Phonebook.module.css';

const Contact = ({ name, id, number, onClick }) => ( <
    li className = { s.name }
    key = { id }
    id = { id } > { name }: < span className = { s.number } > { number } < /span> <
    button className = { s.button }
    type = "button"
    onClick = {
        () => onClick(id) } >
    Delete <
    /button> <
    /li>
);

export default Contact;