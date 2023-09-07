import PropTypes from 'prop-types';
import React from 'react';
import { Component } from 'react';
import FormModule from './FormContact.module.css';
import { nanoid } from 'nanoid';

export class FormContact extends Component {
    handleFormSubmit = event => {
      event.preventDefault();
  
      const name = event.target.name.value;
      const number = event.target.number.value;
      const { addContact } = this.props;
  
      addContact({ id: nanoid(), name, number });
      event.target.reset();
    };

  render() {
    return (
      <div>
        <form className={FormModule.form} onSubmit={this.onSubmit}>
          <label className={FormModule.lable}>
            <input
              className={FormModule.input}
              type="text"
              name="name"
              placeholder="Name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.onInputChange}
            />
          </label>
          <label className={FormModule.lable}>
            <input
              className={FormModule.input}
              type="tel"
              name="number"
              placeholder="Number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.onInputChange}
            />
          </label>
          <button type="submit" className={FormModule.button}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

FormContact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
