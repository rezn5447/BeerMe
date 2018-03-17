import { StackNavigator } from 'react-navigation';
import { LoginScreen, SignUpScreen } from '../screens';

export default StackNavigator(
	{
		Login: {
			screen: LoginScreen
		},
		SignUp: {
			screen: SignUpScreen
		}
	},
	{
		headerMode: 'none',
		lazy: true
	}
);
