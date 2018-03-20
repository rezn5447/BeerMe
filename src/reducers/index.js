import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import auth from './auth_reducer';
import user from './user_reducer';

export default combineReducers({
	firebase: firebaseReducer,
	auth,
	user
});
