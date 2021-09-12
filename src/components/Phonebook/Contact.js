import React from 'react';
import PropTypes from 'prop-types';
import s from './Phonebook.module.css';

const Contact = ({ name, id, number, onClick }) => ( <
    li className = { s.name }
    key = { id }
    id = { id } > { ' ' } { name }: < span className = { s.number } > { number } < /span>{' '} <
    button className = { s.button }
    type = "button"
    onClick = {
        () => onClick(id) } >
    Delete { ' ' } <
    /button>{' '} <
    /li>
);

Contact.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    number: PropTypes.number,
    onClick: PropTypes.func,
};
export default Contact;