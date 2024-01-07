import React, { useContext } from 'react';
import { Container, TextField, Avatar, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { users } from '../constants/users';
import { RoleContext } from '../contexts/roleContext';
import { CustomButton } from '../components/CustomButton/CustomButton';
import { statusColors } from './../constants/statusColors';
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
			borderColor: statusColors.darkGreen,
		},
		'& .MuiOutlinedInput-root': {
			'&.Mui-focused fieldset': {
				borderColor: statusColors.darkGreen,
			},
		},
		'& .MuiOutlinedInput-input': {
			color: statusColors.darkGreen,
		},
		'& .MuiInputBase-input': {
			height: '28px',
		},
		'& label.Mui-focused': {
			color: statusColors.darkGreen,
		},
		'& .MuiInputLabel-outlined': {
			color: statusColors.darkGreen,
		},
	},
}));

export const Login = () => {
	const navigate = useNavigate();
	const classes = useStyles();
	const { handleSubmit, control } = useForm<LoginData>();
	const value = useContext(RoleContext);

	const handleLogin: SubmitHandler<LoginData> = (data: LoginData) => {
		const found = users.find(user => user.login === data.email);
		if (!!found && data.password === found.password) {
			value.role = found.role.NAME;
			value.access = found.role.ACCESS;
			navigate('/hotels');
		} else {
			alert('Niepoprawne dane');
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
					<CustomButton btnBackground={statusColors.darkGreen} btnName={'Zaloguj'} />
				</form>
			</Box>
		</Container>
	);
};
