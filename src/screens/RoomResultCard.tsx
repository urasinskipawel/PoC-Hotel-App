import React, { useContext } from 'react';
import { RoomsContext } from '../contexts/roomsContext';
import { Button, Box, FormControlLabel, Container, Typography, Radio, RadioGroup } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { DirectionIcon } from '../components/DirectionIcon/DirectionIcon';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Room } from '../utils/interfaces';
import { CustomButton } from '../components/CustomButton/CustomButtom';

interface FormValues {
	[key: string]: string;
}

export const RoomResultCard = () => {
	const { handleSubmit, control, watch } = useForm<FormValues>();
	const { hotelId, roomId } = useParams<string>();
	const navigate = useNavigate();
	const [rooms, setRooms] = useContext(RoomsContext);

	const currentRoom = rooms.findIndex((room: Room) => room.id === roomId);

	const handleCloseForm: SubmitHandler<FormValues> = (data: any) => {
		navigate(`/hotel/${hotelId}`);
	};

	const handleNavigate = () => {
		navigate(`/hotel/${hotelId}`);
	};

	const done = rooms[currentRoom].controlCheckedTasks.reduce((total: number, task: any) => {
		if (task.label === 'tak') total++;
		return total;
	}, 0);

	return (
		<Container component='main'>
			<Box
				sx={{ display: 'flex', justifyContent: 'flex-start', minWidth: '290px', marginTop: '50px', marginBottom: '5px' }}
			>
				<DirectionIcon direction={'left'} />
				<Typography
					variant='h5'
					onClick={handleNavigate}
					sx={{
						textDecoration: 'none',
						color: '#121212',
						fontWeight: 600,
						marginLeft: '10px',
						'&:hover': {
							cursor: 'pointer',
						},
					}}
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
					Wynik kontroli: {done !== 0 ? `${done * 2}0%` : '0%'}
				</Typography>
			</Box>
			<form onSubmit={handleSubmit(handleCloseForm)}>
				{rooms[currentRoom].controlCheckedTasks.map((task: any, index: number) => (
					<Box
						key={index}
						sx={{
							display: 'flex',
							flexDirection: 'row',
							width: '290px',
							marginBottom: '20px',
						}}
					>
						<Controller
							name={`task-${index}`}
							control={control}
							defaultValue=''
							render={({ field }) => (
								<RadioGroup
									{...field}
									sx={{
										display: 'flex',
										flexDirection: 'row',
										flexShrink: '0',

										'& .MuiTypography-root': {
											marginTop: '2px',
											fontSize: '10px',
										},
									}}
								>
									<FormControlLabel
										disabled={true}
										control={
											<Radio
												checked={task.label === 'tak' ? true : false}
												sx={{
													'& .MuiSvgIcon-root': {
														fill: '#3F7A29',
														fontSize: '20px',
													},
													padding: '0px',
													width: '20px',
													height: '20px',
												}}
											/>
										}
										label='Tak'
										value='tak'
										labelPlacement='bottom'
										sx={{ margin: '0px 10px 0px 0px' }}
									/>
									<FormControlLabel
										disabled={true}
										control={
											<Radio
												checked={task.label === 'nie' ? true : false}
												sx={{
													'& .MuiSvgIcon-root': {
														fill: '#3F7A29',
														fontSize: '20px',
													},
													padding: '0px',
													width: '20px',
													height: '20px',
												}}
											/>
										}
										label='Nie'
										value='nie'
										labelPlacement='bottom'
										sx={{ margin: '0px 10px 0px 0px' }}
									/>
								</RadioGroup>
							)}
						/>
						<Typography variant='body1' sx={{ color: '#121212' }}>
							{task.description}
						</Typography>
					</Box>
				))}
				<CustomButton btnBackground='#3F7A29' btnName={'Zamknij'} />
			</form>
		</Container>
	);
};
