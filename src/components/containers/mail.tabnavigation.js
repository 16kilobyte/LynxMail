import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import eMailsView from '../views/emails.view';
import eMailComposeView from '../views/email.compose.view';

export default StackNavigator({
    eMails: { screen: eMailsView },
    eMailCompose: { 
      screen: eMailComposeView,
      navigationOptions: {
        headerTitle: 'Nova Mensagem',
      },
    },
  }, {
    initialRouteName: 'eMails',
    navigationOptions: {
      gesturesEnabled: false,
      tabBarLabel: 'e-Mails',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="email" size={24} color={tintColor} />
      )
    }
  })