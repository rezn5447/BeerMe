import React from 'react';
import { StackNavigator } from 'react-navigation';

import LoginNavigator from './LoginNavigator';
import CustomerNavigator from './CustomerNavigator';
import VendorNavigator from './VendorNavigator';


export default StackNavigator ({
  Login: {
    screen: LoginNavigator,
    navigationOptions: ({ navigation }) => ({
      routeName: 'Login',
      title: 'Log In',
    })
  },
  Customer: {
    screen: CustomerNavigator,
    navigationOptions: ({ navigation }) => ({
      title: 'Customer Navigator',
    })
  },
  Vendor: {
    screen: VendorNavigator,
    navigationOptions: ({ navigation }) => ({
      title: 'Vendor Navigator',
    })
  },
}, {
  headerMode: 'none'
})
