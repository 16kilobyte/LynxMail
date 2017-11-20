import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import eMailsView from '../views/emails.view';
import eMailComposeView from '../views/email.compose.view';
import color from '../style/color.theme';

export default StackNavigator({
    eMails: { 
      screen: eMailsView,
      navigationOptions: {
        headerTitle: 'Caixa de Entrada',
      },
    },
    eMailCompose: { 
      screen: eMailComposeView,
      navigationOptions: {
        headerTitle: 'Nova Mensagem',
      },
    },
  }, {
    initialRouteName: 'eMails',
    mode: 'modal',
    navigationOptions: {
      headerTintColor: color.primary,
      gesturesEnabled: false,
      tabBarLabel: 'e-Mails',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="email" size={28} color={tintColor} />
      )
    }
  })