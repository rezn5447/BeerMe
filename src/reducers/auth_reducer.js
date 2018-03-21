import {
	FACEBOOK_LOGIN_SUCCESS,
	FACEBOOK_LOGIN_FAIL,
	FIREBASE_LOGIN_SUCCESS,
	SIGN_OUT
} from '../actions/types';

const INITIALSTATE = {};

export default function authReducer(state = INITIALSTATE, action) {
	switch (action.type) {
		case FACEBOOK_LOGIN_SUCCESS:
			return { token: action.payload };
		case FACEBOOK_LOGIN_FAIL:
			return { token: null };
		case FIREBASE_LOGIN_SUCCESS:
			return { token: action.payload };
		case SIGN_OUT:
			return { ...INITIALSTATE };
		default:
			return state;
	}
}
