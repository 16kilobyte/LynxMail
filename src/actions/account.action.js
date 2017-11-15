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

export const getAccessToken = (id) => {
  return new Promise((resolve, reject) => {
    const account = realm.object('Account').filtered(`id = ${id}`)[0];
    if(account != null) {
      resolve(account.token)
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