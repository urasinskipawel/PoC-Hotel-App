// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import { Home } from './screens/Home';
import { Login } from './screens/Login';
import { HotelsList } from './screens/HotelsList';
import HotelDetails from './screens/HotelDetails';
import HotelRoomList from './screens/HotelRoomList';
import HotelRoomDetails from './screens/HotelRoomDetails';
import { CssBaseline} from '@mui/material';

export const App = () => {
	return (
		<Router>
			<CssBaseline />
			<Switch>
				{/* <Route path='/' element={<Home />} /> */}
				<Route path='/login' element={<Login />} />
				<Route path='/hotels' element={<HotelsList />} />
				<Route path='/hotel/:hotelId' element={<HotelDetails />} />
				<Route path='/hotel/:hotelId/rooms' element={<HotelRoomList />} />
				<Route path='/hotel/:hotelId/room/:roomId' element={<HotelRoomDetails />} />
			</Switch>
		</Router>
	);
};
