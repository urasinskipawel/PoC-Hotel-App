import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import { DirectionIcon } from '../components/DirectionIcon/DirectionIcon';

interface Room {
	roomId: string;
	roomName: string;
}

interface Hotel {
	hotelId: string;
	hotelName: string;
	hotelStreet: string;
	hotelRooms: Room[];
}

const hotels: Hotel[] = [
	{
		hotelId: 'hotel1',
		hotelName: 'Hotel A',
		hotelStreet: 'Street A',
		hotelRooms: [
			{ roomId: 'room1', roomName: 'Single Room' },
			{ roomId: 'room2', roomName: 'Double Room' },
		],
	},
	{
		hotelId: 'hotel2',
		hotelName: 'Hotel B',
		hotelStreet: 'Street B',
		hotelRooms: [
			{ roomId: 'room3', roomName: 'Suite' },
			{ roomId: 'room4', roomName: 'Deluxe Room' },
		],
	},
	{
		hotelId: 'hotel3',
		hotelName: 'Hotel C',
		hotelStreet: 'Street C',
		hotelRooms: [
			{ roomId: 'room3', roomName: 'Suite' },
			{ roomId: 'room4', roomName: 'Deluxe Room' },
		],
	},
];

export const HotelsList = () => {
	return (
		<Container component='main'>
			<Box sx={{ display: 'flex', alignItems: 'center', marginTop: '50px', marginBottom: '30px' }}>
				<DirectionIcon direction={'left'} />
				<Typography
					variant='h5'
					component={Link}
					to={`/login`}
					sx={{ fontWeight: 600, textDecoration: 'none', color: '#121212', marginLeft: '4px' }}
				>
					Lista hoteli do obsługi
				</Typography>
			</Box>
			{hotels.map(hotel => (
				<Button
					key={hotel.hotelId}
					variant='contained'
					component={Link}
					to={`/hotel/${hotel.hotelId}`}
					color='primary'
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						minWidth: '290px',
						border: '1px solid #121212',
						borderRadius: '5px',
						py: '9.25px',
						mb: '15px',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<Typography variant='h6' sx={{ fontSize: '20px', fontWeight: 600 }}>
							{hotel.hotelName}
						</Typography>
						<Typography variant='body1' sx={{ fontSize: '15px' }}>
							{hotel.hotelStreet}
						</Typography>
					</Box>
					<DirectionIcon direction={'right'} />
				</Button>
			))}
		</Container>
	);
};
