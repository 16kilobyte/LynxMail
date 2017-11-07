import React, { Component } from 'react';
import { Platform, StatusBar, FlatList, StyleSheet, Text, View } from "react-native";
import { connect } from 'react-redux';
import { addAccount } from "../../../actions/account";

import Styles from './style'

class AddAccountView extends Component {
  static navigationOptions = {
    title: 'Adicionar Conta',
    headerTintColor: '#0061b2',
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={Styles.container}>
        <FlatList
          data={[
            {key: 'Google'},
            {key: 'Outlook'},
            {key: 'Yahoo'}
          ]}
          renderItem={({item}) => <Text style={Styles.item}>{item.key}</Text>}
        />
      </View>
    )
  }
}

export default connect()(AddAccountView)