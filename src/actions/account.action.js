import { AsyncStorage } from 'react-native';
import Promise from 'bluebird';
import Config from 'react-native-config';
import { AzureInstance, Auth } from '../lib/azure-ad';
import _ from 'lodash';
import moment from 'moment';

const CREDENTIAILS = {
  client_id: Config.OUTLOOK_CLIENT_ID,
  client_secret: Config.OUTLOOK_CLIENT_SECRET,
  scope: Config.OUTLOOK_SCOPE
};

const Instance = new AzureInstance(CREDENTIAILS);
const azureInstance = new AzureInstance(CREDENTIAILS);
const refreshToken = new Auth(azureInstance);

export const outlookRefreshtoken = () => {
  const account = _.head(realm.objects('Account').filtered('id = $0', 'outlook'));
  if(moment().isAfter(account.token.expireIn)) {
    refreshToken.getTokenFromRefreshToken(account.token.refreshToken)
    .then(refreshTokenUpdate => {
      try {
        realm.write(() => {
          account.token.accessToken = refreshTokenUpdate.accessToken;
          account.token.refreshToken = refreshTokenUpdate.refreshToken;
          account.token.expireIn = refreshTokenUpdate.expires_in;
        });
      } catch(err) {
        console.log(err);
      }

    })
    .catch(err => {
      console.log(err);
      removeAccount(account.id);
    });
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
  return new Promise((resolve, reject) => {
    const account = _.head(realm.objects('Account').filtered('id = $0', id));
    if (account != null) {
      try {
        realm.write(() => {
          realm.delete(account);
          resolve(false);
        });
      } catch (err) {
        reject(err);
      }
    } else {
      resolve(false);
    }
  });
};

export const getAccessToken = (id) => {
  return new Promise((resolve, reject) => {
    const account = _.head(realm.objects('Account').filtered('id = $0', id));
    if (account != null) {
      resolve(account.token)
    } else {
      reject(null);
    }
  });
}

export const hasAccount = () => {
  return new Promise((resolve, reject) => {
    let account = realm.objects('Account');
    if (account.length > 0) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
};