
import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import { Login } from './screens/Login';
import { HotelsList } from './screens/HotelsList';
import { HotelDetails } from './screens/HotelDetails';
import HotelRoomList from './screens/HotelRoomList';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { globalTheme as theme } from './themes/GlobalTheme';
import RoomsProvider from './contexts/roomsContext';
import { RoomCard } from './components/RoomCard/RoomCard'

export const App = () => (												
		<RoomsProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router>
					<Switch>
						<Route path='/login' element={<Login />} />
						<Route path='/hotels' element={<HotelsList />} />
						<Route path='/hotel/:hotelId' element={<HotelDetails />} />
						<Route path='/hotel/:hotelId/rooms' element={<HotelRoomList />} />
						<Route path='/hotel/:hotelId/room/:roomId' element={<RoomCard />} />
					</Switch>
				</Router>
			</ThemeProvider>
		</RoomsProvider>
	);
