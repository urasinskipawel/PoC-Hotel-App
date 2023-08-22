import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

interface Room {
  roomId: string
  roomName: string
}

interface Hotel {
  hotelId: string
  hotelName: string
  hotelRooms: Room[]
}

const hotels: Hotel[] = [
  {
    hotelId: 'hotel1',
    hotelName: 'Hotel A',
    hotelRooms: [
      { roomId: 'room1', roomName: 'Single Room' },
      { roomId: 'room2', roomName: 'Double Room' },
    ],
  },
  {
    hotelId: 'hotel2',
    hotelName: 'Hotel B',
    hotelRooms: [
      { roomId: 'room3', roomName: 'Suite' },
      { roomId: 'room4', roomName: 'Deluxe Room' },
    ],
  },
]

const HotelList = () => {
  return (
    <div>
      <h2>Lista Hoteli</h2>
      {hotels.map((hotel) => (
        <div key={hotel.hotelId}>
          <h3>
            <Button
              component={Link}
              to={`/hotel/${hotel.hotelId}`}
              color='primary'
            >
              {hotel.hotelName}
            </Button>
          </h3>
          <ul>
            {hotel.hotelRooms.map((room) => (
              <li key={room.roomId}>
                Pokój {room.roomName} (ID: {room.roomId})
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default HotelList
