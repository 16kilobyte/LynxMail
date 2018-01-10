import { AsyncStorage } from 'react-native';
import Promise from 'bluebird';
import Config from 'react-native-config';
import { AzureInstance, Auth } from '../lib/azure-ad';
import _ from 'lodash';
import moment from 'moment';

import * as types from './action.types';
import AccountModel from '../models/account.model';


const CREDENTIAILS = {
  client_id: Config.OUTLOOK_CLIENT_ID,
  client_secret: Config.OUTLOOK_CLIENT_SECRET,
  scope: Config.OUTLOOK_SCOPE
};

const Instance = new AzureInstance(CREDENTIAILS);
const azureInstance = new AzureInstance(CREDENTIAILS);
const refreshToken = new Auth(azureInstance);

export const outlookRefreshtoken = () => {
  return (dispatch) => {
    dispatch({
      type: types.ACCOUNT_CHECKING
    });
    const account = _.head(AccountModel.get().filtered('id = $0', 'outlook'));
    if (account != null && moment().isAfter(account.token.expireIn)) {
      refreshToken.getTokenFromRefreshToken(account.token.refreshToken)
        .then(refreshTokenUpdate => {
          try {
            realm.write(() => {
              account.token.accessToken = refreshTokenUpdate.accessToken;
              account.token.refreshToken = refreshTokenUpdate.refreshToken;
              account.token.expireIn = refreshTokenUpdate.expires_in;
            });

            dispatch({
              type: types.ACCOUNT_ENABLED,
              data: Array.from(AccountModel.get())
            });

          } catch (err) {
            console.log(err);
            dispatch({
              type: types.ACCOUNT_EXPIRED,
              data: Array.from(AccountModel.get())
            });
          }

        })
        .catch(err => {
          console.log(err);
          removeAccount(account.id);
        });
    } else {
      dispatch({
        type: types.ACCOUNT_DISABLED
      });
    }
  }
}

export const addAccount = (account) => {
  return new Promise((resolve, reject) => {
    try {
      realm.write(() => {
        realm.create('Account', account, true);
        resolve(true);
      })
    } catch (e) {
      reject(e);
    }
  });
};

export const removeAccount = (id) => {
  return (dispatch) => {
    const account = _.head(AccountModel.get().filtered('id = $0', id));
    if (account) {
      try {
        realm.write(() => {
          realm.delete(account);
        });
        
        dispatch({
          type: types.ACCOUNT_DISABLED
        });

      } catch (err) {
        dispatch({
          type: types.ACCOUNT_DISABLED
        });
      }
    } else {
      dispatch({
        type: types.ACCOUNT_DISABLED
      });
    }
  }
};

export const getAccessToken = (id) => {
  return new Promise((resolve, reject) => {
    const account = _.head(AccountModel.get().filtered('id = $0', id));
    if (account) {
      resolve(account.token)
    } else {
      reject(null);
    }
  });
}

export const hasAccount = () => {
  return (dispatch) => {
    let account = AccountModel.get();
    if (account.length > 0) {
      outlookRefreshtoken();
    } else {
      dispatch({
        type: types.ACCOUNT_DISABLED
      });
    }
  }
}