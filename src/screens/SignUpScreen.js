import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {observable} from 'mobx';
import {observer} from 'mobx-react/native';
import firebase from 'react-native-firebase';

import TopSwitch from '../components/TopSwitch';
import SignUpInput from '../components/SignUpInput';


@observer class SignUpScreen extends Component {
  @observable value = false;


  _handleSignUp = () => {
    firebase.auth().signInAnonymously()
      .then((user) => {
        alert(user.isAnonymous)
        this.props.navigation.navigate('Seat');
      });
  }

  _handleChange = (value) => {
    this.value = value
  }

  _handleBack = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <TopSwitch
          value={this.value}
          onValueChange={(value) => this._handleChange(value)}
        />

        <SignUpInput text={'Username: '} />
        <SignUpInput text={'Confirm Username: '} />
        <SignUpInput text={'Password: '} secureTextEntry={true}/>
        <SignUpInput text={'Confirm Password: '} secureTextEntry={true}/>

        <TouchableOpacity onPress={this._handleSignUp}>
          <Text>SignUp</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputContainer: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    width: (width / 1.1),
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  textInput: {
    width: 150,
    marginLeft: 5,
    borderColor: 'lightgray',
    borderWidth: 1,
    padding: 3,
    borderRadius: 3,
  },
});

export default SignUpScreen;
