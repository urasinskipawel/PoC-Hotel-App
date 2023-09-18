import React, { useState } from 'react';
import { Button, Box, Checkbox, FormControl, FormControlLabel, Container, SvgIcon, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
				<SvgIcon
					xmlns='http://www.w3.org/2000/svg'
					width='32'
					height='32'
					viewBox='0 0 32 32'
					fill='none'
					sx={{ fontSize: '32px' }}
				>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M22.7071 28.7071C22.3166 29.0976 21.6834 29.0976 21.2929 28.7071L9.29289 16.7071C8.90237 16.3166 8.90237 15.6834 9.29289 15.2929L21.2929 3.29289C21.6834 2.90237 22.3166 2.90237 22.7071 3.29289C23.0976 3.68342 23.0976 4.31658 22.7071 4.70711L11.4142 16L22.7071 27.2929C23.0976 27.6834 23.0976 28.3166 22.7071 28.7071Z'
						fill='#121212'
					/>
				</SvgIcon>
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
				component={Link}
				to={`/hotel/${hotelId}`}
				variant='contained'
				sx={{
					backgroundColor: '#0D3B66',
					opacity: counter === 0 ? '75%' : '100%',
					margin: '75px 0px 50px 0px',
					color: '#EEF4F5',
					py: '10.25px',
					minWidth: '290px',
					'& .MuiButton-root': {
						height: 28,
					},
				}}
			>
				Zakończ sprzątanie
			</Button>
		</Container>
	);
};
