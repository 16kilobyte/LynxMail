import { AsyncStorage } from 'react-native';
import _ from 'lodash';

export const ACCOUNT_KEY = "account-mail";

export const TypeAccount = {
  outlook: 'account-outlook',
  google: 'account-google'
}

export const addAccount = (account) => {
  return new Promise((resolve, reject) => {
    try {
      realm.write(() => {
        realm.create('Account', account, true);
        resolve();
      })
    } catch (e) {
      reject(e);
    }
  });
};

export const removeAccount = (account) => {
  AsyncStorage.removeItem(ACCOUNT_KEY);
};

export const getAccessToken = (type) => {
  return new Promise((resolve, reject) => {
    const accounts = realm.object('Account').filtered(`type = ${type}`);
    if(accounts != null && accounts.length > 0) {
      resolve(accounts[0].token)
    } else {
      reject();
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