import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactsInitState } from './contacts/contacts.init-state';
import { contactReducer } from './contacts/contacts.reduser';

const enhancer = devToolsEnhancer();
const initState = {
  contacts: contactsInitState,
};

const rootReducer = combineReducers({
  contacts: contactReducer,
});

export const store = createStore(rootReducer, initState, enhancer);
//
//
//
//
