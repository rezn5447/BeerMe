import { StackNavigator } from 'react-navigation';
import { StadiumScreen, SeatScreen } from '../screens';

export default StackNavigator(
	{
		Stadiums: {
			screen: StadiumScreen
		},
		Seat: {
			screen: SeatScreen
		}
	},
	{
		headerMode: 'none'
	}
);
