import * as types from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  error: false,
  emails: []
}

export default function emailReducer(state = initialState, action) {
  switch (action.type) {
    case types.EMAIL_RECV_DATA:
      return {
        ...state,
        isLoading: false,
        error: false,
        emails: action.data
      }
    case types.EMAIL_REQ_DATA:
      return {
        ...state,
        isLoading: true,
        error: false
      }
    case types.EMAIL_REQ_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true
      }
    default:
      return state
  }
}