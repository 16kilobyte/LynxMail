import { AsyncStorage } from "react-native";
import _ from 'lodash';

export const ACCOUNT_KEY = "account-mail";

export const TypeAccount = {
  outlook: 'account-outlook',
  google: 'account-google'
}

export const addAccount = (account) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(ACCOUNT_KEY)
      .then(accounts => {
        if (accounts != null && accounts.length > 0 && !_.some(accounts, { type: account.type })) {
          accounts.push(account);
          AsyncStorage.setItem(ACCOUNT_KEY, JSON.stringify(accounts));
          resolve(account)
        } else {
          AsyncStorage.setItem(ACCOUNT_KEY, JSON.stringify([account]));
          resolve(account);
        }
      })
      .catch(err => {
        reject(err)
      })
  });
};

export const removeAccount = (account) => {
  AsyncStorage.removeItem(ACCOUNT_KEY);
};

export const getAccessToken = (type) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(ACCOUNT_KEY)
      .then(accounts => {
        const accountsDB = JSON.parse(accounts);
        const account = _.filter(accountsDB, (acc) => {
          return acc.type === type;
        });
        resolve(account[0].token);
      })
      .catch(err => {
        reject(err);
      })
  });
}

export const hasAccount = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(ACCOUNT_KEY)
      .then(accounts => {
        const accountsDB = JSON.parse(accounts);
        if (accountsDB !== null && accountsDB.length > 0) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};