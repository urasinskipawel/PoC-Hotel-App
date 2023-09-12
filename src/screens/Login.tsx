import React, { useState } from 'react';
import {
	Container,
	TextField,
	Button,
	Avatar,
	Box,
	ThemeProvider,
	CssBaseline,
	useTheme,
	createTheme,
	styled,
	makeStyles,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { GlobalTheme } from '../themes/GlobalTheme';

export const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleLogin = () => {
		// Przykładowa logika autoryzacji
		if (username === 'admin' && password === 'password') {
			// Przekierowanie na ekran HotelList
			navigate('/hotels');
		} else {
			// Obsługa błędnych danych logowania
		}
	};

	const theme = createTheme({
		palette: {
			primary: {
				main: '#EEF4F5', // Ustaw kolor główny
			},
			background: {
				default: '#3F7A29', // Ustaw kolor tła
			},
			text: {
				primary: '#3F7A29', // Ustaw kolor tekstu głównego
			},
		},
	});

	const CustomContainer = styled(Container)({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	});

	const CustomInput = styled(TextField)({
		'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			borderColor: theme.palette.background.default,
		},

		'& .MuiOutlinedInput-root': {
			'&.Mui-focused fieldset': {
				borderColor: theme.palette.background.default,
			},
		},

		'& .MuiOutlinedInput-input': {
			color: theme.palette.background.default,
		},
		'& .MuiInputBase-input': {
			height: 28,
		},
		'& label.Mui-focused': {
			color: theme.palette.background.default,
		},
		'& .MuiInputLabel-outlined': {
			color: theme.palette.background.default,
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<CustomContainer
				// component='main'
				sx={{
					backgroundColor: theme.palette.primary.main,
					padding: '0px',
					height: '100vh',
				}}
			>
				<CustomContainer
					sx={{
						height: '800px',
					}}
				>
					<Avatar
						alt='Hotel Service Logo'
						src='./images/Hotelservice+GmbH+ 1.png'
						variant='square'
						sx={{
							width: '150px',
							height: '150px',
							mb: '4rem',
							mt: '-7.5rem',
						}}
					></Avatar>

					<CustomInput
						label='E-mail'
						type='email'
						variant='outlined'
						size='small'
						value={username}
						onChange={e => setUsername(e.target.value)}
						sx={{
							width: 290,
							mb: '25px',
						}}
					/>
					<CustomInput
						label='Hasło'
						type='password'
						variant='outlined'
						size='small'
						value={password}
						onChange={e => setPassword(e.target.value)}
						sx={{
							width: 290,
						}}
					/>
					<Button
						onClick={handleLogin}
						variant='contained'
						sx={{
							backgroundColor: theme.palette.background.default,
							marginTop: '70px',
							py: '10.25px',
							width: 290,
							'& .MuiButton-root': {
								height: 28,
							},
						}}
					>
						Zaloguj
					</Button>
				</CustomContainer>
			</CustomContainer>
		</ThemeProvider>
	);
};
