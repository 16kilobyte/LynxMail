import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import Realm from 'realm';
import Models from './models';
import configureStore from './stores'
import AppLynxMail from './app.lynx-mail'
const store = configureStore()

global.realm = new Realm({
  schema: Models
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppLynxMail />
      </Provider>
    )
  }
}