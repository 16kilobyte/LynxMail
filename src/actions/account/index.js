import { AsyncStorage } from "react-native";
import _ from 'lodash';

export const ACCOUNT_KEY = "account-mail";

export const addAccount = (account) => {
  return new Promise((resolve, reject) => {
    if(hasAccount) {
      AsyncStorage.getItem(ACCOUNT_KEY)
        .then(accounts => {
          if(_.some(accounts, {type: account.type})) {
            accounts.push(account);
            AsyncStorage.setItem(ACCOUNT_KEY, accounts);
            resolve(account)
          } else {
            reject('')
          }
        })
        .catch(err => {
          reject(err)
        })
    } else {
      AsyncStorage.setItem(ACCOUNT_KEY, [account]);
      resolve(account);
    }
  });
};

export const removeAccount = (account) => {
  AsyncStorage.removeItem(ACCOUNT_KEY);
};

export const hasAccount = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(ACCOUNT_KEY)
      .then(accounts => {
        if (accounts !== null && accounts.length > 0) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};
