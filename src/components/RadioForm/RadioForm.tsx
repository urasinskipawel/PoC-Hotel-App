import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { uniqueControlTasksArray } from '../../helpers/drawRandomTasks';
import { Box, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { RoomsContext } from '../../contexts/roomsContext';
import { Room, Task } from '../../interfaces/interfaces';
import { CustomButton } from '../CustomButton/CustomButton';
import { roomStatuses } from '../../constants/roomStatuses';
import { FormValues } from '../../interfaces/interfaces';
import uuid from 'react-uuid';
import { statusColors } from '../../constants/statusColors';
import { radioButtonStyles, radioControlStyles, radioGroupStyles, useFormStyles } from '../../themes/styles';
interface RadioFormProps {
	setCountCheckedTasks: React.Dispatch<React.SetStateAction<number>>;
}
interface CurrentTask {
	taskInfo: EventTarget;
	description: string;
}

export const RadioForm = ({ setCountCheckedTasks }: RadioFormProps) => {
	const [rooms] = useContext(RoomsContext);
	const { handleSubmit, control } = useForm<FormValues>();
	const { hotelId, roomId } = useParams<string>();
	const [checkedTasks, setCheckedTasks] = useState(
		rooms[rooms.findIndex((room: Room) => room.id === roomId)].controlCheckedTasks.length
	);

	const navigate = useNavigate();
	const classes = useFormStyles();

	const currentRoom = rooms.findIndex((room: Room) => room.id === roomId);

	const handleRadioForm: SubmitHandler<FormValues> = () => {
		rooms[currentRoom].status = roomStatuses.controlled;
		navigate(`/hotel/${hotelId}`);
	};

	const handleCheckTask = (currentTask: CurrentTask) => {
		const task = currentTask.taskInfo as HTMLInputElement;

		if (!!rooms && !!task.name) {
			const taskIndex = rooms[currentRoom].controlCheckedTasks.findIndex(
				(controlTask: Task) => controlTask.id === task.name
			);
			if (taskIndex !== -1) {
				rooms[currentRoom].controlCheckedTasks[taskIndex].label = task.value;
			} else {
				rooms[currentRoom].controlCheckedTasks.push({
					id: task.name,
					label: task.value,
					description: currentTask.description,
				});
			}
			setCheckedTasks(rooms[currentRoom].controlCheckedTasks.length);
		}
	};

	const isChecked = (taskInfo: Task) => {
		let checked;
		const found = rooms[currentRoom].controlCheckedTasks.find((task: Task) => task.id === taskInfo.id);
		!!found ? (found.label === taskInfo.label ? (checked = true) : (checked = false)) : (checked = false);
		return checked;
	};

	useEffect(() => {
		setCountCheckedTasks(checkedTasks);
	}, [checkedTasks]);

	return (
		<form onSubmit={handleSubmit(handleRadioForm)}>
			{uniqueControlTasksArray.map((task, index) => (
				<Box key={uuid()} className={classes.radioForm}>
					<Controller
						name={`task-${index}`}
						control={control}
						defaultValue=''
						render={({ field }) => (
							<RadioGroup
								onClick={e => handleCheckTask({ taskInfo: e.target, description: task })}
								{...field}
								sx={radioGroupStyles}>
								<FormControlLabel
									control={<Radio checked={isChecked({ id: field.name, label: 'tak' })} sx={radioButtonStyles} />}
									label='Tak'
									value='tak'
									labelPlacement='bottom'
									sx={radioControlStyles}
								/>
								<FormControlLabel
									control={<Radio checked={isChecked({ id: field.name, label: 'nie' })} sx={radioButtonStyles} />}
									label='Nie'
									value='nie'
									labelPlacement='bottom'
									sx={radioControlStyles}
								/>
							</RadioGroup>
						)}
					/>
					<Typography variant='body1' className={classes.text}>
						{task}
					</Typography>
				</Box>
			))}
			<CustomButton
				disabled={rooms[currentRoom].controlCheckedTasks.length !== uniqueControlTasksArray.length}
				btnBackground={statusColors.darkGreen}
				disabledBackground={statusColors.disabledGreen}
				btnName={'Zakończ kontrolę'}
			/>
		</form>
	);
};
