import React, { Component } from 'react';
import { View, Text, Alert, StyleSheet, Dimensions } from 'react-native';
import firebase from 'firebase';

export default class SignUpScreen extends Component {
	_handleSignUp = () => {
		firebase
			.auth()
			.signInAnonymously()
			.then(user => {
				Alert(user.isAnonymous);
				this.props.navigation.navigate('Seat');
			});
	};

	handleChange = value => {
		this.value = value;
	};

	handleBack = () => {
		this.props.navigation.goBack();
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>Lets try this again </Text>
			</View>
		);
	}
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
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
});
