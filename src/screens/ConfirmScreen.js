import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { LoginManager } from 'react-native-fbsdk';
import {ContinueButton, SeatInput} from '../components';


class ConfirmScreen extends Component {


  _handleLogout = () => {
    LoginManager.logOut()
    this.props.navigation.navigate("Login");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Confirm Screen</Text>

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


export default connect()(ConfirmScreen)
