import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from './types';

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
		'372454123222845',
		{
			permissions: ['public_profile']
		}
	);

	if (type === 'cancel') {
		return dispatch({ type: FACEBOOK_LOGIN_FAIL });
	}

	await AsyncStorage.setItem('fb_token', token);
	dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
