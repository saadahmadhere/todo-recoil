import { useSetRecoilState } from 'recoil';
import { todosState } from './store/atoms/todos';
import { useState } from 'react';

const Filter = () => {
	const [filter, setFilter] = useState('');
	const setTodos = useSetRecoilState(todosState);

	const handleFilterChange = (e) => {
		const filterValue = e.target.value;
		setFilter(filterValue);
		if (filter === '') {
			setTodos(JSON.parse(localStorage.getItem('todos')) || []);
			return;
		}
		const filterTodos = (todos, filterValue) => {
			return todos.filter((todo) => {
				return (
					todo.title.includes(filterValue) ||
					todo.description.includes(filterValue)
				);
			});
		};
		setTodos((oldTodos) => {
			return filterTodos(oldTodos, filterValue);
		});
	};

	return (
		<div>
			<h4>Filter:</h4>
			<input type='text' onChange={handleFilterChange} value={filter} />
		</div>
	);
};

export default Filter;
