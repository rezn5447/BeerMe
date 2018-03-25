import React, { Component } from 'react';
import { View, Alert, Text, ImageBackground } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Hr from 'react-native-hr-plus';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ContinueButton, ScreenHeader } from '../components';
import { changeSeating } from '../actions';
import BackImg from '../assets/bg1.png';

class SeatScreen extends Component {
	handleLogout = () => {
		this.props.navigation.navigate('Login');
	};

	handleInputChange = (param, value) => {
		this.props.changeSeating(param, value);
	};

	scanTicket = () => {
		Alert.alert('pressed');
	};

	render() {
		return (
			<ImageBackground source={BackImg} style={{ flex: 1 }}>
				<ScreenHeader text="SELECT SEAT SECTION AND ROW" />
				<View style={styles.container}>
					<Input
						placeholder="Seat"
						value={this.props.seat}
						onChangeText={value => this.handleInputChange('seat', value)}
					/>
					<Input
						placeholder="Section"
						value={this.props.section}
						onChangeText={value => this.handleInputChange('section', value)}
					/>
					<Input
						placeholder="Row"
						value={this.props.row}
						onChangeText={value => this.handleInputChange('row', value)}
					/>
					<Hr color="black" width={1}>
						<Text style={styles.textWithDivider}>
							OR SCAN TICKET IF YOU STILL GOT IT!
						</Text>
					</Hr>
					<Button
						title="Scan Ticket"
						buttonStyle={styles.ticketButton}
						onPress={this.scanTicket}
					/>

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
	textWithDivider: {
		color: '#5f575a',
		marginTop: 10,
		marginBottom: 10,
		paddingHorizontal: 10
	}
};

const mapStateToProps = ({ user }) => ({
	seat: user.seat,
	section: user.section,
	row: user.row
});

SeatScreen.propTypes = {
	seat: PropTypes.string.isRequired,
	section: PropTypes.string.isRequired,
	row: PropTypes.string.isRequired
};

export default connect(mapStateToProps, { changeSeating })(SeatScreen);
