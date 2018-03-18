import React, { Component } from 'react';
import { View, Alert, Text, BackHandler, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { ContinueButton } from '../components';
import BackImg from '../assets/bg1.png';

class StadiumScreen extends Component {
	static navigationOptions = {
		title: 'Stadiums'
	};

	componentDidMount = () => {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
	};

	handleNav = () => {
		this.props.navigation.navigate('Seat');
	};

	handleLogout = () => {
		this.props.navigation.navigate('Login');
	};

	handleBackButton = () => {
		Alert.alert('Logging Out', 'Log out and Return to Title Screen?', [
			{
				text: 'Cancel',
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel'
			},
			{
				text: 'OK',
				onPress: () => BackHandler.exitApp()
			}
		]);
	};

	renderStadiumList() {
		// return this.props.stadiums.map(stadium => )
	}

	render() {
		return (
			<ImageBackground source={BackImg} style={styles.bgImg}>
				<View style={styles.container}>
					<View>
						<Text>Here is where the stadiums go</Text>
					</View>
					<ContinueButton onPress={this.handleNav} />
				</View>
			</ImageBackground>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	bgImg: {
		flex: 1
	}
};

const mapStateToProps = () => {};

export default connect(mapStateToProps, {})(StadiumScreen);
