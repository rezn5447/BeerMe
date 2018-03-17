import React from 'react';
import { Alert, Text } from 'react-native';
import { Notifications } from 'expo';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import store from './src/store';

import registerForNotifications from './src/services/push_notifications';

export default class App extends React.Component {
	componentDidMount() {
		const config = {
			apiKey: 'AIzaSyAUJZelmikWUWvG4voAufKtD2v5jHYNYQ8',
			authDomain: 'beerme-7a166.firebaseapp.com',
			databaseURL: 'https://beerme-7a166.firebaseio.com',
			projectId: 'beerme-7a166',
			storageBucket: 'beerme-7a166.appspot.com',
			messagingSenderId: '752158950237'
		};

		firebase.initializeApp(config);

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
				<Text>Open up App.js to start working on your app!</Text>
				<Text>Changes you make will automatically reload.</Text>
				<Text>Shake your phone to open the developer menu.</Text>
			</Provider>
		);
	}
}
