import React, { useState } from 'react';
import { Room } from '../interfaces/interfaces';
import { hotelRooms } from '../constants/hotels';

export const RoomsContext = React.createContext<Room[] | any>([]);

type RoomsProviderProps = {
	children: React.ReactNode;
};

export const RoomsProvider = ({ children }: RoomsProviderProps) => {
	const [rooms, setRooms] = useState(hotelRooms);

	return <RoomsContext.Provider value={[rooms, setRooms]}>{children}</RoomsContext.Provider>;
};
