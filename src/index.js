import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import configureStore from './stores'
import AppLynxMail from './app.lynx-mail'
const store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppLynxMail />
      </Provider>
    )
  }
}