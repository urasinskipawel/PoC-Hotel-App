import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, SvgIcon, Typography } from '@mui/material';
// import { makeStyles } from '@mui/styles';

interface Room {
	roomId: string;
	roomName: string;
}

interface Hotel {
	hotelId: string;
	hotelName: string;
	hotelStreet: string;
	hotelRooms?: Room[];
}

const hotels: Hotel[] = [
	{
		hotelId: 'hotel1',
		hotelName: 'Hotel A',
		hotelStreet: 'Street A',
		// hotelRooms: [
		// 	{ roomId: 'room1', roomName: 'Single Room' },
		// 	{ roomId: 'room2', roomName: 'Double Room' },
		// ],
	},
	{
		hotelId: 'hotel2',
		hotelName: 'Hotel B',
		hotelStreet: 'Street B',
		// hotelRooms: [
		// 	{ roomId: 'room3', roomName: 'Suite' },
		// 	{ roomId: 'room4', roomName: 'Deluxe Room' },
		// ],
	},
	{
		hotelId: 'hotel3',
		hotelName: 'Hotel C',
		hotelStreet: 'Street C',
		// hotelRooms: [
		// 	{ roomId: 'room3', roomName: 'Suite' },
		// 	{ roomId: 'room4', roomName: 'Deluxe Room' },
		// ],
	},
];

export const HotelsList = () => {
	// const theme = useTheme()
	// const classes = useStyles();

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
			<Box sx={{ display: 'flex', alignItems: 'center', marginTop: '50px', marginBottom: '30px' }}>
				<SvgIcon
					xmlns='http://www.w3.org/2000/svg'
					width='32'
					height='32'
					viewBox='0 0 32 32'
					fill='none'
					sx={{ fontSize: '32px' }}
				>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M22.7071 28.7071C22.3166 29.0976 21.6834 29.0976 21.2929 28.7071L9.29289 16.7071C8.90237 16.3166 8.90237 15.6834 9.29289 15.2929L21.2929 3.29289C21.6834 2.90237 22.3166 2.90237 22.7071 3.29289C23.0976 3.68342 23.0976 4.31658 22.7071 4.70711L11.4142 16L22.7071 27.2929C23.0976 27.6834 23.0976 28.3166 22.7071 28.7071Z'
						fill='#121212'
					/>
				</SvgIcon>
				<Typography
					variant='h5'
					component={Link}
					to={`/login`}
					sx={{ fontWeight: 600, textDecoration: 'none', color: '#121212' }}
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
					<SvgIcon
						xmlns='http://www.w3.org/2000/svg'
						width='32'
						height='32'
						viewBox='0 0 32 32'
						fill='none'
						sx={{ fontSize: '32px' }}
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M9.29289 3.29289C9.68342 2.90237 10.3166 2.90237 10.7071 3.29289L22.7071 15.2929C23.0976 15.6834 23.0976 16.3166 22.7071 16.7071L10.7071 28.7071C10.3166 29.0976 9.68342 29.0976 9.29289 28.7071C8.90237 28.3166 8.90237 27.6834 9.29289 27.2929L20.5858 16L9.29289 4.70711C8.90237 4.31658 8.90237 3.68342 9.29289 3.29289Z'
							fill='#121212'
						/>
					</SvgIcon>
				</Button>
			))}
		</Container>
	);
};
