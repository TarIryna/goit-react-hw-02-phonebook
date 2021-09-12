import React, { Component } from 'react';
import Form from './components/Form';
import Container from './components/Container';
import Phonebook from './components/Phonebook';
// import shortid from "shortid";
import './App.css';

class App extends Component {
  state = {
    contacts: [
      { name: 'Rosie Simpson', id: '001' },
      { name: 'Hermione Cline', id: '002' },
      { name: 'Eden Clements', id: '003' },
    ],
    name: '',
  };
  formSubmitHandler = data => {
    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  };
  render() {
    return (
      <Container>
        <Form onSubmit={this.formSubmitHandler} />
        <Phonebook contacts={this.state.contacts} />
      </Container>
    );
  }
}

export default App;
