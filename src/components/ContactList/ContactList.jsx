import React, { Component } from 'react';
import { ContactListStyle, EmptyList } from './ContactList.styled';

import { ContactItem } from 'components/ContactItem/ContactItem';

export class ContactList extends Component {
  render() {
    console.log(this.props.contacts.length);

    if (this.props.contacts.length < 1) {
      return <EmptyList>No contacts in your phonebook!</EmptyList>;
    } else {
      return (
        <ContactListStyle>
          <ContactItem
            contacts={this.props.contacts}
            onDelete={this.props.onDelete}
          />
        </ContactListStyle>
      );
    }
  }
}
