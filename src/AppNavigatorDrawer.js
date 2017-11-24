import React from 'react'
import { StackNavigator } from 'react-navigation'

import MainContainer from './components/containers/main.container'

const routeConfigs = {
  Main: { screen: MainContainer }
}

const navigatorConfig = {
  initialRouteName: 'Main',
  headerMode: 'none'
}

export default StackNavigator(routeConfigs, navigatorConfig)