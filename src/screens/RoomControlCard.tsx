import React, { useContext, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { uniqueControlTasksArray } from '../helpers/drawRandomTasks';
import { RadioForm } from '../components/RadioForm/RadioForm';
import { Room } from '../interfaces/interfaces';
import { RoomsContext } from '../contexts/roomsContext';
import { LeftDirectionIcon } from '../assets/icons/LeftDirectionIcon';
import { roomStatuses } from '../constants/roomStatuses';
import { useFormStyles } from '../themes/styles';

export const RoomControlCard = () => {
	const [countCheckedTasks, setCountCheckedTasks] = useState<number>(0);
	const [rooms] = useContext(RoomsContext);

	const { hotelId, roomId } = useParams<string>();
	const navigate = useNavigate();
	const classes = useFormStyles();

	const currentRoom = rooms.findIndex((room: Room) => room.id === roomId);

	const handleNavigate = () => {
		if (countCheckedTasks >= 1) {
			rooms[currentRoom].status = roomStatuses.duringControl;
		}
		navigate(`/hotel/${hotelId}`);
	};

	return (
		<Container component='main'>
			<Box component={Link} to={`/hotel/${hotelId}`} className={classes.returnBox}>
				<LeftDirectionIcon />
				<Typography
					variant='h5'
					onClick={handleNavigate}
					className={classes.text}
					sx={{
						fontWeight: 600,
						marginLeft: '10px',
					}}>
					{roomId}
				</Typography>
			</Box>
			<Box className={classes.cardNameBox}>
				<Typography className={classes.text} variant='h6' sx={{ fontWeight: 600 }}>
					Kontrola
				</Typography>
				<Typography className={classes.text} variant='body1' sx={{ fontWeight: 600 }}>
					{countCheckedTasks}/{uniqueControlTasksArray.length}
				</Typography>
			</Box>
			<RadioForm setCountCheckedTasks={setCountCheckedTasks} />
		</Container>
	);
};
