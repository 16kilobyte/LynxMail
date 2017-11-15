import { AsyncStorage } from 'react-native';
import _ from 'lodash';

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
    const account = realm.objectForPrimaryKey('Account', `id = ${id}`);
    if(account != null) {
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
    const account = realm.objectForPrimaryKey('Account', `id = ${id}`);
    if(account != null) {
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