import React, { useState } from 'react'

interface tasks {
    id: string,
    label: string,
    description?: string
}

interface Room {
    id?: string,
    roomType?: string,
    status?: string,
    result?: string,
    controlCheckedTasks?: tasks[]
}

const roomsArray:Room[] = [
    {
        id: 'room1',
        roomType: 'Single Room',
        status: 'Do posprzątania',
        result: '',
        controlCheckedTasks: []
    },
    {
        id: 'room2',
        roomType: 'Double Room',
        status: 'Do kontroli',
        result: '',
        controlCheckedTasks: []
    },
    {
        id: 'room3',
        roomType: 'Suite room',
        status: 'W trakcie kontroli',
        result: '',
        controlCheckedTasks: []
    },
    {
        id: 'room4',
        roomType: 'Deluxe room',
        status: 'Skontrolowany',
        result: '',
        controlCheckedTasks: [
            {
                id: 'task-0',
                label: 'tak',
                description: 'Odkurzyć lub wytrzepać dywan, zamiatać podłogę.'
            },
            {
                id: 'task-1',
                label: 'tak',
                description: 'Wypłukać i przetrzeć wewnętrzne powierzchnie czajnika/Cafetiera.'
            },
            {
                id: 'task-2',
                label: 'nie',
                description: 'Wyczyścić lustro ze smug i plam.'
            },
            {
                id: 'task-3',
                label: 'tak',
                description: 'Wyczyścić umywalkę, kran, toaletę i wannę/prysznic.'
            },
            {
                id: 'task-4',
                label: 'nie',
                description: 'Przetrzeć powierzchnie mebli wilgotną szmatką.'
            },
        ]
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