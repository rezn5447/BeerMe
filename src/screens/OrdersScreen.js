import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class OrdersScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Orders Screen</Text>
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
