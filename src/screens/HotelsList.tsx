import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { DetailsButton } from '../components/DetailsButton/DetailsButton';
import { LeftDirectionIcon } from '../assets/icons/LeftDirectionIcon';
import { RightDirectionIcon } from '../assets/icons/RightDirectionIcon';

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
	const navigate = useNavigate();

	const handleNavigate = (hotel: Hotel) => {
		navigate(`/hotel/${hotel.hotelId}`);
	};

	return (
		<Container component='main'>
			<Box
				component={Link}
				to={`/`}
				sx={{ display: 'flex', alignItems: 'center', marginTop: '50px', marginBottom: '30px', textDecoration: 'none' }}>
				<LeftDirectionIcon />
				<Typography variant='h5' sx={{ fontWeight: 600, color: '#121212', marginLeft: '4px' }}>
					Lista hoteli do obsługi
				</Typography>
			</Box>
			{hotels.map(hotel => (
				<DetailsButton
					key={hotel.hotelId}
					border={'1px solid #121212'}
					marginBottom={'15px'}
					handleNavigate={() => handleNavigate(hotel)}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start',
						}}>
						<Typography variant='h6' sx={{ fontSize: '20px', fontWeight: 600 }}>
							{hotel.hotelName}
						</Typography>
						<Typography variant='body1' sx={{ fontSize: '15px' }}>
							{hotel.hotelStreet}
						</Typography>
					</Box>
					<RightDirectionIcon />
				</DetailsButton>
			))}
		</Container>
	);
};
