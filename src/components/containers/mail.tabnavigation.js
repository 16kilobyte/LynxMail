import React from 'react'
import { connect } from 'react-redux'
import { StackNavigator } from 'react-navigation'

import Icon from 'react-native-vector-icons/MaterialIcons'

import MailsView from './../views/mails'

export default StackNavigator({
    Mails: { screen: MailsView }
  }, {
    initialRouteName: 'Mails',
    navigationOptions: {
      gesturesEnabled: false,
      tabBarLabel: 'e-Mails',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="email" size={24} color={tintColor} />
      )
    }
  })