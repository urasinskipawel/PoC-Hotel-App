import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import { DirectionIcon } from '../components/DirectionIcon/DirectionIcon';
import { uniqueControlTasksArray } from '../helpers/drawRandomTasks';
import { RadioForm } from '../components/RadioForm/RadioForm';

export const RoomControlCard = () => {
	const { hotelId, roomId } = useParams<string>();
	const [countCheckedTasks, setCountCheckedTasks] = useState<number>(0);

	return (
		<Container component='main'>
			<Box
				sx={{ display: 'flex', justifyContent: 'flex-start', minWidth: '290px', marginTop: '50px', marginBottom: '5px' }}
			>
				<DirectionIcon direction={'left'} />
				<Typography
					variant='h5'
					component={Link}
					to={`/hotel/${hotelId}`}
					sx={{ textDecoration: 'none', color: '#121212', fontWeight: 600, marginLeft: '10px' }}
				>
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
				}}
			>
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
