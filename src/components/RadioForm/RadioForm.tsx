import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { uniqueControlTasksArray } from '../../helpers/drawRandomTasks';
import { Box, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { RoomsContext } from '../../contexts/roomsContext';
import { Room } from '../../utils/interfaces';
import { CustomButton } from '../CustomButton/CustomButton';
import { roomStatuses } from '../../constants/roomStatuses';

interface Task {
	id: string;
	label: string;
}
interface FormValues {
	[key: string]: string;
}
interface RadioFormProps {
	setCountCheckedTasks: React.Dispatch<React.SetStateAction<number>>;
}

export const RadioForm = ({ setCountCheckedTasks }: RadioFormProps) => {
	const { handleSubmit, control } = useForm<FormValues>();
	const navigate = useNavigate();
	const { hotelId, roomId } = useParams<string>();
	const [rooms] = useContext(RoomsContext);
	const [checkedTasks, setCheckedTasks] = useState(
		rooms[rooms.findIndex((room: Room) => room.id === roomId)].controlCheckedTasks.length
	);
	const [isDisabled, setIsDisabled] = useState(false);

	const currentRoom = rooms.findIndex((room: Room) => room.id === roomId);

	const handleRadioForm: SubmitHandler<FormValues> = () => {
		rooms[currentRoom].status = roomStatuses.controlled;
		navigate(`/hotel/${hotelId}`);
	};

	const handleCheckTask = (currentTask: any) => {
		const task = currentTask.taskInfo;
		if (!!rooms && !!task.name) {
			const taskIndex = rooms[currentRoom].controlCheckedTasks.findIndex((t: any) => t.id === task.name);
			if (taskIndex !== -1) {
				rooms[currentRoom].controlCheckedTasks[taskIndex].label = task.value;
			} else {
				rooms[currentRoom].controlCheckedTasks.push({
					id: task.name,
					label: task.value,
					description: currentTask.description,
				});
			}
		}
		setCheckedTasks(rooms[currentRoom].controlCheckedTasks.length);
		rooms[currentRoom].controlCheckedTasks.length === uniqueControlTasksArray.length
			? setIsDisabled(false)
			: setIsDisabled(true);
	};

	const isChecked = (taskInfo: any) => {
		let checked;
		const found = rooms[currentRoom].controlCheckedTasks.find((t: any) => t.id === taskInfo.id);
		!!found ? (found.label === taskInfo.label ? (checked = true) : (checked = false)) : (checked = false);
		return checked;
	};

	useEffect(() => {
		setCountCheckedTasks(checkedTasks);
	}, [checkedTasks]);

	useEffect(() => {
		rooms[currentRoom].controlCheckedTasks.length !== uniqueControlTasksArray.length
			? setIsDisabled(true)
			: setIsDisabled(false);
	}, []);

	const formContainerStyles = {
		display: 'flex',
		flexDirection: 'row',
		width: '290px',
		marginBottom: '20px',
	};

	const radioGroupStyles = {
		display: 'flex',
		flexDirection: 'row',
		flexShrink: '0',

		'& .MuiTypography-root': {
			marginTop: '2px',
			fontSize: '10px',
		},
	};

	const radioButtonStyles = {
		'& .MuiSvgIcon-root': {
			fill: '#3F7A29',
			fontSize: '20px',
		},
		padding: '0px',
		width: '20px',
		height: '20px',
	};

	return (
		<form onSubmit={handleSubmit(handleRadioForm)}>
			{uniqueControlTasksArray.map((task, index) => (
				<Box key={index} sx={formContainerStyles}>
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
									sx={{ margin: '0px 10px 0px 0px' }}
								/>
								<FormControlLabel
									control={<Radio checked={isChecked({ id: field.name, label: 'nie' })} sx={radioButtonStyles} />}
									label='Nie'
									value='nie'
									labelPlacement='bottom'
									sx={{ margin: '0px 10px 0px 0px' }}
								/>
							</RadioGroup>
						)}
					/>
					<Typography variant='body1' sx={{ color: '#121212' }}>
						{task}
					</Typography>
				</Box>
			))}
			<CustomButton
				disabled={isDisabled}
				btnBackground='#3F7A29'
				disabledBackground='rgba(63, 122, 41, 0.75)'
				btnName={'Zakończ kontrolę'}
			/>
		</form>
	);
};
