import React, { useState, useEffect, useContext } from 'react';
import { Button, Box, Checkbox, FormControl, FormControlLabel, Container, SvgIcon, Typography, Input, Avatar } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { RoomsContext } from '../contexts/roomsContext';
import { useForm } from 'react-hook-form'
import { Back } from '../Back'

type Room = {
	id: string,
	result: string,
	roomType: string,
	status: string
}

const cleaningTasks = [
	'Uporządkować pościel, poduszki i koce.',
	'Wyrzucić wszystkie odpadki do kosza.',
	'Odkurzyć lub wytrzepać dywan, zamiatać podłogę.',
	'Przetrzeć powierzchnie mebli wilgotną szmatką.',
	'Wytrzeć kurz z okien, luster i parapetów.',
	'Przetrzeć ekran i obudowę telewizora.',
	'Wyczyścić lustro ze smug i plam.',
	'Wyczyścić umywalkę, kran, toaletę i wannę/prysznic.',
	'Wyczyścić lustra w łazience.',
	'Umyć i wysuszyć szklanki i kubki.',
	'Wypłukać i przetrzeć wewnętrzne powierzchnie czajnika/Cafetiera.',
];

export const RoomCleaningCard = () => {
	const navigate = useNavigate()
	const { register, handleSubmit } = useForm()
	const { hotelId, roomId } = useParams<string>();
	const [rooms, setRooms] = useContext(RoomsContext)
	const [done, setDone] = useState<string[]>([])
	const [formData, setFormData] = useState({})

	const handleCheckboxChange = (task:string) => {
		if(!done.includes(task)){
			setDone(prev => [...prev, task])
		}else if(done.includes(task)){
			setDone(prev => prev.filter(t => t !== task))
		}
	}

	const handleNavigate = () => {
		navigate(`/hotel/${hotelId}`)
		const currentRoomIndex:number = rooms.findIndex((room:Room) => room.id === roomId)
		const newRooms:Room[] = rooms
		newRooms[currentRoomIndex].status = 'Do kontroli'
		setRooms(newRooms)
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
				minHeight: '100vh',
			}}
		>
			<Box
				sx={{ display: 'flex', justifyContent: 'flex-start', minWidth: '290px', marginTop: '50px', marginBottom: '5px' }}
			>
				<Back />
				<Typography
					variant='h5'
					component={Link}
					to={`/hotel/${hotelId}`}
					sx={{ textDecoration: 'none', color: '#121212', fontWeight: 600, marginLeft: '10px' }}
				>
					{roomId}
				</Typography>
			</Box>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', minWidth: '290px', flexDirection: 'column' }}>
				<Typography variant='h6' sx={{ color: '#121212', fontWeight: 600 }}>
					Sprzątanie
				</Typography>
			</Box>
			<FormControl
				sx={{
					'& .MuiFormControlLabel-root .MuiFormControlLabelPlacementEnd-root': {
						marginTop: '0px',
					},
					'& .MuiTypography-root': {
						lineHeight: '1.25',
						marginTop: '2px',
						marginLeft: '10px',
						fontWeight: 500,
						letterSpacing: '0.6px',
					},

					marginTop: '30px',
					width: '295px',
				}}
				component='fieldset'
			>
				{cleaningTasks.map((task, index) => (
					<FormControlLabel
						sx={{ margin: '0px 0px 15px 0px' }}
						key={index}
						control={
							<Checkbox
								{...register(`checkbox${index}`)}
								color='primary'
								onChange={() => handleCheckboxChange(task)}
								sx={{
									'& .MuiSvgIcon-root': {
										fill: '#0D3B66',
									},
									width: '20px',
									height: '20px',
									display: 'flex',
									alignSelf: 'flex-start',
								}}
							/>
						}
						label={task}
					/>
				))}
			</FormControl>
			{
				done.length === cleaningTasks.length &&
				<Button
				onClick={handleNavigate}
				variant='contained'
				sx={{
					backgroundColor: '#0D3B66',
					margin: '75px 0px 50px 0px',
					color: '#EEF4F5',
					py: '10.25px',
					minWidth: '290px',
					'& .MuiButton-root': {
						height: 28,
					},
					'&.Mui-disabled': {
						background: 'rgba(13, 59, 102, 0.75)',
						color: '#EEF4F5',
					},
				}}
			>
				Zakończ sprzątanie
			</Button> 
			}
		</Container>
	);
};