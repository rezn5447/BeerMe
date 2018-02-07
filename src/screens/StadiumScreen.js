import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Picker,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import BackImg from '../assets/bg1.png';

import { Header, ContinueButton, Background } from '../components';
import { LoginManager } from 'react-native-fbsdk';

import {observable} from 'mobx';
import {createAutoSubscriber} from 'firebase-nest';
import {observer, inject } from 'mobx-react/native';


class StadiumScreen extends Component {

  _handleNav = () => {
    this.props.navigation.navigate("Seat");
  }

  _handleLogout = () => {
    LoginManager.logOut()
    this.props.navigation.navigate("Login");
  }

  _onPressItem = (name) => {
    alert(`Selected ${name}`)
    this.props.store.stadiumSelected = name;
  }

  _renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => this._onPressItem(item.name.name)}
    >
     <Text>{item.name.name}</Text>
    </TouchableOpacity>
  );

  _renderStadiumList() {
    const stadiums = this.props.store.getStadiums();
    return (
        stadiums ?
          <FlatList
           data={stadiums.keys().map(k => stadiums.get(k))}
           keyExtractor={(item,index) => index}
           renderItem={this._renderItem}
         />
        :
          <ActivityIndicator size={'large'}/>
    )
  }

  render() {
    return (
      <Background img={BackImg}>
        <View style={styles.container}>
          <Header text={'Choose a Stadium'} />
          {this._renderStadiumList()}
          <ContinueButton onPress={this._handleNav}/>
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


export default inject('store')(createAutoSubscriber({
  getSubs: (props,state) => props.store.allStadiumsSubs(),
  //Returning subscribeSubsWithPromise allows autoSubscriber to track loading status and firebase fetch errors
  subscribeSubs: (subs, props) => props.store.subscribeSubsWithPromise(subs)
})(StadiumScreen))
