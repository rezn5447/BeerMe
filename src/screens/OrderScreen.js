import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { LoginManager } from 'react-native-fbsdk';
import {ContinueButton, SeatInput} from '../components';
import {observable} from 'mobx';
import {createAutoSubscriber} from 'firebase-nest';
import {observer, inject } from 'mobx-react/native';


@inject('store')
@observer export default class OrderScreen extends Component {


  _handleLogout = () => {
    LoginManager.logOut()
    this.props.navigation.navigate("Login");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Order Screen</Text>

        <TouchableOpacity onPress={this._handleLogout}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
