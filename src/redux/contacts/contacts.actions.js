import { FILTER, ADD_CONTACT, DELETE_CONTACT } from './contacts.types';

export const contactsFilterAction = payload => ({
  type: FILTER,
  payload,
});

export const contactsDeleteAction = payload => ({
  type: DELETE_CONTACT,
  payload,
});

export const contactsAddAction = payload => ({
  type: ADD_CONTACT,
  payload,
});
