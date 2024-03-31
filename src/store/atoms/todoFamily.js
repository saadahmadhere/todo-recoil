import axios from 'axios';
import { atomFamily, selectorFamily } from 'recoil';

// const TODOS = [
// 	{
// 		id: 1,
// 		title: 'Go to Gym',
// 		description: 'Hit the gym from 7-9',
// 	},
// 	{
// 		id: 2,
// 		title: 'Go to eat food',
// 		description: 'Eat food from from 9-11',
// 	},
// ];

// export const todosAtomFamily = atomFamily({
// 	key: 'todosFamily',
// 	default: (id) => {
// 		return TODOS.find((item) => item.id === id);
// 	},
// });

export const todosAtomFamily = atomFamily({
	key: 'todosAtomFamily',
	default: selectorFamily({
		key: 'todosSelectorFamily',
		get: (id) => async () => {
			// await new Promise((r) => setTimeout(r, 3000));
			// throw new Error('bE failed');
			const res = await axios.get(
				`https://sum-server.100xdevs.com/todo?id=${id}`
			);
			return res.data.todo;
		},
	}),
});
