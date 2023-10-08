import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Box, Container } from '@mui/material';

export const Home = () => {
	return (
		<Container component='main'>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					maxWidth: '360px',
					height: '800px',
					mx: '35px',
					textAlign: 'center',
				}}
			>
				<Typography variant='h4' sx={{ marginBottom: '1rem' }}>
					Witaj w aplikacji do zarządzania sprzątaniem pokoi hotelowych!
				</Typography>
				<Typography variant='body1' sx={{ marginBottom: '1rem' }}>
					Tutaj znajdziesz informacje o hotelach oraz możliwość zarządzania pokojami.
				</Typography>

				<Button
					component={Link}
					to='/login'
					variant='contained'
					color='primary'
					sx={{ backgroundColor: '#3F7A29', marginTop: '1rem', py: '10px', borderRadius: '5px', mx: '0.5rem' }}
				>
					Zacznij!
				</Button>
			</Box>
		</Container>
	);
};
