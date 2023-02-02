// import React, { useState, useEffect, useMemo } from 'react';
import React, { useMemo } from 'react';

import { PropTypes } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import Box from './Box/Box';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
// import { FILTER } from 'redux/contacts/contacts.types';
import {
  contactsFilterAction,
  contactsDeleteAction,
  contactsAddAction,
} from 'redux/contacts/contacts.actions';
// import { ADD_CONTACT,DELETE_CONTACT } from 'redux/contacts/contacts.types';

export const App = () => {
  const contacts = useSelector(state => {
    // ===========ЗАПИС В ЛОКАЛ СТОРЕДЖ==================================
    // return (
    //   JSON.parse(localStorage.getItem('contacts')) ?? state.contacts.contacts
    // );
    // ======================================================================
    return state.contacts.contacts;
  });

  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const onSubmitForm = data => {
    data.id = nanoid();
    // setContacts(prev => [...prev, data]);
    dispatch(contactsAddAction(data));
  };

  const onFilterForm = e => {
    // setFilter(e.currentTarget.value);
    dispatch(contactsFilterAction(e.currentTarget.value));
  };

  const visibleNamesMethod = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  const deleteContact = contactId => {
    // setContacts(prevState =>
    //   prevState.filter(contact => contact.id !== contactId)
    // );
    dispatch(contactsDeleteAction(contactId));
  };
  //
  // ===========ЗАПИС В ЛОКАЛ СТОРЕДЖ==================================
  //
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);
  //
  // =================================================================

  const visibleNames = visibleNamesMethod;

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      fontSize="px"
      color="#010101"
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmitForm} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} onFilter={onFilterForm} />
      <ContactList
        contacts={visibleNames}
        // filter={visibleNames}
        deleteContact={deleteContact}
      />
    </Box>
  );
};

App.propTypes = {
  data: PropTypes.objectOf({
    name: PropTypes.string,
  }),
};
