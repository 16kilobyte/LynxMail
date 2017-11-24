import { addNavigationHelpers } from 'react-navigation';
import AppNavigator from '../navigator';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Main'));

export default function navigationReducer(state = initialState, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  return nextState || state;
};