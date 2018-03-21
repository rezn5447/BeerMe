import React, { Component } from 'react';
import {
	createReduxBoundAddListener,
	createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';

import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import Navigator from './Navigator';
import LoginNavigator from './LoginNavigator';

const middleware = createReactNavigationReduxMiddleware(
	'root',
	state => state.nav
);

const addListener = createReduxBoundAddListener('root');

class AppNavigator extends Component {
	componentDidMount() {}

	render() {
		const navigation = addNavigationHelpers({
			dispatch: this.props.dispatch,
			state: this.props.navigation,
			addListener
		});

		if (this.props.auth.token) {
			return <Navigator navigation={navigation} />;
		}
		return <LoginNavigator />;
	}
}

const mapStateToProps = ({ auth, navigation }) => ({ auth, navigation });

export default connect(mapStateToProps)(AppNavigator);

export const router = Navigator.router;
