import { NavigationActions } from 'react-navigation';

export const navigateToCustomerSide = NavigationActions.navigate({
	routeName: 'Customer',
	params: {},
	action: NavigationActions.navigate({ routeName: 'Customer' })
});

export const navigateToVendorSide = NavigationActions.navigate({
	routeName: 'Vendor',
	params: {},
	action: NavigationActions.navigate({ routeName: 'Vendor' })
});
