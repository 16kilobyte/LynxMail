'use strict';

import _ from 'lodash';
import * as types from './action.types';
import * as outlookBuilder from './parse-json/json.outlook.mail';
import * as MSGraph from '../services/microsoft-graph';


function requestData() {
  return {
    type: types.EMAIL_REQ_DATA
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
            emails.forEach(email => {
              realm.create('Email', email, true);
            });
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