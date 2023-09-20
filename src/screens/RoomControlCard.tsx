import React, { useState } from 'react';
import { Button, Box, FormControlLabel, Container, SvgIcon, Typography, Radio, FormGroup } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const controlTasks = [
	'Pościel, poduszki i koce są uporządkowane.',
	'Wszystkie odpadki zostały wyrzucone do kosza.',
	'Dywan jest odkurzony lub wytrzepany, a podłoga pozamiatana.',
	'Powierchnia mebli została przetarta.',
	'Kurz z okien, luster i parapetów został wytarty.',
	'Ekran i obudowa telewizora zostały przetarte.',
	'Lustro jest wyczyszczone ze smug i plam.',
	'Umywalka, kran, toaleta oraz wannę/prysznic zostały wyczyszczone.',
	'Lustra w łazience są wyczyszczone.',
	'Szklanki i kubki są umyte i wysuszone.',
	'Powierzchnie czajnika/Cafetiera są wypłukane i przetarte.',
];

function drawRandomTasks(arr: string[]): string[] {
	const randomTasks = [];
	const newControlTasks = [...arr]; // Tworzymy kopię tablicy, aby nie modyfikować oryginalnej
	for (let i = 0; i < 5; i++) {
		const randomIndex = Math.floor(Math.random() * newControlTasks.length);
		const randomTask = newControlTasks.splice(randomIndex, 1)[0]; // Usuwamy i zapisujemy wylosowany element
		randomTasks.push(randomTask);
	}
	return randomTasks;
}

const randomControlTasks = drawRandomTasks(controlTasks);

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
					{countCheckedTasks()}/{randomControlTasks.length}
				</Typography>
			</Box>
			{randomControlTasks.map((task, index) => (
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
				disabled={counter !== randomControlTasks.length}
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
