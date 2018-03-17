import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ConfirmScreen extends Component {
	_handleLogout = () => {};

	render() {
		return (
			<View style={styles.container}>
				<Text>Confirm Screen</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
