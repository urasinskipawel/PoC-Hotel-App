import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { RoleContext } from '../../contexts/roleContext'
import { RoomCleaningCard } from '../../screens/RoomCleaningCard'
import { RoomControlCard } from '../../screens/RoomControlCard'
import { RoomResultCard } from '../../screens/RoomResultCard'
import { Navigate } from 'react-router-dom'

export function RoomCard() {
    const { role } = useContext(RoleContext)
    const { state } = useLocation()

    const handleComponent = () => {
        if((role === 'worker' || role === 'admin') && (state.status === 'Do posprzątania' || state.status === 'W trakcie sprzątania')){
            return <RoomCleaningCard />
        }else if((role ==='supervisor' || role === 'admin') && (state.status === 'Do kontroli' || state.status === 'W trakcie kontroli')){
            return <RoomControlCard />
        }else if((role ==='boss' || role === 'admin') && state.status === 'Skontrolowany'){
            return <RoomResultCard />
        }else{
            return <Navigate to={`/hotel/${state.hotelId}`} />
        }
    }

    return (
        <>
            {
                handleComponent()
            }
        </>
    )
}