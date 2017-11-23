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
import { EmptyView, ErrorView, LoadView } from './components/placeholder-view';
import { fetchListMessages } from '../../actions/email.action';

import color from '../style/color.theme';
import Styles from '../style/emails.style'

class EmailsView extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => {
          console.log('search....')
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
    headerLeft: <IconLeft size={30} color={color.second} name="folder" style={{ marginLeft: 8 }} />
  });

  componentWillMount() {
    this.props.fetchListMessages();
  }

  renderSeparator = () => {
    return (<View style={Styles.itemSeparator} />);
  };

  // ListFooterComponent={this.renderFooter}
  // renderFooter = () => {
  //   // if (!this.props.listEmails.isLoading) return null;

  //   return (
  //     <View style={Styles.listFooter}>
  //       <ActivityIndicator animating size="large" />
  //     </View>
  //   );
  // };

  render() {
    const { navigate } = this.props.navigation;
    const { itens, isLoading, error, fetchListMessages } = this.props.emails;

    if (!isLoading && !error && itens) {
      return (
        <View style={Styles.container}>
          <FlatList
            style={Styles.listEmails}
            data={itens}
            renderItem={({ item }) => {
              return (
                <View style={Styles.itemContainer}>
                  <View style={Styles.itemViewIsRead}/>
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
            }
            }
            ItemSeparatorComponent={this.renderSeparator}
            keyExtractor={item => item.id}
          />
        </View>
      )
    }

    if (error) {
      return <ErrorView />
    }

    return <LoadView />
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
