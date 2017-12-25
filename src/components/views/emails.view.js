import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Button,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux'
import _ from 'lodash';
import moment from 'moment';
import IconRight from 'react-native-vector-icons/MaterialIcons'
import IconLeft from 'react-native-vector-icons/MaterialCommunityIcons'
import color from '../style/color.theme';
import Styles from '../style/emails.style'

import { EmptyComponent, ErrorComponent, LoadComponent } from './components/placeholder';
import { fetchListMessages, cacheListMessages } from '../../actions/email.action';
import EmailModel from '../../models/email.model';

class EmailsView extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => {
          console.log('search....');
        }}>
          <IconRight size={30} color={color.second} name="search" style={{ marginRight: 8 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate("eMailCompose");
        }}>
          <IconRight size={30} color={color.second} name="add" style={{ marginRight: 8 }} />
        </TouchableOpacity>
      </View>
    ),
    headerLeft: (
      <TouchableOpacity onPress={() => {
        navigation.navigate("DrawerOpen");
      }}>
        <IconLeft size={30} color={color.second} name="folder" style={{ marginLeft: 8 }} />
      </TouchableOpacity>
    )
  });

  constructor(props, context) {
    super(props, context);

  }

  componentWillMount() {
    // this.props.fetchListMessages();
    this.props.cacheListMessages();
  }

  renderSeparator() {
    return <View style={Styles.itemSeparator} />
  };

  render() {
    const { itens, isLoading, error } = this.props.emails;
    if (isLoading) {
      return <LoadComponent />
    } else if (itens.length === 0) {
      return <EmptyComponent />
    } else if (error) {
      return <ErrorComponent />
    } else {
      return (
        <View style={Styles.container}>
          <FlatList
            style={Styles.listEmails}
            data={itens}
            renderItem={({ item }) => {
              return (
                <View style={Styles.itemContainer}>
                  <View style={Styles.itemViewIsRead} />
                  <View style={Styles.itemViewPreview}>
                    <View style={Styles.itemViewTitle}>
                      <Text style={Styles.itemTextFrom} numberOfLines={1}>{item.from.name}</Text>
                      <Text style={Styles.itemTextReceiveDate} numberOfLines={1}>{moment(item.receivedDateTime).format('DD/MM/YYYY HH:mm')}</Text>
                    </View>
                    <Text style={Styles.itemTextSubject} numberOfLines={1} >{item.subject}</Text>
                    <Text style={Styles.itemTextBodyPreview} numberOfLines={3}>{item.bodyPreview}</Text>
                  </View>
                </View>
              )
            }}
            ItemSeparatorComponent={this.renderSeparator}
            keyExtractor={item => item.id}
          />
        </View>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    emails: state.emails
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchListMessages() {
      dispatch(fetchListMessages())
    },
    cacheListMessages() {
      dispatch(cacheListMessages())
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailsView)
