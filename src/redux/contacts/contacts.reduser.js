import { contactsInitState } from './contacts.init-state';
import { FILTER, DELETE_CONTACT, ADD_CONTACT } from './contacts.types';

export const contactReducer = (
  state = contactsInitState,
  { type, payload }
) => {
  console.log(type);
  switch (type) {
    case FILTER:
      return { ...state, filter: payload };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload),
      };
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, payload] };
    default:
      return state;
  }
};
