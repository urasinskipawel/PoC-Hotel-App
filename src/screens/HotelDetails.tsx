import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Box, Container, SvgIcon, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

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
					to={`/hotels`}
					sx={{ fontWeight: 600, textDecoration: 'none', color: '#121212' }}
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

						<SvgIcon
							xmlns='http://www.w3.org/2000/svg'
							width='32'
							height='32'
							viewBox='0 0 32 32'
							fill='none'
							sx={{ fontSize: '32px', position: 'absolute', right: '15px' }}
						>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M9.29289 3.29289C9.68342 2.90237 10.3166 2.90237 10.7071 3.29289L22.7071 15.2929C23.0976 15.6834 23.0976 16.3166 22.7071 16.7071L10.7071 28.7071C10.3166 29.0976 9.68342 29.0976 9.29289 28.7071C8.90237 28.3166 8.90237 27.6834 9.29289 27.2929L20.5858 16L9.29289 4.70711C8.90237 4.31658 8.90237 3.68342 9.29289 3.29289Z'
								fill='#121212'
							/>
						</SvgIcon>
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
