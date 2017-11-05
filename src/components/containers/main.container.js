import React, { Component } from 'react'
import { connect } from 'react-redux'

import { TabNavigator } from 'react-navigation'

import HomeTabBarNavigation from './home.tabnavigation'
import MailTabBarNavigation from './mail.tabnavigation'
import EventTabBarNavigation from './event.tabnavigation'
import ContactTabBarNavigation from './contact.tabnavigation'
import SettingsTabBarNavigation from './settings.tabnavigation'

export const TabBarNavigation = TabNavigator({
  Home: { 
    screen: HomeTabBarNavigation,
    path: 'home'
  },
  Mail: { 
    screen: MailTabBarNavigation,
    path: 'mail'
  },
  Event: {
    screen: EventTabBarNavigation,
    path: 'event'
  },
  Contact: { 
    screen: ContactTabBarNavigation ,
    path: 'contact'    
  },
  Settings: { 
    screen: SettingsTabBarNavigation ,
    path: 'settings'    
  }
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    initialRouteName: 'Home',
    lazy: true,
    tabBarOptions: {
      showLabel: true,
      activeTintColor: '#3b5998',
      labelStyle: {
        fontSize: 11
      },
      style: {
        shadowColor: '#333333',
        shadowOpacity: 0.3,
        shadowOffset: {
          height: 1,
        },
        shadowRadius: 2,
      },
    }

  }
)

class MainContainer extends Component {
  render() {
    return (
    <TabBarNavigation />
    );
  } 
}

export default connect()(MainContainer)