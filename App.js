import React from 'react';
import { Alert } from 'react-native';
import { Notifications } from 'expo';
import { Provider } from 'react-redux';
import store from './src/store';
import Root from './src/Root';

import registerForNotifications from './src/services/push_notifications';

export default class App extends React.Component {
	componentDidMount() {
		registerForNotifications();
		Notifications.addListener(notification => {
			const { data: { text } } = notification;

			if (notification.origin === 'recieved' && text) {
				Alert.alert('New Push Notification', text, [{ text: 'Ok' }]);
			}
		});
	}

	render() {
		return (
			<Provider store={store}>
				<Root />
			</Provider>
		);
	}
}
