import React from 'react'
import { connect } from 'react-redux'
import { StackNavigator } from 'react-navigation'

import Icon from 'react-native-vector-icons/MaterialIcons'

import EventsView from './../views/events.view'

export default StackNavigator({
    Events: { screen: EventsView }
  }, {
    initialRouteName: 'Events',
    navigationOptions: {
      gesturesEnabled: false,
      tabBarLabel: 'Eventos',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name="event" size={ focused ? 40 : 30 } color={tintColor} />
      )
    }
  })