import React from 'react';
import { Box, FormControlLabel, Container, Typography, Radio, RadioGroup } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { DirectionIcon } from '../components/DirectionIcon/DirectionIcon';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { uniqueControlTasksArray } from '../helpers/drawRandomTasks';
import { CustomButton } from '../components/CustomButton/CustomButtom';
interface FormValues {
	[key: string]: string;
}

export const RoomControlCard = () => {
	const { handleSubmit, control, watch } = useForm<FormValues>();
	const { hotelId, roomId } = useParams<string>();
	const navigate = useNavigate();

	const handleRadioForm: SubmitHandler<FormValues> = (data: any) => {
		console.log('Wysyłanie danych:', data);
		navigate(`/hotel/${hotelId}`);
	};

	const checkedTasks = Object.keys(uniqueControlTasksArray)
		.map(index => {
			const radioValue = watch(`task-${index}`, '');
			return radioValue === 'tak' || radioValue === 'nie';
		})
		.filter(Boolean).length;

	return (
		<Container component='main'>
			<Box
				sx={{ display: 'flex', justifyContent: 'flex-start', minWidth: '290px', marginTop: '50px', marginBottom: '5px' }}
			>
				<DirectionIcon direction={'left'} />
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
					{checkedTasks}/{uniqueControlTasksArray.length}
				</Typography>
			</Box>
			<form onSubmit={handleSubmit(handleRadioForm)}>
				{uniqueControlTasksArray.map((task, index) => (
					<Box
						key={index}
						sx={{
							display: 'flex',
							flexDirection: 'row',
							width: '290px',
							marginBottom: '20px',
						}}
					>
						<Controller
							name={`task-${index}`}
							control={control}
							defaultValue=''
							render={({ field }) => (
								<RadioGroup
									{...field}
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
										sx={{ margin: '0px 10px 0px 0px' }}
									/>
								</RadioGroup>
							)}
						/>
						<Typography variant='body1' sx={{ color: '#121212' }}>
							{task}
						</Typography>
					</Box>
				))}
				<CustomButton
					disabled={checkedTasks !== uniqueControlTasksArray.length}
					btnBackground='#3F7A29'
					disabledBackground='rgba(63, 122, 41, 0.75)'
					btnName={'Zakończ kontrolę'}
				/>
			</form>
		</Container>
	);
};
