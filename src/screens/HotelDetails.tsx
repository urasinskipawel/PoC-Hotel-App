import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Box, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { DirectionIcon } from '../components/DirectionIcon/DirectionIcon';
import { RoomsContext } from '../contexts/roomsContext';
import { Room } from '../utils/interfaces';
import { RoleContext } from '../contexts/roleContext';

interface Styles {
	status: string;
	color: string;
}

const colors = {
	red: '#9d071f',
	pink: '#AA5766',
	blue: '#0c3c64',
	lightGreen: '#46A145',
	darkGreen: '#3F7A29',
};

const styles: Styles[] = [
	{ status: 'W trakcie sprzątania', color: colors.pink },
	{ status: 'Do kontroli', color: colors.blue },
	{ status: 'W trakcie kontroli', color: colors.lightGreen },
	{ status: 'Skontrolowany', color: colors.darkGreen },
];

export const HotelDetails = () => {
	const { hotelId } = useParams<{ hotelId: string }>();
	const navigate = useNavigate();
	const [rooms, setRooms] = useContext(RoomsContext);
	const [roomsArray, setRoomsArray] = useState(rooms);
	const { role, access } = useContext(RoleContext);

	const handleDisabled = (room: Room) => {
		if (room.status !== 'Do posprzątania' && role === 'worker') return true;
		if (room.status !== 'Do kontroli' && role === 'supervisor') return true;
		if (room.status !== 'Skontrolowany' && role === 'boss') return true;
	};

	const handleStyle = (roomId: string) => {
		let found = {
			style: colors.red,
			status: 'Do posprzątania',
		};

		roomsArray.find((room: Room) => {
			if (room.id === roomId) {
				found.status = room.status;

				styles.forEach(style => {
					if (style.status === room.status) {
						found.style = style.color;
					}
				});
			}
		});

		return found;
	};

	const handleNavigate = (room: Room) => {
		navigate(`/hotel/${hotelId}/room/${room.id}`, {
			state: {
				status: room.status,
				hotelId,
			},
		});
	};

	return (
		<Container component='main'>
			<Box
				component={Link}
				to={`/hotels`}
				sx={{
					display: 'flex',
					justifyContent: 'flex-start',
					minWidth: '290px',
					marginTop: '50px',
					marginBottom: '30px',
					textDecoration: 'none',
				}}>
				<DirectionIcon direction={'left'} />
				<Typography variant='h5' sx={{ fontWeight: 600, color: '#121212', marginLeft: '10px' }}>
					Szczegóły hotelu
				</Typography>
			</Box>
			{roomsArray.map((room: Room) => (
				<Box>
					<Button
						disabled={handleDisabled(room)}
						key={room.id}
						variant='contained'
						color='primary'
						onClick={() => handleNavigate(room)}
						sx={{
							display: 'flex',
							justifContent: 'center',
							alighItems: 'center',
							position: 'relative',
							minWidth: '290px',
							height: '75px',
							border: `3px solid ${handleStyle(room.id).style}`,
							borderRadius: '5px',
							py: '9.25px',
						}}>
						<Typography variant='h6' sx={{ fontSize: '20px', fontWeight: 600, left: '20px', flex: '1', textAlign: 'center' }}>
							{room.roomType}
						</Typography>
						<DirectionIcon direction={'right'} />
					</Button>
					<Typography
						variant='body1'
						sx={{
							display: 'flex',
							justifyContent: 'flex-end',
							marginTop: '-2px',
							fontSize: '16px',
							color: handleStyle(room.id).style,
						}}>
						{handleStyle(room.id).status}
					</Typography>
				</Box>
			))}
		</Container>
	);
};
