import React from 'react'
import { DrawerNavigator } from 'react-navigation'

import MainContainer from './components/containers/main.container'

const routeConfigs = {
  Main: { screen: MainContainer }
}

const navigatorConfig = {
  initialRouteName: 'Main'
}

export default DrawerNavigator(routeConfigs, navigatorConfig)