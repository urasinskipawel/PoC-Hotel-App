import React, { useContext } from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, Container, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { makeStyles } from '@mui/styles';
import { RoomsContext } from '../contexts/roomsContext';
import { DirectionIcon } from '../components/DirectionIcon/DirectionIcon';
import { Room } from '../utils/interfaces';
import { CustomButton } from '../components/CustomButton/CustomButtom';
import { cleaningTasks } from '../utils/cleaningTasks';

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
		navigate(`/hotel/${hotelId}`);
		const currentRoomIndex: number = rooms.findIndex((room: Room) => room.id === roomId);
		const newRooms: Room[] = rooms;
		newRooms[currentRoomIndex].status = 'Do kontroli';
		setRooms(newRooms);
	};

	const changedTasksValue = watch('tasks', {});
	const checkedTasks = Object.values(changedTasksValue).filter(Boolean).length;

	const currentRoomIndex: number = rooms.findIndex((room: Room) => room.id === roomId);
	const handleCleaningTask = (task: string) => {
		if (!rooms[currentRoomIndex].cleaningCheckedTasks.includes(task)) {
			rooms[currentRoomIndex].cleaningCheckedTasks.push(task);
		} else {
			rooms[currentRoomIndex].cleaningCheckedTasks = rooms[currentRoomIndex].cleaningCheckedTasks.filter(
				(t: any) => t !== task
			);
		}
	};

	const handleNavigate = () => {
		if (rooms[currentRoomIndex].cleaningCheckedTasks.length >= 1) {
			rooms[currentRoomIndex].status = 'W trakcie sprzątania';
		} else {
			rooms[currentRoomIndex].status = 'Do posprzątania';
		}
		navigate(`/hotel/${hotelId}`);
	};

	return (
		<Container component='main'>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'flex-start',
					minWidth: '290px',
					marginTop: '50px',
					marginBottom: '5px',
				}}
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
			<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minWidth: '290px' }}>
				<Typography variant='h6' sx={{ color: '#121212', fontWeight: 600 }}>
					Sprzątanie
				</Typography>
				<Typography variant='body1' sx={{ color: '#121212', fontWeight: 600 }}>
					{rooms[currentRoomIndex].cleaningCheckedTasks.length}/{cleaningTasks.length}
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
					component='fieldset'
				>
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
											onClick={() => handleCleaningTask(task)}
											checked={rooms[currentRoomIndex].cleaningCheckedTasks.includes(task) ? true : false}
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
				<CustomButton
					disabled={checkedTasks !== cleaningTasks.length}
					btnBackground='#0D3B66'
					disabledBackground='rgba(13, 59, 102, 0.75)'
					btnName={'Zakończ sprzątanie'}
				/>
			</form>
		</Container>
	);
};
