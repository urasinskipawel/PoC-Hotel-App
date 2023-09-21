import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Box, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { DirectionIcon } from '../components/DirectionIcon/DirectionIcon';

interface Room {
	roomId: string;
	roomName: string;
}

const rooms: Room[] = [
	{ roomId: 'room1', roomName: 'Room 1' },
	{ roomId: 'room2', roomName: 'Room 2' },
	{ roomId: 'room3', roomName: 'Room 3' },
	{ roomId: 'room4', roomName: 'Room 4' },
];

export const HotelDetails = () => {
	const { hotelId } = useParams<{ hotelId: string }>();

	return (
		<Container
			component='main'
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				backgroundColor: '#EEF4F5',
				padding: '0px',
				height: '100vh',
			}}
		>
			<Box
				sx={{ display: 'flex', justifyContent: 'flex-start', minWidth: '290px', marginTop: '50px', marginBottom: '30px' }}
			>
				<DirectionIcon direction={'left'} />
				<Typography
					variant='h5'
					component={Link}
					to={`/hotels`}
					sx={{ fontWeight: 600, textDecoration: 'none', color: '#121212', marginLeft: '10px' }}
				>
					Szczegóły hotelu
				</Typography>
			</Box>
			{rooms.map(room => (
				<Box>
					<Button
						key={room.roomId}
						variant='contained'
						color='primary'
						component={Link}
						to={`/hotel/${hotelId}/room/${room.roomId}`}
						sx={{
							display: 'flex',
							justifContent: 'center',
							alighItems: 'center',
							position: 'relative',
							minWidth: '290px',
							height: '75px',
							border: '3px solid #121212',
							borderRadius: '5px',
							py: '9.25px',
						}}
					>
						<Typography variant='h6' sx={{ fontSize: '20px', fontWeight: 600, left: '20px', flex: '1', textAlign: 'center' }}>
							{room.roomName}
						</Typography>
						<DirectionIcon direction={'right'} />
					</Button>
					<Typography
						variant='body1'
						sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-4px', fontSize: '16px' }}
					>
						status
					</Typography>
				</Box>
			))}
		</Container>
	);
};
