import React, { Component } from 'react';
import { Platform, StatusBar } from "react-native";
import { connect } from 'react-redux';

import { StackNavigator, TabNavigator } from 'react-navigation';

import HomeTabBarNavigation from './home.tabnavigation';
import MailTabBarNavigation from './mail.tabnavigation';
import EventTabBarNavigation from './event.tabnavigation';
import ContactTabBarNavigation from './contact.tabnavigation';
import SettingsTabBarNavigation from './settings.tabnavigation';

import AddAccountView from '../views/accounts/add.account';
import OutlookAccountView from '../views/accounts/providers/outlook.account';
import GoogleAccountView from '../views/accounts/providers/google.account';

import { hasAccount } from "../../actions/account.action";

export const AccountStackNavigation = StackNavigator({
  AddAccount: {
    screen: AddAccountView,
    path: 'addAccount'
  },
  OutlookAccount: {
    screen: OutlookAccountView,
    path: 'outlookAccount'
  },
  GoogleAccount: {
    screen: GoogleAccountView,
    path: 'googleAccount'
  }
});

export const MainTabBarNavigation = TabNavigator({
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
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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

export const createRootNavigator = (hasAccount = false) => {
  return StackNavigator(
    {
      Main: {
        screen: MainTabBarNavigation,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      AddAccount: {
        screen: AccountStackNavigation,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: hasAccount ? "Main" : "AddAccount"
    }
  );
};

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasAccount: false,
      checkedHasAccount: false
    };
  }

  componentWillMount() {
    hasAccount()
      .then(res => this.setState({ hasAccount: res, checkedHasAccount: true }))
      .catch(err => alert("An error occurred"));
  }

  render() {
    const { checkedHasAccount, hasAccount } = this.state;

    if (!checkedHasAccount) {
      return null;
    }

    const Main = createRootNavigator(hasAccount);
    return <Main />;
  }
}

export default connect()(MainContainer)