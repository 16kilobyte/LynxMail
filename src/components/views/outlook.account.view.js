import React, { Component } from 'react'
import Config from 'react-native-config';
import {
  View,
  Button,
  Text
} from 'react-native'
import { connect } from 'react-redux'
import { AzureInstance, AzureLoginView } from '../../lib/azure-ad'
import { addAccount, TypeAccount } from '../../actions/account.action';

import Styles from '../style/account.style'

const CREDENTIAILS = {
  client_id: Config.OUTLOOK_CLIENT_ID,
  client_secret: Config.OUTLOOK_CLIENT_SECRET,
  scope: Config.OUTLOOK_SCOPE
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
    const { navigation } = this.props;
    
		this.azureInstance.getUserInfo().then(result => {
      console.log(result);
      const account = {
        type: TypeAccount.outlook,
        token: this.azureInstance.getToken(),
        name: result.displayName,
        email: result.userPrincipaName
      };
      
      addAccount(account)
        .then(success => {
          navigation.navigate("Main");
        });

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
