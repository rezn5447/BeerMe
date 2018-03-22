import React, { Component } from 'react';
import {
	CheckBox,
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
		confirmEmail: '',
		password: '',
		confirmPassword: '',
		age: 0,
		ageCheck: false
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

	handleInputChange = (param, value) => {
		this.setState({
			...this.state,
			[param]: value
		});
	};

	handleCheckChange = value => {
		this.setState({
			...this.state,
			ageCheck: !value
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
						keyboardType="email-address"
						value={this.state.email}
						onChangeText={value => this.handleInputChange('email', value)}
					/>
					<FormLabel>Confirm Email</FormLabel>
					<FormInput
						keyboardType="email-address"
						value={this.state.confirmE8mail}
						onChangeText={value =>
							this.handleInputChange('confirmEmail', value)
						}
					/>
					<FormLabel>Password</FormLabel>
					<FormInput
						keyboardType="default"
						secureTextEntry
						value={this.state.password}
						onChangeText={value => this.handleInputChange('password', value)}
					/>
					<FormLabel>Confirm Password</FormLabel>
					<FormInput
						keyboardType="default"
						secureTextEntry
						value={this.state.confirmPassword}
						onChangeText={value =>
							this.handleInputChange('confirmPassword', value)
						}
					/>
					<FormLabel>Confirm Legal Drinking Age</FormLabel>
					<CheckBox
						title="I can legally verify I am 21 years or older"
						checked={this.state.ageCheck}
						onPress={value => this.handleCheckChange(!value)}
					/>

					<FormValidationMessage>
						{this.state.errorMessage}
					</FormValidationMessage>
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
		padding: 10,
		width: width / 1.1,
		borderRadius: 15,
		backgroundColor: 'white'
	}
};

SignUpScreen.propTypes = {
	email: PropTypes.string,
	password: PropTypes.string,
	age: PropTypes.number
};
