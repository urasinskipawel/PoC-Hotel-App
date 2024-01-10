import { Hotel } from '../interfaces/interfaces';
import { roomTypes } from './roomTypes';

export const hotels: Hotel[] = [
	{
		hotelId: 'hotel1',
		hotelName: 'Hotel A',
		hotelStreet: 'Street A',
		hotelRooms: [
			{ roomId: 'room1', roomType: roomTypes.SINGLE },
			{ roomId: 'room2', roomType: roomTypes.DOUBLE },
		],
	},
	{
		hotelId: 'hotel2',
		hotelName: 'Hotel B',
		hotelStreet: 'Street B',
		hotelRooms: [
			{ roomId: 'room3', roomType: roomTypes.SUITE },
			{ roomId: 'room4', roomType: roomTypes.DELUXE },
		],
	},
	{
		hotelId: 'hotel3',
		hotelName: 'Hotel C',
		hotelStreet: 'Street C',
		hotelRooms: [
			{ roomId: 'room3', roomType: roomTypes.SUITE },
			{ roomId: 'room4', roomType: roomTypes.DELUXE },
		],
	},
];
