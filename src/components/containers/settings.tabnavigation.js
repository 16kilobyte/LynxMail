import React from 'react'
import { connect } from 'react-redux'
import { StackNavigator } from 'react-navigation'

import Icon from 'react-native-vector-icons/MaterialIcons'

import SettingsView from './../views/settings.view'

export default StackNavigator({
    Settings: { screen: SettingsView }
  }, {
    initialRouteName: 'Settings',
    navigationOptions: {
      gesturesEnabled: false,
      tabBarLabel: 'Ajustes',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="settings" size={27} color={tintColor} />
      )
    }
  })