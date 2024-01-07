import { Hotel } from '../utils/interfaces';

export const hotels: Hotel[] = [
	{
		hotelId: 'hotel1',
		hotelName: 'Hotel A',
		hotelStreet: 'Street A',
		hotelRooms: [
			{ roomId: 'room1', roomName: 'Single Room' },
			{ roomId: 'room2', roomName: 'Double Room' },
		],
	},
	{
		hotelId: 'hotel2',
		hotelName: 'Hotel B',
		hotelStreet: 'Street B',
		hotelRooms: [
			{ roomId: 'room3', roomName: 'Suite' },
			{ roomId: 'room4', roomName: 'Deluxe Room' },
		],
	},
	{
		hotelId: 'hotel3',
		hotelName: 'Hotel C',
		hotelStreet: 'Street C',
		hotelRooms: [
			{ roomId: 'room3', roomName: 'Suite' },
			{ roomId: 'room4', roomName: 'Deluxe Room' },
		],
	},
];
