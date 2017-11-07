import React, { Component } from 'react'
import {
  View,
  Button,
  Text
} from 'react-native'
import { connect } from 'react-redux'
import {ReactNativeAD, ADLoginView, Logger} from 'react-native-azure-ad'
import Styles from './style'

Logger.setLevel('VERBOSE')
const config = {
  client_id : '584f5e41-234f-480f-87b7-cbefb4e6d35f',
  // redirectUrl : 'http://localhost:8080(optional)',
  // authorityHost : 'https://login.microsoftonline.com/<tenant id>/oauth2/authorize(optional)',
  // tenant  : 'common(optional)',
  client_secret : 'iVF5dhQODL5cxLWk1qCJ3mz',
  resources : [
    'https://graph.microsoft.com',
    'https://outlook.office.com',
    'https://outlook.office365.com',
    'https://wiadvancetechnology.sharepoint.com',
    'https://graph.windows.net',
  ]
}
class OutlookAccountView extends Component {
  static navigationOptions = {
    title: 'Outlook',
    headerTintColor: '#0061b2'
  };

  constructor(props) {
    super(props)
    new ReactNativeAD(config)
  }

  onLoginSuccess(cred) {
    console.log(cred)
  }

  render() {
    return (
      <View style={Styles.container}>
        <ADLoginView context={ReactNativeAD.getContext(config.client_id)}
          needLogout={false}
          hideAfterLogin={true}
          onSuccess={this.onLoginSuccess.bind(this)}
        />
      </View>
    )
  }
}

export default connect()(OutlookAccountView)
