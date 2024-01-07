import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { DetailsButton } from '../components/DetailsButton/DetailsButton';
import { LeftDirectionIcon } from '../assets/icons/LeftDirectionIcon';
import { RightDirectionIcon } from '../assets/icons/RightDirectionIcon';
import { globalTheme } from '../themes/GlobalTheme';
import { hotels } from '../constants/hotels';
import { Hotel } from '../utils/interfaces';
import uuid from 'react-uuid';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		marginTop: '50px',
		marginBottom: '30px',
		textDecoration: 'none',
	},
	boxContent: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	text: {
		color: globalTheme.palette.primary.main,
	},
}));

export const HotelsList = () => {
	const classes = useStyles();

	const navigate = useNavigate();

	const handleNavigate = (hotel: Hotel) => {
		navigate(`/hotel/${hotel.hotelId}`);
	};

	return (
		<Container component='main'>
			<Box className={classes.root} component={Link} to={`/`}>
				<LeftDirectionIcon />
				<Typography className={classes.text} variant='h5' sx={{ marginLeft: '4px', fontWeight: 600 }}>
					Lista hoteli do obsługi
				</Typography>
			</Box>
			{hotels.map(hotel => (
				<DetailsButton
					key={uuid()}
					border={`1px solid ${globalTheme.palette.primary.main}`}
					marginBottom={'15px'}
					handleNavigate={() => handleNavigate(hotel)}>
					<Box className={classes.boxContent}>
						<Typography className={classes.text} variant='h6' sx={{ fontSize: '20px', fontWeight: 600 }}>
							{hotel.hotelName}
						</Typography>
						<Typography className={classes.text} variant='body1' sx={{ fontSize: '15px' }}>
							{hotel.hotelStreet}
						</Typography>
					</Box>
					<RightDirectionIcon />
				</DetailsButton>
			))}
		</Container>
	);
};
