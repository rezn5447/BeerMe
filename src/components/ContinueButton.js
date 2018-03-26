import React from 'react';
import { Button, Icon } from 'react-native-elements';

const ContinueButton = props => (
	<Button
		iconRight
		icon={<Icon name={props.name} size={25} color="white" />}
		title={props.title}
		onPress={props.onPress}
		buttonStyle={{
			backgroundColor: '#FD4654',
			width: 300,
			height: 45,
			borderRadius: 15
		}}
	/>
);

export default ContinueButton;
