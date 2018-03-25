import { SET_SELECTED_STADIUM, UPDATE_USER_SEATING } from './types';

export const selectStadium = stadiumKey => async dispatch => {
	dispatch({ type: SET_SELECTED_STADIUM, payload: stadiumKey });
};

export const changeSeating = (param, value) => async dispatch => {
	dispatch({ type: UPDATE_USER_SEATING, param, payload: value });
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

// export const fetchUser = () => async dispatch => {
// 	const res = await axios.get('/api/current_user');
// 	dispatch({ type: FETCH_USER, payload: res.data });
// };
//
// export const setUser = user => async dispatch => {
// 	dispatch({ type: SET_USER, payload: user });
// };
