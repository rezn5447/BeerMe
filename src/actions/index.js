import axios from 'axios';
import firebase from 'react-native-firebase';

import { FETCH_USER, STADIUM_FETCH_SUCCESS, SET_USER } from './types';

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const set_user = user => async dispatch => {
	dispatch({ type: SET_USER, payload: user });
};

export const fetchStadiums = () => async dispatch => {
	firebase
		.database()
		.ref('/stadiums/')
		.on('value', snapshot => {
			dispatch({ type: STADIUM_FETCH_SUCCESS, payload: snapshot.val() });
		});
};

//
// firebase.database().ref(`/users/${currentUser.uid}`)
// .push({ name, phone, shift })
// .then(() => {
// 	dispatch({ type: USER_CREATE });
// 	Actions.employeeList({ type: 'reset' });
// });
// };

//
// firebase.database().ref(`/users/${currentUser.uid}`)
// .on('value', snapshot => {
// 	dispatch({ type: USERS_FETCH_SUCCESS, payload: snapshot.val() });
// });
// export const sign_in = ({email, password}) => {
// 	console.log(this.fb);
// 	return firebase.auth(this.fb)
// }
