import React, { useContext, useEffect, useState } from 'react';
import { RoomsContext } from '../contexts/roomsContext';
import { Button, Box, FormControlLabel, Container, Typography, Radio, RadioGroup } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { DirectionIcon } from '../components/DirectionIcon/DirectionIcon';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { uniqueControlTasksArray } from '../helpers/drawRandomTasks';
interface FormValues {
	[key: string]: string;
}

type Room = {
	id: string;
	result: string;
	roomType: string;
	status: string;
};

export const RoomControlCard = () => {
	const { handleSubmit, control, watch } = useForm<FormValues>();
	const { hotelId, roomId } = useParams<string>();
	const navigate = useNavigate();
	const [rooms, setRooms] = useContext(RoomsContext)
	const [checkedTasks, setCheckedTasks] = useState(rooms[rooms.findIndex((room:Room) => room.id === roomId)].controlCheckedTasks.length)

	const handleRadioForm: SubmitHandler<FormValues> = (data: any) => {
		const currentRoom = rooms.findIndex((room:Room) => room.id === roomId)
		rooms[currentRoom].status = 'Skontrolowany'
		navigate(`/hotel/${hotelId}`);
	};

	const handleCheckTask = (currentTask:any) => {
		const task = currentTask.taskInfo
		const currentRoom = rooms.findIndex((room:Room) => room.id === roomId)
		if(!!rooms && !!task.name){
			const taskIndex = rooms[currentRoom].controlCheckedTasks.findIndex((t:any) => t.id === task.name)
			if(taskIndex !== -1){
				rooms[currentRoom].controlCheckedTasks[taskIndex].label = task.value
			}else{
				rooms[currentRoom].controlCheckedTasks.push({
					id: task.name,
					label: task.value,
					description: currentTask.description
				})
			}
		}
		setCheckedTasks(rooms[rooms.findIndex((room:Room) => room.id === roomId)].controlCheckedTasks.length)
	}

	const handleNavigate = () => {
		if(checkedTasks >= 1){
			const currentRoom = rooms.findIndex((room:Room) => room.id === roomId)
			rooms[currentRoom].status = 'W trakcie kontroli'
		}
		navigate(`/hotel/${hotelId}`)
	}

	const isDisabled = () => {
		const currentRoom = rooms.findIndex((room:Room) => room.id === roomId)
		let disabled
		if(rooms[currentRoom].controlCheckedTasks.length === uniqueControlTasksArray.length){
			disabled = false
		}else{
			disabled = true
		}
		return disabled
	}

	const isChecked = (taskInfo:any) => {
		let checked
		const currentRoom = rooms.findIndex((room:Room) => room.id === roomId)
		const found = rooms[currentRoom].controlCheckedTasks.find((t:any) => t.id === taskInfo.id)
		!!found ? found.label === taskInfo.label ? checked = true : checked = false : checked = false
		return checked
	}

	return (
		<Container component='main'>
			<Box
				sx={{ display: 'flex', justifyContent: 'flex-start', minWidth: '290px', marginTop: '50px', marginBottom: '5px' }}
			>
				<DirectionIcon direction={'left'} />
				<Typography
					variant='h5'
					onClick={handleNavigate}
					sx={{ textDecoration: 'none', color: '#121212', fontWeight: 600, marginLeft: '10px', '&:hover': {
						cursor: 'pointer'
					}}}
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
					Kontrola
				</Typography>
				<Typography variant='body1' sx={{ color: '#121212', fontWeight: 600 }}>
					{checkedTasks}/{uniqueControlTasksArray.length}
				</Typography>
			</Box>
			<form onSubmit={handleSubmit(handleRadioForm)}>
				{uniqueControlTasksArray.map((task, index) => (
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
									onClick={(e) => handleCheckTask({taskInfo: e.target, description: task})}
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
										control={
											<Radio
												checked={isChecked({id: field.name, label: 'tak'})}
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
										control={
											<Radio
											checked={isChecked({id: field.name, label: 'nie'})}
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
							{task}
						</Typography>
					</Box>
				))}
				<Button
					type='submit'
					disabled={isDisabled()}
					variant='contained'
					sx={{
						backgroundColor: '#3F7A29',
						margin: '75px 0px 50px 0px',
						color: '#EEF4F5',
						py: '10.25px',
						minWidth: '290px',
						'& .MuiButton-root': {
							height: 28,
						},
						'&.Mui-disabled': {
							background: 'rgba(63, 122, 41, 0.75)',
							color: '#EEF4F5',
						},
					}}
				>
					Zakończ kontrolę
				</Button>
			</form>
		</Container>
	);
};
