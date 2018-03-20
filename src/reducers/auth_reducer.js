import {
	FACEBOOK_LOGIN_SUCCESS,
	FACEBOOK_LOGIN_FAIL,
	FIREBASE_LOGIN_SUCCESS,
	SIGN_OUT
} from '../actions/types';

export default function authReducer(state = {}, action) {
	switch (action.type) {
		case FACEBOOK_LOGIN_SUCCESS:
			return { token: action.payload };
		case FACEBOOK_LOGIN_FAIL:
			return { token: null };
		case FIREBASE_LOGIN_SUCCESS:
			return { token: action.payload };
		default:
			return state;
	}
}
