import React, { useContext, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { DirectionIcon } from '../components/DirectionIcon/DirectionIcon';
import { uniqueControlTasksArray } from '../helpers/drawRandomTasks';
import { RadioForm } from '../components/RadioForm/RadioForm';
import { Room } from '../utils/interfaces';
import { RoomsContext } from '../contexts/roomsContext';

export const RoomControlCard = () => {
	const { hotelId, roomId } = useParams<string>();
	const navigate = useNavigate();
	const [rooms, setRooms] = useContext(RoomsContext);
	const [countCheckedTasks, setCountCheckedTasks] = useState<number>(0);

	const currentRoom = rooms.findIndex((room: Room) => room.id === roomId);

	const handleNavigate = () => {
		if (countCheckedTasks >= 1) {
			rooms[currentRoom].status = 'W trakcie kontroli';
		}
		navigate(`/hotel/${hotelId}`);
	};

	return (
		<Container component='main'>
			<Box
				component={Link}
				to={`/hotel/${hotelId}`}
				sx={{
					display: 'flex',
					justifyContent: 'flex-start',
					minWidth: '290px',
					marginTop: '50px',
					marginBottom: '5px',
					textDecoration: 'none',
				}}>
				<DirectionIcon direction={'left'} />
				<Typography
					variant='h5'
					onClick={handleNavigate}
					sx={{
						color: '#121212',
						fontWeight: 600,
						marginLeft: '10px',
						'&:hover': {
							cursor: 'pointer',
						},
					}}>
					{roomId}
				</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					minWidth: '290px',
					marginBottom: '30px',
				}}>
				<Typography variant='h6' sx={{ color: '#121212', fontWeight: 600 }}>
					Kontrola
				</Typography>
				<Typography variant='body1' sx={{ color: '#121212', fontWeight: 600 }}>
					{countCheckedTasks}/{uniqueControlTasksArray.length}
				</Typography>
			</Box>
			<RadioForm countCheckedTasks={countCheckedTasks} setCountCheckedTasks={setCountCheckedTasks} />
		</Container>
	);
};
