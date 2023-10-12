interface tasks {
	id: string;
	label: string;
	description?: string;
}

export interface Room {
	id: string;
	hotelId: string;
	roomType: string;
	status: string;
	controlCheckedTasks?: tasks[];
	cleaningCheckedTasks?: tasks[];
}

