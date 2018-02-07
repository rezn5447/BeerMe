import React from 'react';
import { StackNavigator } from 'react-navigation';
import {
  StadiumScreen,
  SeatScreen,
} from '../screens';

export default StackNavigator ({
  Stadiums: {
    screen: StadiumScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Login',
      title: 'Login Header',
    })
  },
  Seat: {
    screen: SeatScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Sign Up',
      title: 'Sign Up',
    })
  }
}, {
  headerMode: 'none'
})
