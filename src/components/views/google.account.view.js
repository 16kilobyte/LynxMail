import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Button,
  Text,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'

import Styles from '../style/account.style'

class GoogleAccountView extends Component {
  static navigationOptions = {
    title: 'Google',
    headerTintColor: '#0061b2'
  };

  render() {
    return (
      <ScrollView style={Styles.scrollview}>
        <View style={Styles.content}>
         
        </View>
      </ScrollView>
    )
  }
}

export default connect()(GoogleAccountView)
