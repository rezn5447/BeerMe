import React, { Component } from 'react';
import { View, Alert, Text, ImageBackground } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Hr from 'react-native-hr-plus';
import { connect } from 'react-redux';
import { ScreenHeader } from '../components';
import BackImg from '../assets/bg1.png';

class SeatScreen extends Component {
	state = {
		seat: '',
		section: '',
		row: ''
	};

	handleLogout = () => {
		this.props.navigation.navigate('Login');
	};

	handleInputChange = (param, value) => {
		this.setState({
			...this.state,
			[param]: value
		});
	};

	scanTicket = () => {
		Alert.alert('pressed');
	};

	render() {
		return (
			<ImageBackground source={BackImg} style={{ flex: 1 }}>
				<ScreenHeader text="SELECT SEAT SECTION AND ROW" />
				<View style={styles.container}>
					<Button
						title="Scan Ticket"
						buttonStyle={styles.ticketButton}
						onPress={this.scanTicket}
					/>
					<Hr color="black" width={1}>
						<Text style={styles.textWithDivider}>OR INPUT MANUALLY</Text>
					</Hr>

					<Input
						placeholder="Seat"
						value={this.state.seat}
						onChangeText={value => this.handleInputChange('seat', value)}
					/>
					<Input
						placeholder="Section"
						value={this.state.section}
						onChangeText={value => this.handleInputChange('section', value)}
					/>
					<Input
						placeholder="Row"
						value={this.state.row}
						onChangeText={value => this.handleInputChange('row', value)}
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

export default connect(null, {})(SeatScreen);
