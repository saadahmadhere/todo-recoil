import { useRecoilValue, useSetRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { todosState } from './store/atoms/todos';
import { useState } from 'react';

const UserInput = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const todos = useRecoilValue(todosState);
	const setTodo = useSetRecoilState(todosState);

	const handleAddTodo = () => {
		const newTodoArray = [
			...todos,
			{
				id: uuidv4(),
				title,
				description,
			},
		];
		setTodo((oldTodos) => [
			...oldTodos,
			{
				id: uuidv4(),
				title,
				description,
			},
		]);
		localStorage.setItem('todos', JSON.stringify(newTodoArray));
		setTitle('');
		setDescription('');
	};

	return (
		<div className='user-input'>
			<div>
				<h3>Title</h3>
				<input
					type='text'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div>
				<h3>Description</h3>
				<input
					type='text'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
			<button onClick={handleAddTodo}>Add Todo</button>
		</div>
	);
};

export default UserInput;
