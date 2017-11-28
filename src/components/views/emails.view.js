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
import EmailModel from '../../models/email.model';
import color from '../style/color.theme';
import Styles from '../style/emails.style'

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
    this.emailResult = EmailModel.get();
    this.emailResult.addListener(this.changeListener.bind(this))
  }

  componentWillMount() {
    this.props.fetchListMessages();
  }

  componentWillUnmount(){
    this.emailResult.removeAllListeners();
  }

  changeListener(emails, changes) {
    console.log(emails);
  }

  renderSeparator = () => {
    return (<View style={Styles.itemSeparator} />);
  };

  render() {
    const { itens, isLoading, error, apiListMessages } = this.props.emails;
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

    if (error) {
      return <ErrorView />
    }
  }
}

function mapStateToProps(state) {
  return {
    emails: state.emailReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    apiListMessages() {
      dispatch(fetchListMessages())
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailsView)
