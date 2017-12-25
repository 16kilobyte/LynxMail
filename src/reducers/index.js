import { combineReducers } from 'redux';

import nav from './navigation.reducer';
import emails from './email.reducer';
import accounts from './account.reducer';

export default combineReducers({
  nav,
  emails,
  accounts
  })