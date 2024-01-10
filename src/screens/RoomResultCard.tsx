import React, { useContext } from 'react';
import { RoomsContext } from '../contexts/roomsContext';
import { Box, FormControlLabel, Container, Typography, Radio, RadioGroup } from '@mui/material';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { Room } from '../interfaces/interfaces';
import { CustomButton } from '../components/CustomButton/CustomButton';
import { LeftDirectionIcon } from '../assets/icons/LeftDirectionIcon';
import { FormValues, Task } from '../interfaces/interfaces';
import { makeStyles } from '@mui/styles';
import { globalTheme } from '../themes/GlobalTheme';
import uuid from 'react-uuid';
import { statusColors } from '../constants/statusColors';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		justifyContent: 'flex-start',
		minWidth: '290px',
		marginTop: '50px',
		marginBottom: '5px',
		textDecoration: 'none',
	},
	text: {
		color: globalTheme.palette.primary.main,
	},
	cardNameBox: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		minWidth: '290px',
		marginBottom: '40px',
	},
	form: {
		display: 'flex',
		flexDirection: 'row',
		width: '290px',
		marginBottom: '20px',
	},

	formControlLabel: {
		margin: '0px 10px 0px 0px',
	},
	radioBtn: {
		'& .MuiSvgIcon-root': {
			fill: '#3F7A29',
			fontSize: '20px',
		},
		padding: '0px',
		width: '20px',
		height: '20px',
	},
}));

const radioGroupStyles = {
	display: 'flex',
	flexDirection: 'row',
	flexShrink: '0',

	'& .MuiTypography-root': {
		marginTop: '2px',
		fontSize: '10px',
	},
};

const radioButtonStyles = {
	'& .MuiSvgIcon-root': {
		fill: statusColors.darkGreen,
		fontSize: '20px',
	},
	padding: '0px',
	width: '20px',
	height: '20px',
};

const radioControlStyles = {
	margin: '0px 10px 0px 0px',
};

export const RoomResultCard = () => {
	const [rooms] = useContext(RoomsContext);

	const { control } = useForm<FormValues>();
	const { hotelId, roomId } = useParams<string>();

	const navigate = useNavigate();
	const classes = useStyles();

	const currentRoom = rooms.findIndex((room: Room) => room.id === roomId);

	const handleNavigate = () => {
		navigate(`/hotel/${hotelId}`);
	};

	const done = rooms[currentRoom].controlCheckedTasks.reduce((total: number, task: Task) => {
		if (task.label === 'tak') total++;
		return total;
	}, 0);

	return (
		<Container component='main'>
			<Box component={Link} to={`/hotel/${hotelId}`} className={classes.root}>
				<LeftDirectionIcon />
				<Typography
					className={classes.text}
					variant='h5'
					onClick={handleNavigate}
					sx={{
						fontWeight: 600,
						marginLeft: '10px',
					}}>
					{roomId}
				</Typography>
			</Box>
			<Box className={classes.cardNameBox}>
				<Typography className={classes.text} variant='h6' sx={{ fontWeight: 600 }}>
					Wynik kontroli: {done !== 0 ? `${done * 2}0%` : '0%'}
				</Typography>
			</Box>
			<form onSubmit={handleNavigate}>
				{rooms[currentRoom].controlCheckedTasks.map((task: Task, index: number) => (
					<Box key={uuid()} className={classes.form}>
						<Controller
							name={`task-${index}`}
							control={control}
							defaultValue=''
							render={({ field }) => (
								<RadioGroup {...field} sx={radioGroupStyles}>
									<FormControlLabel
										disabled={true}
										control={<Radio checked={task.label === 'tak' ? true : false} sx={radioButtonStyles} />}
										label='Tak'
										value='tak'
										labelPlacement='bottom'
										sx={radioControlStyles}
									/>
									<FormControlLabel
										className={classes.formControlLabel}
										disabled={true}
										control={<Radio checked={task.label === 'nie' ? true : false} sx={radioButtonStyles} />}
										label='Nie'
										value='nie'
										labelPlacement='bottom'
										sx={radioControlStyles}
									/>
								</RadioGroup>
							)}
						/>
						<Typography className={classes.text} variant='body1'>
							{task.description}
						</Typography>
					</Box>
				))}
				<CustomButton btnBackground={statusColors.darkGreen} btnName={'Zamknij'} />
			</form>
		</Container>
	);
};
