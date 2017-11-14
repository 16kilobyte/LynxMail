import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Button,
  Text,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'

import { fetchListMessages } from '../../actions/email.action';
import Styles from '../style/emails.style'

class EmailsView extends Component {
  static navigationOptions = {
    title: 'Caixa de Entrada',
    headerTintColor: '#0061b2'
  };

  componentWillMount() {
    this.props.fetchListMessages();
  }

  render() {
    const { navigate } = this.props.navigation;
    const { channels, isLoading, error, fetchListMessages } = this.props.email;

    return (
      <ScrollView style={Styles.scrollview}>
        <View style={Styles.content}>
         
        </View>
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    emails: state.emailReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchListMessages() {
      dispatch(fetchListMessages())
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailsView)
