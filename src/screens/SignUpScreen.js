import React, { Component } from 'react';
import {
	FormLabel,
	FormInput,
	FormValidationMessage
} from 'react-native-elements';
import PropTypes from 'prop-types';
import { View, Alert, Dimensions } from 'react-native';
import firebase from 'firebase';

export default class SignUpScreen extends Component {
	state = {
		email: '',
		ageCheck: false,
		confirmEmail: '',
		age: 0,
		password: '',
		confirmPassword: ''
	};

	_handleSignUp = () => {
		firebase
			.auth()
			.signInAnonymously()
			.then(user => {
				Alert(user.isAnonymous);
				this.props.navigation.navigate('Seat');
			});
	};

	handleChange = (param, value) => {
		this.setState({
			...this.state,
			[param]: value
		});
	};

	handleBack = () => {
		this.props.navigation.goBack();
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.textInputContainer}>
					<FormLabel>Email</FormLabel>
					<FormInput
						value={this.state.email}
						onChangeText={this.handleInputChange}
					/>
					<FormValidationMessage>
						{this.state.errorMessage}
					</FormValidationMessage>

					<CheckBox
						title="I can legally verify I am 21 years or older"
						checked={this.state.ageCheck}
					/>
				</View>
			</View>
		);
	}
}

const { width } = Dimensions.get('window');

const styles = {
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	textInputContainer: {
		flexDirection: 'row',
		padding: 10,
		marginTop: 10,
		marginBottom: 10,
		width: width / 1.1,
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: 'white'
	},
	textInput: {
		width: 150,
		marginLeft: 5,
		borderColor: 'lightgray',
		borderWidth: 1,
		padding: 3,
		borderRadius: 3
	}
};

SignUpScreen.propTypes = {
	email: PropTypes.string,
	password: PropTypes.string,
	age: PropTypes.number
};
