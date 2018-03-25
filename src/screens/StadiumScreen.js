import React, { Component } from 'react';
import {
	View,
	Text,
	Alert,
	FlatList,
	Platform,
	BackHandler,
	ToastAndroid,
	ImageBackground
} from 'react-native';
import { Button, Header } from 'react-native-elements';
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { signOut, selectStadium } from '../actions';
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
				<Header
					outerContainerStyles={{
						marginTop: 25
					}}
					centerComponent={{
						text: 'SELECT A STADIUM',
						style: { color: '#fff' }
					}}
				/>
				<View style={styles.container}>
					<View style={{ height: 300 }}>
						<Text>Here is where the stadiums go</Text>
						<Text>{this.props.profile.displayName}</Text>
						{this.renderStadiumList()}
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

const mapStateToProps = ({ firebase, user }) => ({
	selected: user.selected,
	profile: firebase.profile,
	stadiums: firebase.ordered.stadiums
});

export default compose(
	firebaseConnect(() => [{ path: 'stadiums' }]),
	connect(mapStateToProps, { signOut, selectStadium })
)(StadiumScreen);
