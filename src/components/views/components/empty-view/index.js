import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text
} from 'react-native'

class EmptyView extends Component {
  render() {
    return (
      <Text>Sem Dados</Text>
    );
  }
}

export default connect()(EmptyView)