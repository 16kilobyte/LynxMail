import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { addAccount } from "../../../actions/account";

import Styles from './style'

class AddAccountView extends Component {
  static navigationOptions = {
    title: 'Adicionar Conta',
    headerTintColor: '#0061b2',
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  };

  _addOutlookAccountPressButton() {

  }

  _addGoogleAccountPressButton() {

  }

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={Styles.container}>
        <TouchableOpacity onPress={() => {
          navigation.navigate("OutlookAccount");
        }}>
          <View style={Styles.item}>
            <Image resizeMode="contain" style={{ width: 200 }}
              source={require('../../images/outlooklogo272x138.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate("GoogleAccount");
        }}>
          <View style={Styles.item}>
            <Image resizeMode="contain" style={{ width: 200 }}
              source={require('../../images/googlelogo272x92.png')} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

export default connect()(AddAccountView)