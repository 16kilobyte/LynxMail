import { combineReducers } from 'redux';

import nav from './navigation.reducer';
import emailReducer from './email.reducer';

export default combineReducers({
  nav,
  emailReducer
  })