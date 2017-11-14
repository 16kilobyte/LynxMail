import _ from 'lodash'
import { OutlookMail } from '../services/microsoft-graph';

export const EMAIL_REQ_ERROR = 'EMAIL_REQ_ERROR';
export const EMAIL_REQ_DATA = 'EMAIL_REQ_DATA';
export const EMAIL_RECV_DATA = 'EMAIL_RECV_DATA';

function requestData() {
  return {
    type: EMAIL_REQ_ERROR
  }
};

function receiveData(json) {
  return {
    type: EMAIL_RECV_DATA,
    data: json
  }
};

function requestError(json) {
  return {
    type: EMAIL_REQ_ERROR,
    data: json
  }
};

export function fetchListMessages(cityId) {
  return function (dispatch) {
    dispatch(requestData());
    OutlookMail.MessageService.listMessages()
      .then(response => {
        dispatch(receiveData(response.data.value))
      })
      .catch(err => {
        dispatch(requestError(err));
      });
  }
};