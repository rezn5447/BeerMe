import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	ImageBackground,
	TouchableOpacity
} from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';
import BackImg from '../assets/bg2.png';

class LoginScreen extends Component {
	facebookLogin = () => {};

	handleToSignUp = () => {
		this.props.navigation.navigate('SignUp');
	};

	render() {
		return (
			<ImageBackground source={BackImg}>
				<View style={styles.container}>
					<View style={styles.loginBtn}>
						<SocialIcon
							title="Sign In With Facebook"
							button
							type="facebook"
							onPress={this.facebookLogin}
						/>
					</View>
					<TouchableOpacity style={styles.signUp} onPress={this.handleToSignUp}>
						<Text>To Sign Up</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		);
	}
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: height / 2.2,
		alignItems: 'center',
		justifyContent: 'center'
	},
	loginBtn: {
		width: width / 1.5,
		paddingTop: 5,
		paddingBottom: 25
	},
	signUp: {
		marginTop: 25
	}
});

export default connect(null, {})(LoginScreen);
