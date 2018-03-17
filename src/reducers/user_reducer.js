import { SET_USER } from '../actions/types';

export default function userReducer(state = null, action) {
	switch (action.type) {
		case SET_USER:
			return action.payload;
		default:
			return state;
	}
}
