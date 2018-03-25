import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Alert, Dimensions } from 'react-native';
import { CheckBox, Icon, Input } from 'react-native-elements';
import firebase from 'firebase';
import { ContinueButton } from '../components';

export default class SignUpScreen extends Component {
	state = {
		email: '',
		confirmEmail: '',
		password: '',
		confirmPassword: '',
		checked: false
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

	handleCheckChange = () => {
		this.setState({
			...this.state,
			checked: !this.state.checked
		});
	};

	handleBack = () => {
		this.props.navigation.goBack();
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.textInputContainer}>
					<View style={styles.dualHolder}>
						<Input
							placeholder="Email"
							keyboardType="email-address"
							value={this.state.email}
							leftIcon={<Icon name="mail-outline" size={34} color="gray" />}
							containerStyle={styles.inputContainer}
							onChangeText={value => this.handleInputChange('email', value)}
						/>
						<Input
							placeholder="Confirm Email"
							keyboardType="email-address"
							value={this.state.confirmEmail}
							leftIcon={<Icon name="mail-outline" size={34} color="gray" />}
							containerStyle={styles.inputContainer}
							onChangeText={value =>
								this.handleInputChange('confirmEmail', value)
							}
						/>
					</View>

					<View style={styles.dualHolder}>
						<Input
							placeholder="Password"
							secureTextEntry
							value={this.state.password}
							leftIcon={<Icon name="lock" size={34} color="gray" />}
							containerStyle={styles.inputContainer}
							onChangeText={value => this.handleInputChange('password', value)}
						/>
						<Input
							placeholder="Confirm Password"
							secureTextEntry
							value={this.state.confirmPassword}
							leftIcon={<Icon name="lock" size={34} color="gray" />}
							containerStyle={styles.inputContainer}
							onChangeText={value =>
								this.handleInputChange('confirmPassword', value)
							}
						/>
					</View>

					<CheckBox
						title="I can legally verify I am 21 years or older"
						containerStyle={{ marginBottom: 25 }}
						checked={this.state.checked}
						onPress={this.handleCheckChange}
					/>
					<ContinueButton
						title="Create Account"
						name="account-circle"
						onPress={this.createAccount}
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
		padding: 10,
		width: width / 1.1,
		borderRadius: 15,
		backgroundColor: 'white'
	},
	inputContainer: {
		padding: 5,
		margin: 5,
		borderWidth: 1,
		borderRadius: 15
	},
	dualHolder: {
		margin: 15
	}
};

SignUpScreen.propTypes = {
	email: PropTypes.string,
	password: PropTypes.string,
	age: PropTypes.number
};
