import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { RoleContext } from '../../contexts/roleContext'
import { RoomCleaningCard } from '../../screens/RoomCleaningCard'
import { RoomControlCard } from '../../screens/RoomControlCard'

export function RoomCard() {
    const { role } = useContext(RoleContext)
    const { state } = useLocation()
    useEffect(() => {
        console.log(state)
    })

    return (
        <>
            { role === 'worker' && state.status === 'Do posprzątania' && <RoomCleaningCard /> }
            { role === 'supervisor' && state.status === 'Do kontroli' ? <RoomControlCard /> : state.status === 'W trakcie kontroli' && <RoomControlCard />}
            {/* { role === 'boss' && state.status === 'Skontrolowany' && <RoomControlResultCard /> } */}
        </>
    )
}