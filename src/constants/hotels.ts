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

// Example control controlCheckedTasks

// controlCheckedTasks: [
// 	{
// 		id: 'task-0',
// 		label: 'tak',
// 		description: 'Odkurzyć lub wytrzepać dywan, zamiatać podłogę.',
// 	},
// 	{
// 		id: 'task-1',
// 		label: 'tak',
// 		description: 'Wypłukać i przetrzeć wewnętrzne powierzchnie czajnika/Cafetiera.',
// 	},
// 	{
// 		id: 'task-2',
// 		label: 'nie',
// 		description: 'Wyczyścić lustro ze smug i plam.',
// 	},
// 	{
// 		id: 'task-3',
// 		label: 'tak',
// 		description: 'Wyczyścić umywalkę, kran, toaletę i wannę/prysznic.',
// 	},
// 	{
// 		id: 'task-4',
// 		label: 'nie',
// 		description: 'Przetrzeć powierzchnie mebli wilgotną szmatką.',
// 	},
// ],
