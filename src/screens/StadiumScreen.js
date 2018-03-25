import React, { Component } from 'react';
import {
	View,
	Alert,
	FlatList,
	BackHandler,
	ToastAndroid,
	ImageBackground
} from 'react-native';
import { Button } from 'react-native-elements';
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { signOut, selectStadium } from '../actions';
import { ContinueButton, ScreenHeader } from '../components';
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
		if (this.props.selected === '') {
			Alert.alert('pick a stadium before continuing');
		} else {
			this.props.navigation.navigate('Seat');
		}
	};

	handleLogout = () => {
		ToastAndroid.show('Logged Out', ToastAndroid.SHORT);
		this.props.signOut();
	};

	handleCancel = () => {
		ToastAndroid.show('Action canceled', ToastAndroid.SHORT);
	};

	handleBackButton = () => {
		if (this.props.route === 1) {
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
		}
		this.props.navigation.pop();
		return true;
	};

	handleStadiumPress = stadiumKey => {
		this.props.selectStadium(stadiumKey);
	};

	renderStadiumList() {
		const { stadiums, selected } = this.props;
		return (
			<FlatList
				style={{ margin: 5 }}
				data={stadiums}
				renderItem={({ item }) => (
					<Button
						key={item.key}
						title={item.value.label}
						buttonStyle={[
							styles.stadiumButton,
							selected === item.key && styles.selected
						]}
						onPress={() => this.handleStadiumPress(item.key)}
					/>
				)}
			/>
		);
	}

	render() {
		return (
			<ImageBackground source={BackImg} style={styles.bgImg}>
				<ScreenHeader text="SELECT A STADIUM" />
				<View style={styles.container}>
					<View style={{ height: 300 }}>{this.renderStadiumList()}</View>
					<ContinueButton
						title="Continue"
						disabled={this.props.selected}
						name="arrow-forward"
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
	},
	stadiumButton: {
		margin: 2,
		backgroundColor: '#9e9e9e',
		borderRadius: 5
	},
	selected: {
		backgroundColor: '#00bcd4',
		borderRadius: 25
	},
	TextStyle: {
		fontSize: 25,
		textAlign: 'center'
	}
};

const mapStateToProps = ({ firebase, navigation, user }) => ({
	selected: user.selected,
	profile: firebase.profile,
	route: navigation.routes[0].routes.length,
	stadiums: firebase.ordered.stadiums
});

export default compose(
	firebaseConnect(() => [{ path: 'stadiums' }]),
	connect(mapStateToProps, { signOut, selectStadium })
)(StadiumScreen);
