import React, { ChangeEvent, useState } from 'react';
import { Container, TextField, Button, Avatar, useTheme, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#EEF4F5',
		padding: '0px',
		height: '100vh',
	},
	input: {
		'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			borderColor: '#3F7A29',
		},
		'& .MuiOutlinedInput-root': {
			'&.Mui-focused fieldset': {
				borderColor: '#3F7A29',
			},
		},
		'& .MuiOutlinedInput-input': {
			color: '#3F7A29',
		},
		'& .MuiInputBase-input': {
			height: '28px',
		},
		'& label.Mui-focused': {
			color: '#3F7A29',
		},
		'& .MuiInputLabel-outlined': {
			color: '#3F7A29',
		},
	},
}));

export const Login = () => {
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
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

	const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const theme = useTheme();

	const classes = useStyles();

	return (
		<Container component='main'>
			<Box className={classes.root}>
				<Avatar
					alt='Hotel Service Logo'
					src='./images/Hotelservice_logo.png'
					variant='square'
					sx={{
						width: '150px',
						height: '150px',
						mb: '4rem',
						mt: '-7.5rem',
					}}
				/>

				<TextField
					className={classes.input}
					label='E-mail'
					type='email'
					variant='outlined'
					size='small'
					value={username}
					onChange={handleUsernameChange}
					sx={{ mb: '25px', minWidth: 290 }}
				/>
				<TextField
					className={classes.input}
					label='Hasło'
					type='password'
					variant='outlined'
					size='small'
					value={password}
					onChange={handlePasswordChange}
					sx={{ minWidth: 290 }}
				/>
				<Button
					onClick={handleLogin}
					variant='contained'
					sx={{
						color: '#EEF4F5',
						backgroundColor: theme.palette.background.default,
						marginTop: '70px',
						py: '10.25px',
						minWidth: 290,
						'& .MuiButton-root': {
							height: 28,
						},
					}}
				>
					Zaloguj
				</Button>
			</Box>
		</Container>
	);
};
