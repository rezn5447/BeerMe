import { StackNavigator } from 'react-navigation';
import {
	StadiumScreen,
	SeatScreen,
	OrderScreen,
	PlaceScreen,
	ConfirmScreen
} from '../screens';

export default StackNavigator(
	{
		Stadiums: {
			screen: StadiumScreen
		},
		Seat: {
			screen: SeatScreen
		},
		Order: {
			screen: OrderScreen
		},
		Place: {
			screen: PlaceScreen
		},
		Confirm: {
			screen: ConfirmScreen
		}
	},
	{
		headerMode: 'none',
		lazy: true
	}
);
