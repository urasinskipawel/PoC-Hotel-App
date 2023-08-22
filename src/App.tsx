// App.tsx
import React from 'react'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Container, CssBaseline } from '@mui/material'
import Home from './screens/Home'
import Login from './screens/Login'
import HotelList from './screens/HotelList'
import HotelDetails from './screens/HotelDetails'
import HotelRoomList from './screens/HotelRoomList'
import HotelRoomDetails from './screens/HotelRoomDetails'

function App() {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route exact path='/' element={Home} />
        <Route path='/login' element={Login} />
        <Route path='/hotels' element={HotelList} />
        <Route path='/hotel/:hotelId' element={HotelDetails} />
        <Route path='/hotel/:hotelId/rooms' element={HotelRoomList} />
        <Route path='/hotel/:hotelId/room/:roomId' element={HotelRoomDetails} />
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default App
