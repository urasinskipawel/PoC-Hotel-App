import { roomStatuses } from './roomStatuses';

interface User {
	id: string;
	login: string;
	password: string;
	role: role;
}

interface role {
	NAME: string;
	ACCESS: string[];
}

export const userRoles = {
	WORKER: {
		NAME: 'worker',
		ACCESS: [roomStatuses.toClean, roomStatuses.duringClean],
	},
	SUPERVISOR: {
		NAME: 'supervisor',
		ACCESS: [roomStatuses.toControl, roomStatuses.duringControl],
	},
	BOSS: {
		NAME: 'boss',
		ACCESS: [roomStatuses.controlled],
	},
	ADMIN: {
		NAME: 'admin',
		ACCESS: [] as string[],
	},
};

for (const [key, value] of Object.entries(roomStatuses)) {
	userRoles.ADMIN.ACCESS.push(value);
}

export const users: User[] = [
	{
		id: 'user1',
		login: 'worker@gmail.com',
		password: 'worker',
		role: {
			NAME: userRoles.WORKER.NAME,
			ACCESS: userRoles.WORKER.ACCESS,
		},
	},
	{
		id: 'user2',
		login: 'supervisor@gmail.com',
		password: 'supervisor',
		role: {
			NAME: userRoles.SUPERVISOR.NAME,
			ACCESS: userRoles.SUPERVISOR.ACCESS,
		},
	},
	{
		id: 'user3',
		login: 'boss@gmail.com',
		password: 'boss',
		role: {
			NAME: userRoles.BOSS.NAME,
			ACCESS: userRoles.BOSS.ACCESS,
		},
	},
	{
		id: 'user4',
		login: 'admin@gmail.com',
		password: 'admin',
		role: {
			NAME: userRoles.ADMIN.NAME,
			ACCESS: userRoles.ADMIN.ACCESS,
		},
	},
];
