import React from 'react';
import { StyleSheet, Alert, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

export default class BarcodeScannerScreen extends React.Component {
	state = {
		hasCameraPermission: null
	};

	async componentWillMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'granted' });
	}

	handleBarCodeRead = ({ type, data }) => {
		Alert.alert(
			`Bar code with type ${type} and data ${data} has been scanned!`
		);
	};

	render() {
		const { hasCameraPermission } = this.state;

		if (hasCameraPermission === null) {
			return <Text>Requesting for camera permission</Text>;
		} else if (hasCameraPermission === false) {
			return <Text>No access to camera</Text>;
		}
		return (
			<View style={{ flex: 1 }}>
				<BarCodeScanner
					onBarCodeRead={this.handleBarCodeRead}
					style={StyleSheet.absoluteFill}
				/>
			</View>
		);
	}
}
