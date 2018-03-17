import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class OrderScreen extends Component {
	handleLogout = () => {
		console.log('pressed');
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>Order Screen</Text>

				<TouchableOpacity onPress={this.handleLogout}>
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
		justifyContent: 'center'
	}
});
