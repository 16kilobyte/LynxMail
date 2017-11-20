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
import IconRight from 'react-native-vector-icons/MaterialIcons'
import IconLeft from 'react-native-vector-icons/MaterialCommunityIcons'
import { EmptyView, ErrorView, LoadView } from './components/placeholder-view';
import { fetchListMessages } from '../../actions/email.action';
import Styles from '../style/emails.style'

class EmailsView extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Caixa de Entrada',
    headerTintColor: '#0061b2',
    headerRight: (
      <TouchableOpacity onPress={() => {
        navigation.navigate("eMailCompose");
      }}>
        <IconRight size={30} color="#0061b2" name="add" style={{ marginRight: 8 }} />
      </TouchableOpacity>
    ),
    headerLeft: <IconLeft size={30} color="#0061b2" name="folder" style={{ marginLeft: 8 }} />
  });

  constructor() {
    super();
  }

  componentWillMount() {
    this.props.fetchListMessages();
  }

  renderSeparator = () => {
    return (<View style={Styles.itemSeparator} />);
  };

  renderHeader = () => {
    return <SearchBar placeholder="Busca em seus e-mails" lightTheme />;
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
    const { emails, isLoading, error, fetchListMessages } = this.props.listEmails;

    if (!isLoading && !error && emails) {
      return (
        <View style={Styles.container}>
          <FlatList
            style={Styles.listEmails}
            data={emails}
            renderItem={({ item }) => (
              <View style={Styles.itemContainer}>
                <Text style={Styles.itemTextFrom} numberOfLines={1}>{item.from.name}</Text>
                <Text style={Styles.itemTextSubject} numberOfLines={1} >{item.subject}</Text>
                <Text style={Styles.itemTextBodyPreview} numberOfLines={3}>{item.bodyPreview}</Text>
              </View>
            )}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            keyExtractor={item => item.id}
          />
        </View>
      )
    }

    if (error) {
      return <ErrorView />
    }

    return <EmptyView />
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
