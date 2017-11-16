import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Button,
  Text,
  StyleSheet,
  FlatList
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
    const { emails, isLoading, error, fetchListMessages } = this.props.listEmails;

    return (
        <FlatList
          style={Styles.content}
          data={emails}
          renderItem={({ item }) => (
            <Text>{item.subject}</Text>
          )}
          keyExtractor={item => item.id}
        />
    )
  }
}

function mapStateToProps(state) {
  return {
    listEmails: state.emailReducer
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
