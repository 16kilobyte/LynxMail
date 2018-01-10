import React, { Component } from 'react';
import { Platform, StatusBar } from "react-native";
import { connect } from 'react-redux';
import _ from 'lodash';
import color from '../style/color.theme';

import { StackNavigator, TabNavigator } from 'react-navigation';

import { EmptyComponent, ErrorComponent, LoadComponent } from '../views/components/placeholder';

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
    screen: HomeTabBarNavigation
  },
  Event: {
    screen: EventTabBarNavigation
  },
  Mail: {
    screen: MailTabBarNavigation
  },
  Contact: {
    screen: ContactTabBarNavigation
  },
  Settings: {
    screen: SettingsTabBarNavigation
  }
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    initialRouteName: 'Home',
    lazy: true,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      // activeTintColor: color.second,
      // inactiveTintColor: color.second,
      labelStyle: {
        fontSize: 11
      },
      pressOpacity: 2,
      animationEnabled: true,
      style: {
        // backgroundColor: color.primary,
        shadowColor: color.primary,
        shadowOpacity: 0.6,
        shadowOffset: {
          height: 2,
        },
        shadowRadius: 3,
      },
    }
  });

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
    this.props.hasAccount();
  }

  componentWillMount() {
    this.props.outlookRefreshtoken()
  }

  render() {
    const { hasAccount, isLoading } = this.props.accounts;
    if (isLoading) {
      return <LoadComponent />
    } else {
      const Main = createRootNavigator(hasAccount);
      return <Main />;
    }
  }
}

function mapStateToProps(state) {
  return {
    accounts: state.accounts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hasAccount() {
      dispatch(hasAccount())
    },
    outlookRefreshtoken() {
      dispatch(outlookRefreshtoken())
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)