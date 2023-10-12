import React, { useState } from 'react';
import { Room } from '../utils/interfaces';

export const status = {
	toClean: 'Do posprzątania',
	toControl: 'Do kontroli',
	duringControl: 'W trakcie kontroli',
	duringClean: 'W trakcie sprzątania',
	controlled: 'Skontrolowany',
};

const rooms = {
	SINGLE: 'Single Room',
	DOUBLE: 'Double Room',
	SUITE: 'Suite Room',
	DELUXE: 'Deluxe Room',
};

const roomsArray: Room[] = [
	{
		id: 'room1',
		hotelId: 'hotel1',
		roomType: rooms.SINGLE,
		status: status.toClean,
		controlCheckedTasks: [],
		cleaningCheckedTasks: [],
	},
	{
		id: 'room2',
		hotelId: 'hotel1',
		roomType: rooms.DOUBLE,
		status: status.toControl,
		controlCheckedTasks: [],
		cleaningCheckedTasks: [],
	},
	{
		id: 'room3',
		hotelId: 'hotel1',
		roomType: rooms.SUITE,
		status: status.toControl,
		controlCheckedTasks: [],
		cleaningCheckedTasks: [],
	},
	{
		id: 'room4',
		hotelId: 'hotel1',
		roomType: rooms.DELUXE,
		status: status.controlled,
		controlCheckedTasks: [
			{
				id: 'task-0',
				label: 'tak',
				description: 'Odkurzyć lub wytrzepać dywan, zamiatać podłogę.',
			},
			{
				id: 'task-1',
				label: 'tak',
				description: 'Wypłukać i przetrzeć wewnętrzne powierzchnie czajnika/Cafetiera.',
			},
			{
				id: 'task-2',
				label: 'nie',
				description: 'Wyczyścić lustro ze smug i plam.',
			},
			{
				id: 'task-3',
				label: 'tak',
				description: 'Wyczyścić umywalkę, kran, toaletę i wannę/prysznic.',
			},
			{
				id: 'task-4',
				label: 'nie',
				description: 'Przetrzeć powierzchnie mebli wilgotną szmatką.',
			},
		],
		cleaningCheckedTasks: [],
	},
	{
		id: 'room5',
		hotelId: 'hotel2',
		roomType: rooms.SINGLE,
		status: status.toClean,
		controlCheckedTasks: [],
		cleaningCheckedTasks: [],
	},
	{
		id: 'room6',
		hotelId: 'hotel2',
		roomType: rooms.DOUBLE,
		status: status.toControl,
		controlCheckedTasks: [],
		cleaningCheckedTasks: [],
	},
	{
		id: 'room7',
		hotelId: 'hotel2',
		roomType: rooms.SUITE,
		status: status.toClean,
		controlCheckedTasks: [],
		cleaningCheckedTasks: [],
	},
	{
		id: 'room8',
		hotelId: 'hotel2',
		roomType: rooms.DELUXE,
		status: status.controlled,
		controlCheckedTasks: [
			{
				id: 'task-0',
				label: 'tak',
				description: 'Odkurzyć lub wytrzepać dywan, zamiatać podłogę.',
			},
			{
				id: 'task-1',
				label: 'tak',
				description: 'Wypłukać i przetrzeć wewnętrzne powierzchnie czajnika/Cafetiera.',
			},
			{
				id: 'task-2',
				label: 'nie',
				description: 'Wyczyścić lustro ze smug i plam.',
			},
			{
				id: 'task-3',
				label: 'tak',
				description: 'Wyczyścić umywalkę, kran, toaletę i wannę/prysznic.',
			},
			{
				id: 'task-4',
				label: 'nie',
				description: 'Przetrzeć powierzchnie mebli wilgotną szmatką.',
			},
		],
		cleaningCheckedTasks: [],
	},
	{
		id: 'room9',
		hotelId: 'hotel3',
		roomType: rooms.SINGLE,
		status: status.toClean,
		controlCheckedTasks: [],
		cleaningCheckedTasks: [],
	},
	{
		id: 'room10',
		hotelId: 'hotel3',
		roomType: rooms.DOUBLE,
		status: status.toClean,
		controlCheckedTasks: [],
		cleaningCheckedTasks: [],
	},
	{
		id: 'room11',
		hotelId: 'hotel3',
		roomType: rooms.SUITE,
		status: status.toControl,
		controlCheckedTasks: [],
		cleaningCheckedTasks: [],
	},
	{
		id: 'room12',
		hotelId: 'hotel3',
		roomType: rooms.DELUXE,
		status: status.toControl,
		controlCheckedTasks: [],
		cleaningCheckedTasks: [],
	},
];

export const RoomsContext = React.createContext<Room[] | any>([]);

type RoomsProviderProps = {
	children: React.ReactNode;
};

export const RoomsProvider = ({ children }: RoomsProviderProps) => {
	const [rooms, setRooms] = useState(roomsArray);

	return <RoomsContext.Provider value={[rooms, setRooms]}>{children}</RoomsContext.Provider>;
};
