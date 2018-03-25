import React from 'react';
import { Header } from 'react-native-elements';

const ScreenHeader = props => (
	<Header
		outerContainerStyles={{
			marginTop: 25
		}}
		centerComponent={{
			text: props.text,
			style: { color: '#fff' }
		}}
	/>
);

export default ScreenHeader;
