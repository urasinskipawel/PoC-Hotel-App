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
	controlCheckedTasks?: tasks[];
	cleaningCheckedTasks?: tasks[];
}
interface HotelRoom {
	roomId: string;
	roomName: string;
}
export interface Hotel {
	hotelId: string;
	hotelName: string;
	hotelStreet: string;
	hotelRooms: HotelRoom[];
}
