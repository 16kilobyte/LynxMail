import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import Realm from 'realm';
import Models from './models';
import configureStore from './stores';
import App from './app';

const store = configureStore();

global.realm = new Realm({
  schema: Models
});

console.log(realm.path);

export default class LynxMail extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}