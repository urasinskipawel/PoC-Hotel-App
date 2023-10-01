import React, { useContext } from 'react';
import { Container, TextField, Button, Avatar, useTheme, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { users } from '../utils/users'
import { RoleContext } from '../contexts/roleContext'

interface LoginData {
	email: string;
	password: string;
}

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
	form: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
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
	const navigate = useNavigate();
	const theme = useTheme();
	const classes = useStyles();
	const { handleSubmit, control } = useForm<LoginData>();
	const value = useContext(RoleContext)

	const handleLogin: SubmitHandler<LoginData> = (data: LoginData) => {
		// data.email === 'admin@gmail.com' && data.password === 'password' ? navigate('/hotels') : null;
		const found = users.find(user => user.login === data.email)
		if(!!found && data.password === found.password){
			value.role = found.role
			navigate('/hotels')
		}else if(!!found && data.password !== found.password){
			alert('Błędne hasło')
		}else{
			alert('Nie ma takiego użytkownika')
		}
	};

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
				<form className={classes.form} onSubmit={handleSubmit(handleLogin)}>
					<Controller
						name='email'
						control={control}
						defaultValue=''
						render={({ field }) => (
							<TextField
								{...field}
								className={classes.input}
								label='E-mail'
								type='email'
								variant='outlined'
								size='small'
								sx={{ mb: '25px', minWidth: 290 }}
							/>
						)}
					/>

					<Controller
						name='password'
						control={control}
						defaultValue=''
						render={({ field }) => (
							<TextField
								{...field}
								className={classes.input}
								label='Hasło'
								type='password'
								variant='outlined'
								size='small'
								sx={{ minWidth: 290 }}
							/>
						)}
					/>
					<Button
						type='submit'
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
				</form>
			</Box>
		</Container>
	);
};
