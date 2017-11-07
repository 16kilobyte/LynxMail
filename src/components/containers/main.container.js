import React, { Component } from 'react';
import { Platform, StatusBar } from "react-native";
import { connect } from 'react-redux';

import { StackNavigator, TabNavigator } from 'react-navigation';

import HomeTabBarNavigation from './home.tabnavigation';
import MailTabBarNavigation from './mail.tabnavigation';
import EventTabBarNavigation from './event.tabnavigation';
import ContactTabBarNavigation from './contact.tabnavigation';
import SettingsTabBarNavigation from './settings.tabnavigation';

import SignIn from '../views/Auth/sign-in';
import SignUp from '../views/Auth/sign-up';

import { isSignedIn } from "../../actions/auth";

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const AuthStackNavigation = StackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up",
      headerStyle
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In",
      headerStyle
    }
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

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: MainTabBarNavigation,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: AuthStackNavigation,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentWillMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null;
    }

    const Main = createRootNavigator(signedIn);
    return <Main />;
  }
}

export default connect()(MainContainer)