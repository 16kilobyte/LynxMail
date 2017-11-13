import React from 'react'
import { connect } from 'react-redux'
import { StackNavigator } from 'react-navigation'

import Icon from 'react-native-vector-icons/MaterialIcons'

import eMailsView from './../views/emails.view'

export default StackNavigator({
    eMails: { screen: eMailsView }
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