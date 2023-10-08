import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { RoleContext } from '../../contexts/roleContext'
import { RoomCleaningCard } from '../../screens/RoomCleaningCard'
import { RoomControlCard } from '../../screens/RoomControlCard'
import { RoomResultCard } from '../../screens/RoomResultCard'
import { Navigate } from 'react-router-dom'
import { roles } from '../../utils/users'

export function RoomCard() {
    const { access } = useContext(RoleContext)
    const { state } = useLocation()

    const components = [
        {
            access: roles.WORKER.ACCESS,
            component: <RoomCleaningCard />
        },
        {
            access: roles.SUPERVISOR.ACCESS,
            component: <RoomControlCard />
        },
        {
            access: roles.BOSS.ACCESS,
            component: <RoomResultCard />
        }
    ]

    const handleComponent = () => {
        const found = components.find(component => component.access.includes(state.status))

        if(!!found 
            && found.access.includes(state.status) 
            && access.includes(state.status)){
            return found.component
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