import { createStore, compose, applyMiddleware } from 'redux';
import { Alert } from 'react-native';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
// import { persistReducer, persistStore } from 'redux-persist';
import firebase from 'firebase';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers';

// import storage from 'redux-persist/lib/storage';
//
// const persistConfig = {
// 	key: 'root',
// 	storage,
// 	whitelist: ['likes'],
// 	blacklist: ['navigation']
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

const firebaseConfig = {
	apiKey: 'AIzaSyAUJZelmikWUWvG4voAufKtD2v5jHYNYQ8',
	authDomain: 'beerme-7a166.firebaseapp.com',
	databaseURL: 'https://beerme-7a166.firebaseio.com',
	projectId: 'beerme-7a166',
	storageBucket: 'beerme-7a166.appspot.com',
	messagingSenderId: '752158950237'
};

const fbDataConfig = {
	userProfile: 'users',
	attachAuthIsReady: true, // attaches auth is ready promise to store
	enableLogging: false
};

firebase.initializeApp(firebaseConfig);

// Create store with reducers and initial state
const store = createStore(
	reducers,
	{},
	compose(
		reactReduxFirebase(firebase, fbDataConfig),
		applyMiddleware(logger, thunk.withExtraArgument(getFirebase))
	)
);

// const persistor = persistStore(store);

export default store;
