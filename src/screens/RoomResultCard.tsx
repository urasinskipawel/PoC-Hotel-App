import React, { useContext } from 'react';
import { RoomsContext } from '../contexts/roomsContext';
import { Box, Container, Typography } from '@mui/material';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { RadioForm } from '../components/RadioForm/RadioForm';
import { Room } from '../interfaces/interfaces';
import { LeftDirectionIcon } from '../assets/icons/LeftDirectionIcon';
import { Task } from '../interfaces/interfaces';
import { useFormStyles } from '../themes/styles';

export const RoomResultCard = () => {
	const [rooms] = useContext(RoomsContext);

	const { hotelId, roomId } = useParams<string>();

	const navigate = useNavigate();
	const classes = useFormStyles();

	const currentRoom = rooms.findIndex((room: Room) => room.id === roomId);

	const handleNavigate = () => {
		navigate(`/hotel/${hotelId}`);
	};

	const done = rooms[currentRoom].controlCheckedTasks.reduce((total: number, task: Task) => {
		if (task.label === 'tak') total++;
		return total;
	}, 0);

	return (
		<Container component='main'>
			<Box component={Link} to={`/hotel/${hotelId}`} className={classes.returnBox}>
				<LeftDirectionIcon />
				<Typography
					className={classes.text}
					variant='h5'
					onClick={handleNavigate}
					sx={{
						fontWeight: 600,
						marginLeft: '10px',
					}}>
					{roomId}
				</Typography>
			</Box>
			<Box className={classes.cardNameBox}>
				<Typography className={classes.text} variant='h6' sx={{ fontWeight: 600 }}>
					Wynik kontroli: {done !== 0 ? `${done * 2}0%` : '0%'}
				</Typography>
			</Box>
			<RadioForm />
		</Container>
	);
};
