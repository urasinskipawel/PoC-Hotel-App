import React, { useEffect, useContext, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Button, Box, Container, SvgIcon, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { DirectionIcon } from '../components/DirectionIcon/DirectionIcon';
import { RoomsContext } from '../contexts/roomsContext';
import { RoleContext } from '../contexts/roleContext';

interface Room {
    id: string,
    roomType: string,
    status: string,
    result: string
}

interface Styles {
	status: string,
	color: string
}

const styles:Styles[] = [
	{ status: 'Do kontroli', color: '#0c3c64' },
	{ status: 'W trakcie kontroli', color: '#46A145' },
	{ status: 'Skontrolowany', color: '#3F7A29' }
]

export const HotelDetails = () => {
	const { hotelId } = useParams<{ hotelId: string }>();
	const location = useLocation()
	const navigate = useNavigate()
	const [rooms, setRooms] = useContext(RoomsContext)
	const [roomsArray, setRoomsArray] = useState(rooms)
	const { role } = useContext(RoleContext)

	const handleStyle = (roomId: string) => {
		let found = {
			style: '#9d071f',
			status: 'Do posprzątania'
		}
		
		roomsArray.find((room:Room) => {
			if(room.id === roomId){
				found.status = room.status
				styles.forEach(style => {
					if(style.status === room.status){
						found.style = style.color
					}
				})
			}
		})

		return found
	}

	const handleNavigate = (room: Room) => {
		if(role === 'worker' && room.status === 'Do posprzątania' || role === 'worker' && room.status === 'W trakcie sprzątania'){
			navigate(`/hotel/${hotelId}/room/${room.id}`, { state: {
				status: room.status
			} })
		}else if(role === 'supervisor' && room.status === 'Do kontroli' || role === 'supervisor' && room.status === 'W trakcie kontroli'){
			navigate(`/hotel/${hotelId}/room/${room.id}`, { state: {
				status: room.status
			} })
		}else if(role === 'boss' && room.status === 'Skontrolowany'){
			navigate(`/hotel/${hotelId}/room/${room.id}`, { state: {
				status: room.status
			} })
		}
	}

	return (
		<Container component='main'>
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
			{roomsArray.map((room:Room) => (
				<Box>
					<Button
						key={room.id}
						variant='contained'
						color='primary'
						// component={Link}
						// to={`/hotel/${hotelId}/room/${room.id}`}
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
						}}
					>
						<Typography variant='h6' sx={{ fontSize: '20px', fontWeight: 600, left: '20px', flex: '1', textAlign: 'center' }}>
							{room.roomType}
						</Typography>
						<DirectionIcon direction={'right'} />
					</Button>
					<Typography
						variant='body1'
						sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-2px', fontSize: '16px', color: handleStyle(room.id).style }}
					>
						{
							handleStyle(room.id).status
						}
					</Typography>
				</Box>
			))}
		</Container>
	);
};