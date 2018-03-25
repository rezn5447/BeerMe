import { SET_SELECTED_STADIUM, UPDATE_USER_SEATING } from '../actions/types';

const INITIALSTATE = {
	selected: '',
	seat: '',
	section: '',
	row: ''
};

export default function userReducer(state = INITIALSTATE, action) {
	switch (action.type) {
		case SET_SELECTED_STADIUM:
			return { ...state, selected: action.payload };
		case UPDATE_USER_SEATING:
			return { ...state, [action.param]: action.payload };
		default:
			return state;
	}
}
