import React, { Component } from 'react'
import {
  View,
  Button,
  Text
} from 'react-native'
import { connect } from 'react-redux'
import { AzureInstance, AzureLoginView } from '../../../../lib/azure-ad'

import Styles from './style'

const CREDENTIAILS = {
  client_id: '584f5e41-234f-480f-87b7-cbefb4e6d35f',
  client_secret: 'iVF5dhQODL5cxLWk1qCJ3mz',
  scope: 'User.ReadBasic.All Mail.Read offline_access'
};

const Instance = new AzureInstance(CREDENTIAILS);

class OutlookAccountView extends Component {
  static navigationOptions = {
    title: 'Outlook',
    headerTintColor: '#0061b2'
  };

  constructor(props){
		super(props);
		this.azureInstance = new AzureInstance(CREDENTIAILS);
  }
  
	_onLoginSuccess() {
		this.azureInstance.getUserInfo().then(result => {
      console.log(result);
      
      const { navigation } = this.props;
      navigation.navigate("Main");
		}).catch(err => {
			console.log(err);
		})
	}

  render() {
    return (
        <AzureLoginView style={Styles.container}
          azureInstance={this.azureInstance}
          loadingMessage="Carregando suas informações"
          onSuccess={this._onLoginSuccess.bind(this)}
        />
    )
  }
}

export default connect()(OutlookAccountView)
