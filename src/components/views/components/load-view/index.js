import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ActivityIndicator
} from 'react-native'

class LoadView extends Component {
  render() {
    return (
      <ActivityIndicator
        animating={true}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
        size="large"
      />
    );
  }
}

export default connect()(LoadView)