import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { uniqueControlTasksArray } from '../../helpers/drawRandomTasks';
import { Box, Button, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';

interface FormValues {
	[key: string]: string;
}

interface RadioFormProps {
	countCheckedTasks: number;
	setCountCheckedTasks: React.Dispatch<React.SetStateAction<number>>;
}

export const RadioForm = ({ countCheckedTasks, setCountCheckedTasks }: RadioFormProps) => {
	const { handleSubmit, control, watch } = useForm<FormValues>();
	const { hotelId } = useParams<string>();
	const navigate = useNavigate();

	const handleRadioForm: SubmitHandler<FormValues> = data => {
		console.log('Wysyłanie danych:', data);
		// localStorage.setItem('formData', JSON.stringify(data))
		navigate(`/hotel/${hotelId}`);
	};

	const checkedTasks = Object.keys(uniqueControlTasksArray).filter(index => {
		const radioValue = watch(`task-${index}`, '');
		return !!radioValue;
	}).length;

	useEffect(() => {
		setCountCheckedTasks(checkedTasks);
	}, [checkedTasks]);

	return (
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
									value={task}
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
									label='Nie'
									value={!task}
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
			<Button
				type='submit'
				disabled={checkedTasks !== uniqueControlTasksArray.length}
				variant='contained'
				sx={{
					backgroundColor: '#3F7A29',
					margin: '75px 0px 50px 0px',
					color: '#EEF4F5',
					py: '10.25px',
					minWidth: '290px',
					'& .MuiButton-root': {
						height: 28,
					},
					'&.Mui-disabled': {
						background: 'rgba(63, 122, 41, 0.75)',
						color: '#EEF4F5',
					},
				}}
			>
				Zakończ kontrolę
			</Button>
		</form>
	);
};
