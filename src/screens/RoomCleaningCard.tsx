import React, { useState } from 'react';
import { Button, Box, Checkbox, FormControl, FormControlLabel, Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { DirectionIcon } from '../components/DirectionIcon/DirectionIcon';

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
	const [taskStatus, setTaskStatus] = useState<{ [key: string]: boolean }>({});

	const { hotelId, roomId } = useParams<string>();

	const handleCheckboxChange = (task: string) => {
		setTaskStatus(prevStatus => ({
			...prevStatus,
			[task]: !prevStatus[task],
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
			<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minWidth: '290px' }}>
				<Typography variant='h6' sx={{ color: '#121212', fontWeight: 600 }}>
					Sprzątanie
				</Typography>
				<Typography variant='body1' sx={{ color: '#121212', fontWeight: 600 }}>
					{countCheckedTasks()}/{cleaningTasks.length}
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
								color='primary'
								checked={taskStatus[task] || false}
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
			<Button
				disabled={counter !== cleaningTasks.length}
				component={Link}
				to={`/hotel/${hotelId}`}
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
		</Container>
	);
};
