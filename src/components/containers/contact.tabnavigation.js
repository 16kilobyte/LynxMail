import React from 'react'
import { connect } from 'react-redux'
import { StackNavigator } from 'react-navigation'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import ContactsView from './../views/contracts.view'

export default StackNavigator({
    Contacts: { screen: ContactsView }
  }, {
    initialRouteName: 'Contacts',
    navigationOptions: {
      gesturesEnabled: false,
      tabBarLabel: 'Contatos',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name="contact-mail" size={focused ? 40 : 30} color={tintColor} />
      )
    }
  })