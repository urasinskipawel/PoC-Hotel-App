import React from 'react';
import { Container, TextField,Avatar, useTheme, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useRole } from '../context/roleContext';
import { CustomButton } from '../components/CustomButton/CustomButtom';

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
	const theme = useTheme();
	const classes = useStyles();
	const { handleSubmit, control } = useForm<LoginData>();
	const { setRole } = useRole();
	const navigate = useNavigate();

	const handleLogin: SubmitHandler<LoginData> = (data: LoginData) => {
		if (data.email === 'admin@test.com' && data.password === 'password') {
			setRole('admin');
			navigate('/hotels');
		} else if (data.email === 'controller@test.com' && data.password === 'password') {
			setRole('controller');
			navigate('/hotels');
		} else if (data.email === 'worker@test.com' && data.password === 'password') {
			setRole('worker');
			navigate('/hotels');
		} else {
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
					<CustomButton disabled={false} btnBackground={theme.palette.background.default} btnName={'Zaloguj'} />
				</form>
			</Box>
		</Container>
	);
};
