import { AsyncStorage } from "react-native";

export const ACCOUNT_KEY = "account-mail";

export const addAccount = () => AsyncStorage.setItem(ACCOUNT_KEY, "true");

export const removeAccount = () => AsyncStorage.removeItem(ACCOUNT_KEY);

export const hasAccount = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(ACCOUNT_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};
