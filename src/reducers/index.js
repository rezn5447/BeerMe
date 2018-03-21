import { combineReducers } from 'redux';
import { Alert } from 'react-native';

import { firebaseReducer } from 'react-redux-firebase';
import { SIGN_OUT } from '../actions/types';
import auth from './auth_reducer';
import user from './user_reducer';
import navigation from './navigation_reducer';

const appReducer = combineReducers({
	firebase: firebaseReducer,
	auth,
	user,
	navigation
});

const rootReducer = (state, action) => {
	if (action.type === SIGN_OUT) {
		Alert.alert(`signout = ${SIGN_OUT}`);
		state = undefined;
	}
	return appReducer(state, action);
};

export default rootReducer;
