import { AsyncStorage } from "react-native";
import _ from 'lodash'

export const ACCOUNT_KEY = "account-mail";

export const providerAccount = (account) => {
  return {
    accessToken: account.accessToken,
    name: account.name,
    email:account.email
  }
}

export const addAccount = (account) => { 
  AsyncStorage.setItem(ACCOUNT_KEY, []);
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
