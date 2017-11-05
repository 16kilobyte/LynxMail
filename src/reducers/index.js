import { combineReducers } from 'redux';
import nav from './navigation-reducer';
import auth from './auth-reducer';

export default combineReducers({
  nav,
  auth
  })