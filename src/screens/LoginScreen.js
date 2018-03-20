import React, { Component } from 'react';
import {
	View,
	Text,
	Alert,
	Dimensions,
	ImageBackground,
	TouchableOpacity
} from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { firebaseConnect } from 'react-redux-firebase';
import { SocialIcon } from 'react-native-elements';

import { facebookLogin } from '../actions';
import BackImg from '../assets/bg2.png';

class LoginScreen extends Component {
	componentDidMount = () => {
		this.onAuthComplete(this.props);
	};

	componentWillReceiveProps = nextProps => {
		this.onAuthComplete(nextProps);
	};

	onAuthComplete = props => {
		if (props.token) {
			Alert.alert('token created');
			// props.firebase.login({
			// 	credential: firebase.auth.FacebookAuthProvider.credential(props.token)
			// });
			this.props.navigation.navigate('Stadiums');
		}
	};

	handleToSignUp = () => {
		this.props.navigation.navigate('SignUp');
	};

	facebookLoginHandler = () => {
		this.props.facebookLogin();
	};

	render() {
		return (
			<ImageBackground source={BackImg} style={styles.bgImage}>
				<View style={styles.container}>
					<View style={styles.loginBtn}>
						<SocialIcon
							title="Sign In With Facebook"
							button
							type="facebook"
							onPress={this.facebookLoginHandler}
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

const styles = {
	container: {
		flex: 1,
		marginTop: height / 2.2,
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
	signUp: {
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
