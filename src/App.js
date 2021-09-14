import React, { Component } from 'react';
import Notiflix from 'notiflix';
import Form from './components/Form';
import Container from './components/Container';
import Phonebook from './components/Phonebook';
import FilterInput from './components/FilterInput';
import './App.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const contactList = this.state.contacts;
    const findName = contactList.find(contact => contact.name === data.name);
    if (findName) {
      Notiflix.Notify.failure(`${findName.name} is already in contacts`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <h1> Phonebook </h1> <Form onSubmit={this.addContact} /> <h2> Contacts </h2>{' '}
        <FilterInput filter={this.filter} onChange={this.changeFilter} />{' '}
        <Phonebook contacts={visibleContacts} onClick={this.deleteContact} />{' '}
      </Container>
    );
  }
}

export default App;
