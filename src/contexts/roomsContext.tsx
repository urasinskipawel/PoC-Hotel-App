import React, { Dispatch, SetStateAction, createContext, useState } from 'react';
import { Room } from '../interfaces/interfaces';
import { roomStatuses } from './../constants/roomStatuses';
import { roomTypes } from './../constants/roomTypes';

const roomsArray: Room[] = [
	{
		id: 'room1',
		hotelId: 'hotel1',
		roomType: roomTypes.SINGLE,
		status: roomStatuses.toClean,
		controlCheckedTasks: [],
		cleaningCheckedTasks: [],
	},
	{
		id: 'room2',
		hotelId: 'hotel1',
		roomType: roomTypes.DOUBLE,
		status: roomStatuses.toControl,
		controlCheckedTasks: [],
		cleaningCheckedTasks: [],
	},
	{
		id: 'room3',
		hotelId: 'hotel1',
		roomType: roomTypes.SUITE,
		status: roomStatuses.toControl,
		controlCheckedTasks: [],
		cleaningCheckedTasks: [],
	},
	{
		id: 'room4',
		hotelId: 'hotel1',
		roomType: roomTypes.DELUXE,
		status: roomStatuses.controlled,
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
		roomType: roomTypes.SINGLE,
		status: roomStatuses.toClean,
		controlCheckedTasks: [],
		cleaningCheckedTasks: [],
	},
	{
		id: 'room6',
		hotelId: 'hotel2',
		roomType: roomTypes.DOUBLE,
		status: roomStatuses.toControl,
		controlCheckedTasks: [],
		cleaningCheckedTasks: [],
	},
	{
		id: 'room7',
		hotelId: 'hotel2',
		roomType: roomTypes.SUITE,
		status: roomStatuses.toClean,
		controlCheckedTasks: [],
		cleaningCheckedTasks: [],
	},
	{
		id: 'room8',
		hotelId: 'hotel2',
		roomType: roomTypes.DELUXE,
		status: roomStatuses.controlled,
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
		roomType: roomTypes.SINGLE,
		status: roomStatuses.toClean,
		controlCheckedTasks: [],
		cleaningCheckedTasks: [],
	},
	{
		id: 'room10',
		hotelId: 'hotel3',
		roomType: roomTypes.DOUBLE,
		status: roomStatuses.toClean,
		controlCheckedTasks: [],
		cleaningCheckedTasks: [],
	},
	{
		id: 'room11',
		hotelId: 'hotel3',
		roomType: roomTypes.SUITE,
		status: roomStatuses.toControl,
		controlCheckedTasks: [],
		cleaningCheckedTasks: [],
	},
	{
		id: 'room12',
		hotelId: 'hotel3',
		roomType: roomTypes.DELUXE,
		status: roomStatuses.toControl,
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
