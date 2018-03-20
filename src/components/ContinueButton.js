import React from 'react';
import { Button } from 'react-native-elements';

const ContinueButton = props => (
	<Button
		iconRight={{ name: 'arrow-forward' }}
		title="Continue"
		onPress={props.onPress}
		buttonStyle={{
			backgroundColor: '#b71205',
			width: 150,
			height: 45,
			borderRadius: 15
		}}
	/>
);

export default ContinueButton;
