import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Header, SeatInput } from '../components';

import BackImg from '../assets/bg2.png';

export default class SeatScreen extends Component {
	_handleLogout = () => {
		this.props.navigation.navigate('Login');
	};

	render() {
		return (
			<ImageBackground source={BackImg}>
				<View style={styles.container}>
					<Header text={'Seat, Section, and Row'} />
					<SeatInput text={'Seat'} seat={this.props.store.seat} />
					<SeatInput text={'Section'} seat={this.props.store.seat} />
					<SeatInput text={'Row'} seat={this.props.store.seat} />
				</View>
			</ImageBackground>
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
