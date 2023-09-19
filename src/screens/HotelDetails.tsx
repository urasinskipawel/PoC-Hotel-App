import React, { useEffect, useContext, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Button, Box, Container, SvgIcon, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { RoomsContext } from '../contexts/roomsContext';

interface Room {
	id: number,
	roomId: string;
	roomName: string;
	status: string
}

interface Styles {
	status: string,
	color: string
}

const styles :Styles[] = [
	{ status: 'Do kontroli', color: '#0c3c64' }
]

const HotelDetails = () => {
	const { hotelId } = useParams<{ hotelId: string }>();

	const [rooms, setRooms] = useContext(RoomsContext)
	const [roomsArray, setRoomsArray] = useState<Room[]>([])


	useEffect(() => {
		const newRooms:Room[] = []
		for(const [key, value] of Object.entries(rooms)){
			newRooms.push(value)
		}
		console.log(newRooms)
		setRoomsArray(newRooms)
	}, [rooms])

	useEffect(() => {
		console.log(roomsArray)
	}, [roomsArray])

	const location = useLocation()

	const handleStyle = (roomId: string) => {
		let found = {
			style: '#9d071f',
			status: 'Do posprzątania'
		}
		
		roomsArray.find(room => {
			if(room.roomId === roomId){
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
					sx={{ fontWeight: 600, textDecoration: 'none', color: '#121212', marginLeft: '10px' }}
				>
					Szczegóły hotelu
				</Typography>
			</Box>
			{roomsArray.map(room => (
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
							border: `3px solid ${handleStyle(room.roomId).style}`,
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
						sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-2px', fontSize: '16px', color: handleStyle(room.roomId).style }}
					>
						{
							handleStyle(room.roomId).status
						}
					</Typography>
				</Box>
			))}
		</Container>
	);
};

export default HotelDetails
