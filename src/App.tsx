import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Routes as Switch, Route, Navigate } from 'react-router-dom';
// import { Home } from './screens/Home';
import { Login } from './screens/Login';
import { HotelsList } from './screens/HotelsList';
import { HotelDetails } from './screens/HotelDetails';
import HotelRoomList from './screens/HotelRoomList';
// import { RoomCleaningCard } from './screens/RoomCleaningCard';
// import { RoomControlCard } from './screens/RoomControlCard';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { globalTheme as theme } from './themes/GlobalTheme';
import RoomsProvider from './contexts/roomsContext';
import { RoleProvider } from './context/roleContext';
import { PrivateRoute } from './routes/PrivateRoute';

export const App = () => {
	return (
    <RoomsProvider>
	    <ThemeProvider theme={theme}>
		    <CssBaseline />
		    <RoleProvider>
		      <Router>
		        <Switch>
		          {/* <Route path='/' element={<Home />} /> */}
	             <Route path='/login' element={<Login />} />
		            <Route path='/hotels' element={<HotelsList />} />
		            <Route path='/hotel/:hotelId' element={<HotelDetails />} />
	              <Route path='/hotel/:hotelId/rooms' element={<HotelRoomList />} />
		            <Route path='/hotel/:hotelId/room/:roomId' element={<PrivateRoute />} />
		        </Switch>
		      </Router>
		    </RoleProvider>
		  </ThemeProvider>
    </RoomsProvider>
	);
};