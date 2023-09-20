import React, { useState } from 'react'

interface Room {
    id?: string,
    roomType?: string,
    status?: string,
    result?: string
}

const roomsArray:Room[] = [
    {
        id: 'room1',
        roomType: 'Single Room',
        status: 'Do posprzątania',
        result: ''
    },
    {
        id: 'room2',
        roomType: 'Double Room',
        status: 'Do posprzątania',
        result: ''
    },
    {
        id: 'room3',
        roomType: 'Suite room',
        status: 'Do posprzątania',
        result: ''
    },
    {
        id: 'room4',
        roomType: 'Deluxe room',
        status: 'Do posprzątania',
        result: ''
    }
]

export const RoomsContext = React.createContext<Room[] | any>([])

type RoomsProviderProps = {
    children: React.ReactNode
}

export default function RoomsProvider({ children } : RoomsProviderProps){
    const [rooms, setRooms] = useState(roomsArray)

    return (
        <RoomsContext.Provider value={[rooms, setRooms]}>
            {children}
        </RoomsContext.Provider>
    )
}