import React, { Component } from 'react';
import {
	View,
	Alert,
	ToastAndroid,
	Text,
	BackHandler,
	ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import { signOut } from '../actions';

import { ContinueButton } from '../components';
import BackImg from '../assets/bg1.png';

class StadiumScreen extends Component {
	static navigationOptions = {
		title: 'Stadiums'
	};

	componentDidMount = () => {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
	};

	componentWillUnmount = () => {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
	};

	handleNav = () => {
		this.props.navigation.navigate('Seat');
	};

	handleLogout = () => {
		ToastAndroid.show('Logged Out', ToastAndroid.SHORT);
		this.props.signOut();
	};

	handleCancel = () => {
		ToastAndroid.show('Action canceled', ToastAndroid.SHORT);
	};

	handleBackButton = () => {
		Alert.alert('Logging Out', 'Log out and Return to Title Screen?', [
			{
				text: 'Cancel',
				onPress: this.handleCancel,
				style: 'cancel'
			},
			{
				text: 'OK',
				onPress: this.handleLogout
			}
		]);
		return true;
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
						<Text>{this.props.profile.displayName}</Text>
					</View>
					<ContinueButton
						title="Continue"
						name="account-circle"
						onPress={this.handleNav}
					/>
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

const mapStateToProps = ({ firebase }) => ({
	profile: firebase.profile
});

export default connect(mapStateToProps, { signOut })(StadiumScreen);
