import React, { useContext } from 'react';
import { RoomsContext } from '../contexts/roomsContext';
import { Button, Box, FormControlLabel, Container, Typography, Radio, RadioGroup } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { DirectionIcon } from '../components/DirectionIcon/DirectionIcon';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
interface FormValues {
	[key: string]: string;
}

type Room = {
	id: string;
	result: string;
	roomType: string;
	status: string;
};

export const RoomResultCard = () => {
	const { handleSubmit, control, watch } = useForm<FormValues>();
	const { hotelId, roomId } = useParams<string>();
	const navigate = useNavigate();
	const [rooms, setRooms] = useContext(RoomsContext)

    const currentRoom = rooms.findIndex((room:Room) => room.id === roomId)

	const handleCloseForm: SubmitHandler<FormValues> = (data: any) => {
		navigate(`/hotel/${hotelId}`);
	};

	const handleNavigate = () => {
		navigate(`/hotel/${hotelId}`)
	}

    const doneTasks = () => {
        let counter = 0
        rooms[currentRoom].controlCheckedTasks.forEach((task:any) => task.label === 'tak' && counter++)
        return counter
    }

	return (
		<Container component='main'>
			<Box
				sx={{ display: 'flex', justifyContent: 'flex-start', minWidth: '290px', marginTop: '50px', marginBottom: '5px' }}
			>
				<DirectionIcon direction={'left'} />
				<Typography
					variant='h5'
					onClick={handleNavigate}
					sx={{ textDecoration: 'none', color: '#121212', fontWeight: 600, marginLeft: '10px', '&:hover': {
						cursor: 'pointer'
					}}}
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
					Wynik kontroli: {doneTasks() !== 0 ? `${doneTasks()*2}0%` : '0%'}
				</Typography>
			</Box>
			<form onSubmit={handleSubmit(handleCloseForm)}>
				{rooms[currentRoom].controlCheckedTasks.map((task:any, index:number) => (
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
                                        disabled={true}
										control={
											<Radio
                                                checked={task.label === 'tak' ? true : false}
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
                                        disabled={true}
										control={
											<Radio
                                                checked={task.label === 'nie' ? true : false}
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
										value='nie'
										labelPlacement='bottom'
										sx={{ margin: '0px 10px 0px 0px' }}
									/>
								</RadioGroup>
							)}
						/>
						<Typography variant='body1' sx={{ color: '#121212' }}>
							{task.description}
						</Typography>
					</Box>
				))}
				<Button
					type='submit'
					variant='contained'
					sx={{
						backgroundColor: '#3F7A29',
						margin: '75px 0px 50px 0px',
						color: '#EEF4F5',
						py: '10.25px',
						minWidth: '290px',
						'& .MuiButton-root': {
							height: 28,
						}
					}}
				>
					Zamknij
				</Button>
			</form>
		</Container>
	);
};
