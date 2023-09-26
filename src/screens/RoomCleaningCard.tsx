import React, { useState, useContext } from 'react';
import { Button, Box, Checkbox, FormControl, FormControlLabel, Container, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { makeStyles } from '@mui/styles';
import { RoomsContext } from '../contexts/roomsContext';
import { cleaningTasks } from '../utils/cleaningTasks';
import { DirectionIcon } from '../components/DirectionIcon';

type Room = {
	id: string;
	result: string;
	roomType: string;
	status: string;
};

interface TaskStatus {
	[key: string]: boolean;
}
interface FormData {
	tasks: TaskStatus;
}

const useStyles = makeStyles(theme => ({
	form: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
}));

export const RoomCleaningCard = () => {
	const navigate = useNavigate();
	const { hotelId, roomId } = useParams<{ hotelId: string; roomId: string }>();
	const { handleSubmit, control, watch } = useForm<FormData>();
	const classes = useStyles();
	const [rooms, setRooms] = useContext(RoomsContext);

	const handleForm: SubmitHandler<FormData> = data => {
		console.log('Wysyłanie danych:', data);
		navigate(`/hotel/${hotelId}`);
		const currentRoomIndex: number = rooms.findIndex((room: Room) => room.id === roomId);
		const newRooms: Room[] = rooms;
		newRooms[currentRoomIndex].status = 'Do kontroli';
		setRooms(newRooms);
	};

	const changedTasksValue = watch('tasks', {});
	const checkedTasks = Object.values(changedTasksValue).filter(Boolean).length;

	return (
		<Container component='main'>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'flex-start',
					minWidth: '290px',
					marginTop: '50px',
					marginBottom: '5px',
				}}>
				<DirectionIcon direction={'left'} />

				<Typography
					variant='h5'
					component={Link}
					to={`/hotel/${hotelId}`}
					sx={{ textDecoration: 'none', color: '#121212', fontWeight: 600, marginLeft: '10px' }}>
					{roomId}
				</Typography>
			</Box>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minWidth: '290px' }}>
				<Typography variant='h6' sx={{ color: '#121212', fontWeight: 600 }}>
					Sprzątanie
				</Typography>
				<Typography variant='body1' sx={{ color: '#121212', fontWeight: 600 }}>
					{checkedTasks}/{cleaningTasks.length}
				</Typography>
			</Box>
			<form className={classes.form} onSubmit={handleSubmit(handleForm)}>
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
					component='fieldset'>
					{cleaningTasks.map((task, index) => (
						<FormControlLabel
							key={index}
							sx={{ margin: '0px 0px 15px 0px' }}
							control={
								<Controller
									name={`tasks.${index}`}
									control={control}
									defaultValue={false}
									render={({ field }) => (
										<Checkbox
											{...field}
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
									)}
								/>
							}
							label={task}
						/>
					))}
				</FormControl>
				<Button
					type='submit'
					disabled={checkedTasks !== cleaningTasks.length}
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
					}}>
					Zakończ sprzątanie
				</Button>
			</form>
		</Container>
	);
};
