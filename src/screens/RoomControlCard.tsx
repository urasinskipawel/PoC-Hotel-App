import React, { useState } from 'react';
import { Button, Box, FormControlLabel, Container, Typography, Radio, FormGroup } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { DirectionIcon } from '../components/DirectionIcon/DirectionIcon';
import { cleaningTasks } from '../utils/cleaningTasks';

export const drawRandomTasks = (arr: string[], tasksNumber = 5): Set<string> => {
	const randomTasks: string[] = [];
	const newControlTasks: string[] = [...arr];
	for (let i = 0; i < tasksNumber; i++) {
		const randomIndex = Math.floor(Math.random() * newControlTasks.length);
		const randomTask = newControlTasks.splice(randomIndex, 1)[0];
		randomTasks.push(randomTask);
	}
	const uniqueTasks: Set<string> = new Set(randomTasks);
	return uniqueTasks;
};

const uniqueControlTasks: Set<string> = drawRandomTasks(cleaningTasks);
const uniqueControlTasksArray: string[] = [...uniqueControlTasks];

export const RoomControlCard = () => {
	const [taskStatus, setTaskStatus] = useState<{ [key: string]: string }>({});

	const { hotelId, roomId } = useParams<string>();

	const handleRadioOption = (taskId: number, option: string) => {
		setTaskStatus(prevStatus => ({
			...prevStatus,
			[taskId]: option,
		}));
	};

	let counter = 0;

	const countCheckedTasks = (): number => {
		for (const task in taskStatus) {
			if (taskStatus[task]) {
				counter++;
			}
		}
		return counter;
	};

	return (
		<Container component='main'>
			<Box
				sx={{ display: 'flex', justifyContent: 'flex-start', minWidth: '290px', marginTop: '50px', marginBottom: '5px' }}
			>
				<DirectionIcon direction={'left'} />
				<Typography
					variant='h5'
					component={Link}
					to={`/hotel/${hotelId}`}
					sx={{ textDecoration: 'none', color: '#121212', fontWeight: 600, marginLeft: '10px' }}
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
					{countCheckedTasks()}/{uniqueControlTasksArray.length}
				</Typography>
			</Box>
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
					<FormGroup
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
							checked={taskStatus[index] === 'tak'}
							onChange={() => handleRadioOption(index, 'tak')}
							sx={{ margin: '0px 10px 0px 0px' }}
						/>
						<FormControlLabel
							control={
								<Radio
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
							label='nie'
							value='nie'
							labelPlacement='bottom'
							checked={taskStatus[index] === 'nie'}
							onChange={() => handleRadioOption(index, 'nie')}
							sx={{ margin: '0px 10px 0px 0px' }}
						/>
					</FormGroup>
					<Typography variant='body1' sx={{ color: '#121212', alignSelf: 'flex-start', lineHeight: '1.25' }}>
						{task}
					</Typography>
				</Box>
			))}
			<Button
				disabled={counter !== uniqueControlTasksArray.length}
				component={Link}
				to={`/hotel/${hotelId}`}
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
		</Container>
	);
};
