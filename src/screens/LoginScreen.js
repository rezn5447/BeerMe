import React, { Component } from 'react';
import {
	View,
	Text,
	Dimensions,
	KeyboardAvoidingView,
	ImageBackground,
	TouchableOpacity
} from 'react-native';
import Hr from 'react-native-hr-plus';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { SocialIcon, Icon, Input } from 'react-native-elements';

import { facebookLogin } from '../actions';
import BackImg from '../assets/bg2.png';

class LoginScreen extends Component {
	state = { userName: '', password: '' };

	handleToSignUp = () => {
		this.props.navigation.navigate('SignUp');
	};

	handleInputChange = text => {
		this.setState({
			userName: text
		});
	};

	facebookLoginHandler = () => {
		this.props.facebookLogin();
	};

	render() {
		return (
			<ImageBackground source={BackImg} style={styles.bgImage}>
				<View style={styles.container}>
					<KeyboardAvoidingView behavior="padding" style={styles.loginBtn}>
						<SocialIcon
							title="Sign In With Facebook"
							button
							raised
							type="facebook"
							style={{ marginBottom: 15 }}
							onPress={this.facebookLoginHandler}
						/>
						<Hr color="black" width={1}>
							<Text style={styles.textWithDivider}>OR</Text>
						</Hr>

						<Input
							placeholder="Email"
							leftIcon={<Icon name="account-circle" size={34} color="gray" />}
							containerStyle={styles.inputContainer}
						/>
						<Input
							placeholder="Password"
							secureTextEntry
							leftIcon={<Icon name="lock" size={34} color="gray" />}
							containerStyle={styles.inputContainer}
						/>
					</KeyboardAvoidingView>
					<TouchableOpacity style={styles.signUp} onPress={this.handleToSignUp}>
						<Text style={{ color: '#FD4654' }}>To Sign Up</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		);
	}
}

const { width, height } = Dimensions.get('window');

const styles = {
	container: {
		flex: 1,
		marginTop: height / 2.5,
		alignItems: 'center',
		justifyContent: 'center'
	},
	bgImage: {
		flex: 1
	},
	loginBtn: {
		width: width / 1.5,
		paddingTop: 5,
		paddingBottom: 25
	},
	textWithDivider: {
		color: '#5f575a',
		paddingHorizontal: 10
	},
	inputContainer: {
		padding: 5,
		margin: 5,
		width: width / 1.6,
		borderWidth: 1,
		borderRadius: 15
	},
	signUp: {
		position: 'absolute',
		bottom: 25,
		right: width / 6,
		marginTop: 25
	}
};

const mapStateToProps = state => ({
	token: state.auth.token,
	user: state.firebase.profile
});

export default compose(
	firebaseConnect(),
	connect(mapStateToProps, { facebookLogin })
)(LoginScreen);
