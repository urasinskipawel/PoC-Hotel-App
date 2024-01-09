import React, { useContext, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { uniqueControlTasksArray } from '../helpers/drawRandomTasks';
import { RadioForm } from '../components/RadioForm/RadioForm';
import { Room } from '../utils/interfaces';
import { RoomsContext } from '../contexts/roomsContext';
import { LeftDirectionIcon } from '../assets/icons/LeftDirectionIcon';
import { roomStatuses } from '../constants/roomStatuses';
import { makeStyles } from '@mui/styles';
import { globalTheme } from '../themes/GlobalTheme';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		justifyContent: 'flex-start',
		minWidth: '290px',
		marginTop: '50px',
		marginBottom: '5px',
		textDecoration: 'none',
	},
	text: {
		color: globalTheme.palette.primary.main,
	},
	cardNameBox: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		minWidth: '290px',
		marginBottom: '40px',
	},
}));

export const RoomControlCard = () => {
	const [countCheckedTasks, setCountCheckedTasks] = useState<number>(0);
	const [rooms] = useContext(RoomsContext);

	const { hotelId, roomId } = useParams<string>();
	const navigate = useNavigate();
	const classes = useStyles();

	const currentRoom = rooms.findIndex((room: Room) => room.id === roomId);

	const handleNavigate = () => {
		if (countCheckedTasks >= 1) {
			rooms[currentRoom].status = roomStatuses.duringControl;
		}
		navigate(`/hotel/${hotelId}`);
	};

	return (
		<Container component='main'>
			<Box component={Link} to={`/hotel/${hotelId}`} className={classes.root}>
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
