import React from 'react'
import { connect } from 'react-redux'
import { DrawerNavigator, addNavigationHelpers } from 'react-navigation'

import AppNavigatorDrawer from './AppNavigatorDrawer'

class AppNavigator extends React.Component {
  render() {
    return (
      <AppNavigatorDrawer navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppNavigator)
