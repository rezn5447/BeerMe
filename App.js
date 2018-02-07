import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Root from './src/Root';
import {Provider} from 'mobx-react/native';
import firebase from 'react-native-firebase';

import BeerMeStore from './src/stores/BeerMeStore';


export default class App extends Component<{}> {

  componentWillMount(){
    this.store = new BeerMeStore()
  }

  render() {
    return (
      <Provider store={this.store}>
        <Root />
      </Provider>
    );
  }
}
