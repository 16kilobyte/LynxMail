import { addNavigationHelpers } from 'react-navigation';

import AppNavigator from '../AppNavigatorDrawer'

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Main'));

export default function navReducer(state = initialState, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  return nextState || state;
};