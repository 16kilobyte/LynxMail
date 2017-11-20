import React, { Component } from 'react';
import { Platform, StatusBar } from "react-native";
import { connect } from 'react-redux';
import _ from 'lodash';

import { StackNavigator, TabNavigator } from 'react-navigation';

import HomeTabBarNavigation from './home.tabnavigation';
import MailTabBarNavigation from './mail.tabnavigation';
import EventTabBarNavigation from './event.tabnavigation';
import ContactTabBarNavigation from './contact.tabnavigation';
import SettingsTabBarNavigation from './settings.tabnavigation';

import AddAccountView from '../views/accounts.view';
import OutlookAccountView from '../views/outlook.account.view';
import GoogleAccountView from '../views/google.account.view';

import { hasAccount, outlookRefreshtoken } from "../../actions/account.action";

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
    screen: ContactTabBarNavigation,
    path: 'contact'
  },
  Settings: {
    screen: SettingsTabBarNavigation,
    path: 'settings'
  }
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    initialRouteName: 'Home',
    lazy: true,
    headerMode: 'float',
    tabBarOptions: {
      showLabel: true,
      activeTintColor: '#3b5998',
      labelStyle: {
        fontSize: 11
      },
      style: {
        shadowColor: '#3b5998',
        shadowOpacity: 0.4,
        shadowOffset: {
          height: 2,
        },
        shadowRadius: 3,
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
      .then(res => {
        this.setState({ hasAccount: res, checkedHasAccount: true });
        if (res) {
          outlookRefreshtoken();
        }

      })
      .catch(err => {
        console.log(err);
        alert("An error occurred")
      });
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