import React from 'react';
import { Alert } from 'react-native';
import { Notifications } from 'expo';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import store from './src/store';
import Root from './src/Root';

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

		firebase.auth().onAuthStateChanged(user => {
			if (user != null) {
				Alert.alert('We are authenticated now!');
			}

			// Do other things
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
