export interface Task {
	id: string;
	label: string;
	description?: string;
}
export interface Room {
	id: string;
	roomType: string;
	status: string;
	controlCheckedTasks?: string[];
	cleaningCheckedTasks?: Task[];
}
export interface Hotel {
	hotelId: string;
	hotelName: string;
	hotelStreet: string;
	hotelRooms: Room[];
}
export interface FormValues {
	[key: string]: string;
}
