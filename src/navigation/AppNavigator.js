import { StackNavigator } from 'react-navigation';

import LoginNavigator from './LoginNavigator';
import CustomerNavigator from './CustomerNavigator';
import VendorNavigator from './VendorNavigator';

export default StackNavigator(
	{
		Login: {
			screen: LoginNavigator
		},
		Customer: {
			screen: CustomerNavigator
		},
		Vendor: {
			screen: VendorNavigator
		}
	},
	{
		headerMode: 'none',
		lazy: true
	}
);
