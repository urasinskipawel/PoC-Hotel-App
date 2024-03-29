import React, { useContext } from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, Container, Typography } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { RoomsContext } from '../contexts/roomsContext';
import { Room } from '../interfaces/interfaces';
import { CustomButton } from '../components/CustomButton/CustomButton';
import { cleaningTasks } from '../constants/cleaningTasks';
import { LeftDirectionIcon } from '../assets/icons/LeftDirectionIcon';
import { roomStatuses } from '../constants/roomStatuses';
import { statusColors } from '../constants/statusColors';
import { useFormStyles } from '../themes/styles';

interface TaskStatus {
	[key: string]: boolean;
}
interface FormData {
	tasks: TaskStatus;
}

export const RoomCleaningCard = () => {
	const [rooms, setRooms] = useContext(RoomsContext);

	const { hotelId, roomId } = useParams<{ hotelId: string; roomId: string }>();
	const { handleSubmit, control, watch } = useForm<FormData>();

	const navigate = useNavigate();
	const classes = useFormStyles();

	const handleForm: SubmitHandler<FormData> = () => {
		navigate(`/hotel/${hotelId}`);
		const currentRoomIndex: number = rooms.findIndex((room: Room) => room.id === roomId);
		const newRooms: Room[] = rooms;
		newRooms[currentRoomIndex].status = roomStatuses.toControl;
		setRooms(newRooms);
	};

	const changedTasksValue = watch('tasks', {});
	const checkedTasks = Object.values(changedTasksValue).filter(Boolean).length;

	const currentRoomIndex: number = rooms.findIndex((room: Room) => room.id === roomId);
	const handleCleaningTask = (cleaningTask: string) => {
		if (!rooms[currentRoomIndex].cleaningCheckedTasks.includes(cleaningTask)) {
			rooms[currentRoomIndex].cleaningCheckedTasks.push(cleaningTask);
		} else {
			rooms[currentRoomIndex].cleaningCheckedTasks = rooms[currentRoomIndex].cleaningCheckedTasks.filter(
				(task: string) => task !== cleaningTask
			);
		}
	};

	const handleNavigate = () => {
		if (rooms[currentRoomIndex].cleaningCheckedTasks.length >= 1) {
			rooms[currentRoomIndex].status = roomStatuses.duringClean;
		} else {
			rooms[currentRoomIndex].status = roomStatuses.toClean;
		}
		navigate(`/hotel/${hotelId}`);
	};

	return (
		<Container component='main'>
			<Box className={classes.returnBox} component={Link} to={`/hotel/${hotelId}`}>
				<LeftDirectionIcon />
				<Typography
					className={classes.text}
					variant='h5'
					onClick={handleNavigate}
					sx={{
						fontWeight: 600,
						marginLeft: '10px',
					}}>
					{roomId}
				</Typography>
			</Box>
			<Box className={classes.cardNameBox}>
				<Typography className={classes.text} variant='h6' sx={{ fontWeight: 600 }}>
					Sprzątanie
				</Typography>
				<Typography className={classes.text} variant='body1' sx={{ fontWeight: 600 }}>
					{rooms[currentRoomIndex].cleaningCheckedTasks.length}/{cleaningTasks.length}
				</Typography>
			</Box>
			<form className={classes.checkboxForm} onSubmit={handleSubmit(handleForm)}>
				<FormControl className={classes.formControl} component='fieldset'>
					{cleaningTasks.map((task, index) => (
						<FormControlLabel
							className={classes.formControlLabel}
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
											className={classes.checkbox}
											onClick={() => handleCleaningTask(task)}
											checked={rooms[currentRoomIndex].cleaningCheckedTasks.includes(task) ? true : false}
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
					btnBackground={statusColors.blue}
					disabledBackground={statusColors.disabledBlue}
					btnName={'Zakończ sprzątanie'}
				/>
			</form>
		</Container>
	);
};
