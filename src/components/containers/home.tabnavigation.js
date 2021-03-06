import React from 'react'
import { connect } from 'react-redux'
import { StackNavigator } from 'react-navigation'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import HomeView from './../views/home.view'

export default StackNavigator({
    Home: { screen: HomeView }
  }, {
    initialRouteName: 'Home',
    navigationOptions: {  
      gesturesEnabled: false,
      showLabel: false,
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name="home" size={ focused ? 40 : 30 } color={tintColor} />
      ),
    }
  })