import React from 'react';
import { Navigate } from 'react-router';
import { useRole } from '../context/roleContext';
import { RoomCleaningCard } from '../screens/RoomCleaningCard';
import { RoomControlCard } from '../screens/RoomControlCard';

export const RolesRoute = () => {
	const { userRole } = useRole();

	if (userRole === 'worker') {
		return <RoomCleaningCard />;
	} else if (userRole === 'controller') {
		return <RoomControlCard />;
	} else {
		return <Navigate to='/login' />;
	}
};
