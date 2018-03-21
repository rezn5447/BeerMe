import { StackNavigator } from 'react-navigation';

import CustomerNavigator from './CustomerNavigator';
import VendorNavigator from './VendorNavigator';

export default StackNavigator(
	{
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
