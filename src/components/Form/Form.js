import React, { Component } from 'react';
import s from './Form.module.css';
import shortid from 'shortid';

class Form extends Component {
  state = {
    id: '',
    name: '',
  };

  onSubmitForm = e => {
    e.preventDefault();
    const inputNameId = shortid.generate();
    this.setState({ id: inputNameId });
    this.props.onSubmit(this.state);
  };

  onChangeInput = e => {
    const { name, value } = e.currentTarget;
    const inputNameId = shortid.generate();
    this.setState({ [name]: value, id: inputNameId });
  };

  reset = () => {
    this.setState({ name: '', id: '' });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.onSubmitForm}>
        <h1>Phonebook</h1>
        <label>
          Name
          <input type="text" name="name" value={this.state.name} onChange={this.onChangeInput} />
        </label>
        <button type="submit" key="submitBtn">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
