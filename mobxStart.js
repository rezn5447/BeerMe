import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {observable} from 'mobx';
import {observer} from 'mobx-react/native';
import firebase from 'react-native-firebase';

@observer class MobxCounter extends Component<{}> {
  @observable count = 0;

  _handleInc = () => {
    this.count++;
  }

  _handleDec = () => {
    this.count--;
  }
  render() {
    return (
      <View style={styles.container}>
      <Text>Counter: {this.count}</Text>
      <TouchableOpacity onPress={this._handleInc}>
        <Text> + </Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={this._handleDec}>
        <Text> - </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default MobxCounter;
