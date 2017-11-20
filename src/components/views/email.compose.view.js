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
import {RichTextEditor, RichTextToolbar} from 'react-native-zss-rich-text-editor';
import KeyboardSpacer from 'react-native-keyboard-spacer';

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
  
  constructor(props) {
    super(props);
    this.getHTML = this.getHTML.bind(this);
    this.setFocusHandlers = this.setFocusHandlers.bind(this);
  }

  onEditorInitialized() {
    this.setFocusHandlers();
    this.getHTML();
  }

  async getHTML() {
    const titleHtml = await this.richtext.getTitleHtml();
    const contentHtml = await this.richtext.getContentHtml();
    //alert(titleHtml + ' ' + contentHtml)
  }

  setFocusHandlers() {
    this.richtext.setTitleFocusHandler(() => {
      //alert('title focus');
    });
    this.richtext.setContentFocusHandler(() => {
      //alert('content focus');
    });
  }

  render() {
    return (
      <View style={ Styles.container } >
      
        <FormLabel>Para:</FormLabel>
        <FormInput placeholder="Email address..." />
        <FormLabel>Assunto:</FormLabel>
        <FormInput placeholder="Escreva o assunto do eMail" />
        <RichTextEditor
              ref={(r)=>this.richtext = r}
              style={styles.richText}
              initialTitleHTML={'Logo'}
              initialContentHTML={'<b>Assinatura teste</b><p>Empresa Andrios</p>'}
              editorInitializedCallback={() => this.onEditorInitialized()}
          />
          <RichTextToolbar
            getEditor={() => this.richtext}
          />
        {Platform.OS === 'ios' && <KeyboardSpacer/>}
    </View>
    )
  }
}

export default connect()(EmailComposeView)
