import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import IconRight from 'react-native-vector-icons/MaterialIcons';
import IconLeft from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from '../style/email.compose.style';

class EmailComposeView extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <TouchableOpacity onPress={() => {
        console.log('Enviar msg');
        alert("Enviar mensagem");
      }}>
        <IconRight size={30} color="#0061b2" name="send" style={{ marginRight: 8 }} />
      </TouchableOpacity>
    ),
    headerLeft: (
      <TouchableOpacity onPress={() => {
        console.log('Enviar msg')
        navigation.dispatch(NavigationActions.back());
      }}>
        <IconLeft size={30} color="#0061b2" name="close" style={{ marginLeft: 8 }} />
      </TouchableOpacity>
    )
  });

  render() {
    return (
      <View style={ Styles.container } >
      
        <FormLabel>Para:</FormLabel>
        <FormInput placeholder="Email address..." />
        <FormLabel>Assunto:</FormLabel>
        <FormInput placeholder="Escreva o assunto do eMail" />
        
    </View>
    )
  }
}

export default connect()(EmailComposeView)
