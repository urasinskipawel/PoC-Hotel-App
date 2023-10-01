interface User {
    id: string,
    login: string,
    password: string,
    role: string
}

export const users:User[] = [
    {
        id: 'user1',
        login: 'worker@gmail.com',
        password: 'worker',
        role: 'worker'
    },
    {
        id: 'user2',
        login: 'supervisor@gmail.com',
        password: 'supervisor',
        role: 'supervisor'
    },
    {
        id: 'user3',
        login: 'boss@gmail.com',
        password: 'boss',
        role: 'boss'
    },
    {
        id: 'user4',
        login: 'admin@gmail.com',
        password: 'admin',
        role: 'admin'
    }
]