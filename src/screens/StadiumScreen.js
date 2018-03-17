import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

import BackImg from '../assets/bg1.png';
import { Header, ContinueButton } from '../components';

export default class StadiumScreen extends Component {
	handleNav = () => {
		this.props.navigation.navigate('Seat');
	};

	handleLogout = () => {
		this.props.navigation.navigate('Login');
	};

	renderStadiumList() {}

	render() {
		return (
			<ImageBackground img={BackImg}>
				<View style={styles.container}>
					<Header text={'Choose a Stadium'} />
					{this.renderStadiumList()}
					<ContinueButton onPress={this.handleNav} />
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
