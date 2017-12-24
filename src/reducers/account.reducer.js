import * as types from '../actions/action.types';

const initialState = {
  accounts: null,
  isExpired: false,
  hasAccount: false,
}

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case types.ACCOUNT_ENABLED:
      return {
        ...state,
        accounts: action.data,
        isExpired: false,
        hasAccount: true,
      }
    case types.ACCOUNT_DISABLED:
      return {
        ...state,
        accounts: null,
        isExpired: false,
        hasAccount: false,
      }
    case types.ACCOUNT_EXPIRED:
      return {
        ...state,
        accounts: action.data,
        isExpired: true,
        hasAccount: true
      }
    default:
      return state
  }
}