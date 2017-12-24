import { combineReducers } from 'redux';

import nav from './navigation.reducer';
import emailReducer from './email.reducer';
import accountReducer from './account.reducer';

export default combineReducers({
  nav,
  emailReducer,
  accountReducer
  })