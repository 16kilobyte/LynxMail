import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { connect } from 'react-redux';
import { addAccount } from "../../../actions/account";

import Styles from './style'

class AddAccountView extends Component {
  static navigationOptions = {
    title: 'Adicionar Conta',
    headerTintColor: '#0061b2',
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  };

  renderFlatListItem(item) {
    return (
      <Text style={Styles.item}>{item.key}</Text>
    )
  }
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={Styles.container}>
        <View style={Styles.item}>
          <Image resizeMode="contain" style={{width: 200}}
            source={require('../../images/outlooklogo272x138.png')} />
        </View>
        <View style={Styles.item}>
          <Image resizeMode="contain" style={{width: 200}}
            source={require('../../images/googlelogo272x92.png')} />
        </View>
      </ScrollView>
    )
  }
}

export default connect()(AddAccountView)