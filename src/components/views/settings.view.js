import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Card, Button, Text } from "react-native-elements";
import { onSignOut } from "../../../actions/account";

import Styles from '../style/settings.style'

class SettingsView extends Component {
  static navigationOptions = {
    title: 'Configurações',
    headerTintColor: '#0061b2'
  };

  render() {
    const { navigation } = this.props;

    return (<View style={{ paddingVertical: 20 }}>
      <Card title="John Doe">
        <View
          style={{
            backgroundColor: "#bcbec1",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: 40,
            alignSelf: "center",
            marginBottom: 20
          }}
        >
          <Text style={{ color: "white", fontSize: 28 }}>JD</Text>
        </View>
        <Button
          backgroundColor="#03A9F4"
          title="SIGN OUT"
          onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}
        />
      </Card>
    </View>
    )
  }
}

export default connect()(SettingsView)
