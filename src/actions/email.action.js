import _ from 'lodash';
import * as types from './actionTypes';
import * as MSGraph from '../services/microsoft-graph';

function requestData() {
  return {
    type: types.EMAIL_REQ_ERROR
  }
};

function receiveData(json) {
  return {
    type: types.EMAIL_RECV_DATA,
    data: json
  }
};

function requestError(json) {
  return {
    type: types.EMAIL_REQ_ERROR,
    data: json
  }
};

export function fetchListMessages() {
  return function (dispatch) {
    dispatch(requestData());
    MSGraph.OutlookMail.Messages.listMessages()
      .then(response => {
        dispatch(receiveData(response.data.value))
      })
      .catch(err => {
        dispatch(requestError(err));
      });
  }
};