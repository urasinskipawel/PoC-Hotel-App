import React, { useContext, useEffect } from 'react'
import { RoleContext } from '../../contexts/roleContext'
import { RoomCleaningCard } from '../../screens/RoomCleaningCard'
import { RoomControlCard } from '../../screens/RoomControlCard'

export function RoomCard() {
    const { role } = useContext(RoleContext)
    useEffect(() => {
        console.log(role)
    })

    return (
        <>
            { role === 'worker' && <RoomCleaningCard /> }
            { role === 'supervisor' && <RoomControlCard /> }
        </>
    )
}