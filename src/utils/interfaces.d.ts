export interface Task {
	id: string;
	label: string;
	description?: string;
}
export interface Room {
	id: string;
	hotelId: string;
	roomType: string;
	status: string;
	controlCheckedTasks?: Task[];
	cleaningCheckedTasks?: Task[];
}
interface HotelRoom {
	roomId: string;
	roomType: string;
}
export interface Hotel {
	hotelId: string;
	hotelName: string;
	hotelStreet: string;
	hotelRooms: HotelRoom[];
}
export interface FormValues {
	[key: string]: string;
}
