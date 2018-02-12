import React from 'react';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

export default combineReducers({
	auth: authReducer,
	user: userReducer
});
