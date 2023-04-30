import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { GlobalStyle } from '../GlobalStyle';
import 'react-toastify/dist/ReactToastify.css';

import { AppStyle } from './App.styled';

import { ContactForm } from '../ContactForm/Form';
import { ContactList } from '../ContactList/ContactList';
import { Section } from '../Section/Section';
import { ContactFilter } from '../ContactFilter/ContactFilter';

const toastSettings = {
  position: 'top-center',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  notify = data => toast.warn(`${data} is already in contacts`, toastSettings);

  addContact = newContact => {
    this.state.contacts.some(
      contact =>
        contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim() ||
        contact.number.trim() === newContact.number.trim()
    )
      ? this.notify(newContact.name)
      : this.setState(prevState => ({
          contacts: [newContact, ...prevState.contacts],
        }));
  };

  deleteContact = expiredContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== expiredContact.id
      ),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter, contacts } = this.state;

    const adjustedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(adjustedFilter)
    );
    return (
      <AppStyle>
        <Section title="Phonebook">
          <ContactForm onAdd={this.addContact} />
        </Section>
        <Section title={'Contacts'}>
          <ContactFilter value={filter} onFilter={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDelete={this.deleteContact}
          />
        </Section>
        <ToastContainer />
        <GlobalStyle />
      </AppStyle>
    );
  }
}
