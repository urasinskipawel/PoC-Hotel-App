interface tasks {
    id: string,
    label: string,
    description?: string
}

interface Room {
    id: string,
    roomType: string,
    status: string,
    controlCheckedTasks?: tasks[],
    cleaningCheckedTasks?: tasks[]
}

export {
    Room
}