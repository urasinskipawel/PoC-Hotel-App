import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { RoleContext } from '../../contexts/roleContext';
import { RoomCleaningCard } from '../../screens/RoomCleaningCard';
import { RoomControlCard } from '../../screens/RoomControlCard';
import { RoomResultCard } from '../../screens/RoomResultCard';
import { Navigate } from 'react-router-dom';
import { roles } from '../../utils/users';

export function RoomCard() {
	const { access } = useContext(RoleContext);
	const { state } = useLocation();

	const screenAccesses = [
		{
			access: roles.WORKER.ACCESS,
			screen: RoomCleaningCard,
		},
		{
			access: roles.SUPERVISOR.ACCESS,
			screen: RoomControlCard,
		},
		{
			access: roles.BOSS.ACCESS,
			screen: RoomResultCard,
		},
	];

	const FoundScreen = screenAccesses.find(screen => screen.access.includes(state.status))?.screen;

	const isValidAccess = FoundScreen && access.includes(state.status);

	return isValidAccess ? <FoundScreen /> : <Navigate to={`/hotel/${state.hotelId}`} />;
}
