import { Hotel, Room } from '../interfaces/interfaces';
import { roomStatuses } from './roomStatuses';
import { roomTypes } from './roomTypes';

export const hotelRooms: Room[] = [
	{
		id: 'room1',
		roomType: roomTypes.SINGLE,
		status: roomStatuses.toClean,
		controlCheckedTasks: [],
		cleaningCheckedTasks: [],
	},
	{
		id: 'room2',
		roomType: roomTypes.DOUBLE,
		status: roomStatuses.toControl,
		controlCheckedTasks: [],
		cleaningCheckedTasks: [],
	},
	{
		id: 'room3',
		roomType: roomTypes.SUITE,
		status: roomStatuses.toControl,
		controlCheckedTasks: [],
		cleaningCheckedTasks: [],
	},
	{
		id: 'room4',
		roomType: roomTypes.DELUXE,
		status: roomStatuses.toClean,
		controlCheckedTasks: [],
		cleaningCheckedTasks: [],
	},
];

export const hotels: Hotel[] = [
	{
		hotelId: 'hotel1',
		hotelName: 'Hotel A',
		hotelStreet: 'Street A',
		hotelRooms: hotelRooms,
	},
	{
		hotelId: 'hotel2',
		hotelName: 'Hotel B',
		hotelStreet: 'Street B',
		hotelRooms: hotelRooms,
	},
	{
		hotelId: 'hotel3',
		hotelName: 'Hotel C',
		hotelStreet: 'Street C',
		hotelRooms: hotelRooms,
	},
];
