import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'

import Navigator from './navigator'

class App extends React.Component {
  render() {
    return (
      <Navigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

export default connect(mapStateToProps)(App)
