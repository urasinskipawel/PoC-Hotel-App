import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { RoleContext } from '../../contexts/roleContext'
import { RoomCleaningCard } from '../../screens/RoomCleaningCard'
import { RoomControlCard } from '../../screens/RoomControlCard'
import { RoomResultCard } from '../../screens/RoomResultCard'

export function RoomCard() {
    const { role } = useContext(RoleContext)
    const { state } = useLocation()
    useEffect(() => {
        console.log(role)
    })

    const handleComponent = () => {
        let component
        if(role === 'worker' && state.status === 'Do posprzątania'){
            component = <RoomCleaningCard />
        }else if(role === 'supervisor' && state.status === 'Do kontroli' || role === 'supervisor' && state.status === 'W trakcie kontroli'){
            component = <RoomControlCard />
        }else if(role === 'boss' && state.status === 'Skontrolowany'){
            component = <RoomResultCard />
        }

        return component
    }

    return (
        <>
            {
                handleComponent()
            }
        </>
    )
}