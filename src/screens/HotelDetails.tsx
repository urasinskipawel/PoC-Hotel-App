import React from 'react'
import { useParams } from 'react-router-dom'
import { Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'

interface Room {
  roomId: string
  roomName: string
}

const rooms: Room[] = [
  { roomId: 'room1', roomName: 'Single Room' },
  { roomId: 'room2', roomName: 'Double Room' },
  { roomId: 'room3', roomName: 'Suite' },
  { roomId: 'room4', roomName: 'Deluxe Room' },
]

const HotelDetails = () => {
  const { hotelId } = useParams<{ hotelId: string }>()

  return (
    <div>
      <h2>Szczegóły Hotelu {hotelId}</h2>
      <h3>Pokoje:</h3>
      <Box display='flex' flexDirection='column'>
        {rooms.map((room) => (
          <Button
            key={room.roomId}
            variant='contained'
            color='primary'
            component={Link}
            to={`/hotel/${hotelId}/room/${room.roomId}`}
            sx={{ marginBottom: '10px' }}
          >
            {room.roomName}
          </Button>
        ))}
      </Box>
    </div>
  )
}

export default HotelDetails
