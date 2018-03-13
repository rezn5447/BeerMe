import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	Dimensions,
	TouchableOpacity
} from 'react-native';
import firebase from 'react-native-firebase';
import BackImg from '../assets/bg2.png';
import { Background } from '../components';

class LoginScreen extends Component {
	_facebookLogin = () => {
		LoginManager.logInWithReadPermissions(['public_profile', 'email'])
			.then(result => {
				if (!result.isCancelled) {
					// get the access token
					return AccessToken.getCurrentAccessToken();
				}
			})
			.then(data => {
				if (data) {
					// create a new firebase credential with the token
					const credential = firebase.auth.FacebookAuthProvider.credential(
						data.accessToken
					);
					// login with credential
					return firebase.auth().signInWithCredential(credential);
				}
			})
			.then(currentUser => {
				if (currentUser) {
					this.props.set_user(currentUser);
					this.props.navigation.navigate('Customer');
				}
			})
			.catch(error => {
				console.log(`Login fail with error: ${error}`);
			});
	};

	_handleToSignUp = () => {
		this.props.navigation.navigate('SignUp');
	};

	render() {
		return (
			<Background img={BackImg}>
				<View style={styles.container}>
					<View style={styles.loginBtn}>
						<SocialIcon
							title="Sign In With Facebook"
							button
							type="facebook"
							onPress={this._facebookLogin}
						/>
					</View>
					<TouchableOpacity
						style={styles.signUp}
						onPress={this._handleToSignUp}
					>
						<Text>To Sign Up</Text>
					</TouchableOpacity>
				</View>
			</Background>
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

export default connect(null, { set_user })(LoginScreen);
