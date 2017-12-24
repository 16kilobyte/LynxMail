import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text
} from 'react-native'

class ErrorView extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text style={{ textAlign: 'center' }}>
          Desculpe... O serviço está indisponível no momento. Por favor, tente novamente mais tarde. Obrigado!
        </Text>
      </View>
    );
  }
}

export default connect()(ErrorView)