import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ContactItemStyled,
  ContactItemName,
  ContactItemNumber,
  ContactItemButton,
} from './ContactItem.styled';

export class ContactItem extends Component {
  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired
    ),
  };
  toHandleDelete = event => {
    this.props.onDelete(event.currentTarget);
  };
  render() {
    return this.props.contacts.map(contact => (
      <ContactItemStyled key={contact.id}>
        <ContactItemName>{contact.name}:</ContactItemName>
        <ContactItemNumber>{contact.number}</ContactItemNumber>
        <ContactItemButton
          id={contact.id}
          type="button"
          onClick={this.toHandleDelete}
        >
          Delete
        </ContactItemButton>
      </ContactItemStyled>
    ));
  }
}
