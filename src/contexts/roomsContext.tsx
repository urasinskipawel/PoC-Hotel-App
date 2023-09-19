import React, { useState } from 'react'

interface Room {
    id: number,
    roomId: string,
    roomName: string,
    status: string,
    result: string
}

const roomsArray:Room[] = [
    {
        id: 0,
        roomId: 'room1',
        roomName: 'Single Room',
        status: 'Do posprzątania',
        result: ''
    },
    {
        id: 1,
        roomId: 'room2',
        roomName: 'Double Room',
        status: 'Do posprzątania',
        result: ''
    },
    {
        id: 2,
        roomId: 'room3',
        roomName: 'Suite room',
        status: 'Do posprzątania',
        result: ''
    },
    {
        id: 3,
        roomId: 'room4',
        roomName: 'Deluxe room',
        status: 'Do posprzątania',
        result: ''
    }
]

export const RoomsContext = React.createContext<Room[] | null>(null)

type RoomsProviderProps = {
    children: React.ReactNode
}

export default function RoomsProvider({ children } : RoomsProviderProps){

    const [rooms, setRooms] = useState({...roomsArray})

    return (
        <RoomsContext.Provider value={[rooms, setRooms]}>
            {children}
        </RoomsContext.Provider>
    )
}