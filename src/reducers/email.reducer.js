import { EMAIL_RECV_DATA, EMAIL_REQ_DATA, EMAIL_REQ_ERROR } from '../actions/email.action'; 

const initialState = {
  isLoading: false,
  error: false,
  emails: []
}

export default function emailReducer(state = initialState, action) {
  switch (action.type) {
    case EMAIL_RECV_DATA:
      return {
        ...state,
        isLoading: false,
        error: false,
        emails: action.data
      }
    case EMAIL_REQ_DATA:
      return {
        ...state,
        isLoading: true,
        error: false
      }
    case EMAIL_REQ_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true
      }
    default:
      return state
  }
}