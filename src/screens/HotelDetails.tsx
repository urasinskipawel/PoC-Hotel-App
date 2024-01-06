import React, { useContext, useState } from 'react';
import uuid from 'react-uuid';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { DetailsButton } from '../components/DetailsButton/DetailsButton';
import { RoomsContext } from '../contexts/roomsContext';
import { Room } from '../utils/interfaces';
import { RoleContext } from '../contexts/roleContext';
import { LeftDirectionIcon } from '../assets/icons/LeftDirectionIcon';
import { RightDirectionIcon } from '../assets/icons/RightDirectionIcon';
import { statusColors } from '../constants/statusColors';
import { roomStatuses } from '../constants/roomStatuses';
import { userRoles } from '../constants/users';

interface Styles {
	status: string;
	color: string;
}

export const HotelDetails = () => {
	const { hotelId } = useParams<{ hotelId: string }>();
	const navigate = useNavigate();
	const [rooms, setRooms] = useContext(RoomsContext);
	const [roomsArray, setRoomsArray] = useState(rooms);
	const { role } = useContext(RoleContext);

	const styles: Styles[] = [
		{ status: roomStatuses.duringClean, color: statusColors.pink },
		{ status: roomStatuses.toControl, color: statusColors.blue },
		{ status: roomStatuses.duringControl, color: statusColors.lightGreen },
		{ status: roomStatuses.controlled, color: statusColors.darkGreen },
	];

	const handleDisabled = (room: Room) => {
		if (room.status !== roomStatuses.toClean && role === userRoles.WORKER.NAME) return true;
		if (room.status !== roomStatuses.toControl && role === userRoles.SUPERVISOR.NAME) return true;
		if (room.status !== roomStatuses.controlled && role === userRoles.SUPERVISOR.NAME) return true;
	};

	const handleStyle = (roomId: string) => {
		let found = {
			style: statusColors.red,
			status: roomStatuses.toClean,
		};

		roomsArray.find((room: Room) => {
			if (room.id === roomId) {
				found.status = room.status;

				styles.forEach(style => {
					if (style.status === room.status) {
						found.style = style.color;
					}
				});
			}
		});
		return found;
	};

	const handleNavigate = (room: Room) => {
		navigate(`/hotel/${hotelId}/room/${room.id}`, {
			state: {
				status: room.status,
				hotelId,
			},
		});
	};

	return (
		<Container component='main'>
			<Box
				component={Link}
				to={`/hotels`}
				sx={{
					display: 'flex',
					justifyContent: 'flex-start',
					minWidth: '290px',
					marginTop: '50px',
					marginBottom: '30px',
					textDecoration: 'none',
				}}>
				<LeftDirectionIcon />
				<Typography variant='h5' sx={{ fontWeight: 600, color: '#121212', marginLeft: '10px' }}>
					Szczegóły hotelu
				</Typography>
			</Box>
			{roomsArray.map(
				(room: Room) =>
					room.hotelId === hotelId && (
						<Box key={uuid()}>
							<DetailsButton
								border={`3px solid ${handleStyle(room.id).style}`}
								handleNavigate={() => handleNavigate(room)}
								disabled={handleDisabled(room)}>
								<Typography
									variant='h6'
									sx={{ fontSize: '20px', fontWeight: 600, left: '20px', flex: '1', textAlign: 'center' }}>
									{room.roomType}
								</Typography>
								<RightDirectionIcon />
							</DetailsButton>
							<Typography
								variant='body1'
								sx={{
									display: 'flex',
									justifyContent: 'flex-end',
									marginTop: '-2px',
									fontSize: '16px',
									color: handleStyle(room.id).style,
								}}>
								{handleStyle(room.id).status}
							</Typography>
						</Box>
					)
			)}
		</Container>
	);
};
