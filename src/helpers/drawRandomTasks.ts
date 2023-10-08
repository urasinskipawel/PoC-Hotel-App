import { cleaningTasks } from '../utils/cleaningTasks';

const drawRandomTasks = (arr: string[], tasksNumber = 5): Set<string> => {
	const randomTasks: string[] = [];
	const newControlTasks: string[] = [...arr];
	for (let i = 0; i < tasksNumber; i++) {
		const randomIndex = Math.floor(Math.random() * newControlTasks.length);
		const randomTask = newControlTasks.splice(randomIndex, 1)[0];
		randomTasks.push(randomTask);
	}
	const uniqueTasks: Set<string> = new Set(randomTasks);
	return uniqueTasks;
};

const uniqueControlTasks: Set<string> = drawRandomTasks(cleaningTasks);

export const uniqueControlTasksArray: string[] = [...uniqueControlTasks];
