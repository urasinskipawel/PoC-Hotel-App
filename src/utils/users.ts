import { status } from '../contexts/roomsContext'

interface User {
    id: string,
    login: string,
    password: string,
    role: role
}

interface role {
    NAME: string,
    ACCESS: string[]
}

export const roles = {
    WORKER: {
        NAME: 'worker',
        ACCESS: [status.toClean, status.duringClean]
    },
    SUPERVISOR: {
        NAME: 'supervisor',
        ACCESS: [status.toControl, status.duringControl]
    },
    BOSS: {
        NAME: 'boss',
        ACCESS: [status.controlled]
    },
    ADMIN: {
        NAME: 'admin',
        ACCESS: [] as string[]
    }
}

for(const [key, value] of Object.entries(status)){
    roles.ADMIN.ACCESS.push(value)
}

export const users:User[] = [
    {
        id: 'user1',
        login: 'worker@gmail.com',
        password: 'worker',
        role: {
            NAME: roles.WORKER.NAME,
            ACCESS: roles.WORKER.ACCESS
        }
    },
    {
        id: 'user2',
        login: 'supervisor@gmail.com',
        password: 'supervisor',
        role: {
            NAME: roles.SUPERVISOR.NAME,
            ACCESS: roles.SUPERVISOR.ACCESS
        }
    },
    {
        id: 'user3',
        login: 'boss@gmail.com',
        password: 'boss',
        role: {
            NAME: roles.BOSS.NAME,
            ACCESS: roles.BOSS.ACCESS
        }
    },
    {
        id: 'user4',
        login: 'admin@gmail.com',
        password: 'admin',
        role: {
            NAME: roles.ADMIN.NAME,
            ACCESS: roles.ADMIN.ACCESS
        }
    }
]