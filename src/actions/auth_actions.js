import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import firebase from 'firebase';
import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL, LOGOUT } from './types';

export const facebookLogin = () => async dispatch => {
	const token = await AsyncStorage.getItem('fb_token');
	if (token) {
		//Dispatch an action saying FB login is done
		console.log('token exists');
		dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
	} else {
		// Start up FB Login process
		console.log('no token');
		doFacebookLogin(dispatch);
	}
};

const doFacebookLogin = async dispatch => {
	const { type, token } = await Facebook.logInWithReadPermissionsAsync(
		'1552936404797401',
		{
			permissions: ['public_profile']
		}
	);

	if (type === 'cancel') {
		return dispatch({ type: FACEBOOK_LOGIN_FAIL });
	}

	await AsyncStorage.setItem('fb_token', token);
	// const credential = firebase.auth.FacebookAuthProvider.credential(token);
	// firebase
	// 	.auth()
	// 	.signInWithCredential(credential)
	// 	.catch(err => {
	// 		console.log('fb sign in failed!', err);
	// 	});
	dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};

export const logout = () => async dispatch => {
	dispatch({ type: LOGOUT });
};
