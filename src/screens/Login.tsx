import React, { useState } from 'react';
import { Container, TextField, Button, Avatar, CssBaseline, Box } from '@mui/material';

import { useNavigate } from 'react-router-dom';

const Login = () => {
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

	return (
		<Container
			component='main'
			sx={{
				backgroundColor: '#EEF4F5',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '0px',
				height: '100vh',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
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

				<TextField
					label='E-mail'
					type='email'
					variant='outlined'
					size='small'
					value={username}
					onChange={e => setUsername(e.target.value)}
					sx={{
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
							height: 28,
						},
						'& label.Mui-focused': {
							color: '#3F7A29',
						},
						'& .MuiInputLabel-outlined': {
							color: '#3F7A29',
						},
						width: 290,
						mb: '25px',
					}}
				/>
				<TextField
					label='Hasło'
					type='password'
					variant='outlined'
					size='small'
					value={password}
					onChange={e => setPassword(e.target.value)}
					sx={{
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
							height: 28,
						},
						'& label.Mui-focused': {
							color: '#3F7A29',
						},
						'& .MuiInputLabel-outlined': {
							color: '#3F7A29',
						},
						width: 290,
					}}
				/>
				<Button
					onClick={handleLogin}
					variant='contained'
					color='primary'
					sx={{
						backgroundColor: '#3F7A29',
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
			</Box>
		</Container>
	);
};

export default Login;
