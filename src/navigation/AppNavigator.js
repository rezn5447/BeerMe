import { StackNavigator } from 'react-navigation';

import LoginNavigator from './LoginNavigator';
import CustomerNavigator from './CustomerNavigator';
import VendorNavigator from './VendorNavigator';
//
// Customer: {
// 	screen: CustomerNavigator
// },
// Vendor: {
// 	screen: VendorNavigator
// }
export default StackNavigator(
	{
		Login: {
			screen: LoginNavigator
		}
	},
	{
		headerMode: 'none',
		lazy: true
	}
);
