'use strict';

import _ from 'lodash';
import * as types from './actionTypes';
import * as outlookBuilder from './parseJson/json.outlook.mail';
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
        try {
          const responseValues = response.data.value;
          const emails = responseValues.map((email) => {
            return outlookBuilder.json(email);
          });
          
          realm.write(() => {
            realm.create('Email', emails, true);
          })

          dispatch(receiveData(emails))
        } catch (err) {
          dispatch(requestError(err));
        }

      })
      .catch(err => {
        dispatch(requestError(err));
      });
  }
};