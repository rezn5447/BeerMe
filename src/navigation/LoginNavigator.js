import React from 'react';
import { StackNavigator } from 'react-navigation';
import {
  LoginScreen,
  SignUpScreen,
} from '../screens';

export default StackNavigator ({
  Login: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Login',
      title: 'Login Header',
    })
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Sign Up',
      title: 'Sign Up',
    })
  }
}, {
  headerMode: 'none'
})
