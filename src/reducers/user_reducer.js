import { SET_SELECTED_STADIUM } from '../actions/types';

const INITIALSTATE = {
	selected: ''
};

export default function userReducer(state = INITIALSTATE, action) {
	switch (action.type) {
		case SET_SELECTED_STADIUM:
			return { ...state, selected: action.payload };
		default:
			return state;
	}
}
