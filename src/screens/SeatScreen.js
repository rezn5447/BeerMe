import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import { LoginManager } from 'react-native-fbsdk';
import BackImg from '../assets/bg1.png';
import { Header, ContinueButton, SeatInput, Background } from '../components';
import {observable} from 'mobx';
import {createAutoSubscriber} from 'firebase-nest';
import {observer, inject } from 'mobx-react/native';


@inject('store')
@observer export default class SeatScreen extends Component {


  _handleLogout = () => {
    LoginManager.logOut()
    this.props.navigation.navigate("Login");
  }

  render() {
    return (
      <Background img={BackImg}>
        <View style={styles.container}>
          <Header text={'Seat, Section, and Row'} />
          <SeatInput text={'Seat'} seat={this.props.store.seat} />
          <SeatInput text={'Section'} seat={this.props.store.seat} />
          <SeatInput text={'Row'} seat={this.props.store.seat} />
          <TouchableOpacity onPress={this._handleLogout}>
            <Text>Log Out</Text>
          </TouchableOpacity>
        </View>
      </Background>

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
