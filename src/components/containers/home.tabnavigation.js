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
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name="home" size={28} color={tintColor} />
      ),
    }
  })