import React from 'react';
import { Button, Icon } from 'react-native-elements';

const ArrowIcon = () => <Icon name="arrow-right" size={15} color="white" />;

const ContinueButton = () => (
	<Button
		icon={ArrowIcon}
		title="Continue"
		buttonStyle={{
			backgroundColor: '#f44336',
			width: 300,
			height: 45,
			borderColor: 'transparent',
			borderWidth: 0,
			borderRadius: 5
		}}
	/>
);

export default ContinueButton;
